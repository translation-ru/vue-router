import { extractComponentsGuards } from '../../src/navigationGuards'
import type { RouteRecordRaw, RouteRecordNormalized } from '../../src'
import { START_LOCATION_NORMALIZED } from '../../src/location'
import { components } from '../utils'
import { normalizeRouteRecord } from '../../src/matcher'
import { mockWarn } from '../vitest-mock-warn'
import { vi, describe, expect, it, beforeEach } from 'vitest'

const beforeRouteEnter = vi.fn()

// stub those two
const to = START_LOCATION_NORMALIZED
const from = START_LOCATION_NORMALIZED

const NoGuard: RouteRecordRaw = { path: '/', component: components.Home }
// @ts-expect-error
const InvalidRoute: RouteRecordRaw = {
  path: '/',
  component: null,
}
const WrongLazyRoute: RouteRecordRaw = {
  path: '/',
  component: Promise.resolve(components.Home),
}
const SingleGuard: RouteRecordRaw = {
  path: '/',
  component: { ...components.Home, beforeRouteEnter },
}
const SingleGuardNamed: RouteRecordRaw = {
  path: '/',
  components: {
    default: { ...components.Home, beforeRouteEnter },
    other: { ...components.Foo, beforeRouteEnter },
  },
}
const ErrorLazyLoad: RouteRecordRaw = {
  path: '/',
  component: () => Promise.reject(new Error('custom')),
}

beforeEach(() => {
  beforeRouteEnter.mockReset()
  beforeRouteEnter.mockImplementation((to, from, next) => {
    next()
  })
})

async function checkGuards(
  components: Exclude<RouteRecordRaw, { redirect: any }>[],
  n: number,
  guardsLength: number = n
) {
  beforeRouteEnter.mockClear()
  const guards = extractComponentsGuards(
    // type is fine as we excluded RouteRecordRedirect in components argument
    components.map(normalizeRouteRecord) as RouteRecordNormalized[],
    'beforeRouteEnter',
    to,
    from
  )
  expect(guards).toHaveLength(guardsLength)
  for (const guard of guards) {
    expect(guard).toBeInstanceOf(Function)
    expect(await guard())
  }
  expect(beforeRouteEnter).toHaveBeenCalledTimes(n)
}

describe('extractComponentsGuards', () => {
  mockWarn()

  it('extracts guards from one single component', async () => {
    await checkGuards([SingleGuard], 1)
  })

  it('extracts guards from multiple components (named views)', async () => {
    await checkGuards([SingleGuardNamed], 2)
  })

  it('handles no guards', async () => {
    await checkGuards([NoGuard], 0)
  })

  it('handles mixed things', async () => {
    await checkGuards([SingleGuard, SingleGuardNamed], 3)
    await checkGuards([SingleGuard, SingleGuard], 2)
    await checkGuards([SingleGuardNamed, SingleGuardNamed], 4)
  })

  it('throws if component is null', async () => {
    // @ts-expect-error
    await expect(checkGuards([InvalidRoute], 0))
    expect('either missing a "component(s)" or "children"').toHaveBeenWarned()
  })

  it('warns wrong lazy component', async () => {
    await checkGuards([WrongLazyRoute], 0, 1)
    expect('Promise instead of a function').toHaveBeenWarned()
  })

  it('rejects if lazy load fails', async () => {
    await expect(checkGuards([ErrorLazyLoad], 0, 1)).rejects.toHaveProperty(
      'message',
      'custom'
    )
  })

  it('preserves resolved modules in mods', async () => {
    const mod = {
      default: components.Home,
      __esModule: true,
      custom: true,
    }
    const mod2 = {
      default: components.Bar,
      __esModule: true,
      custom: true,
    }
    const record = normalizeRouteRecord({
      path: '/',
      components: { default: async () => mod, other: async () => mod2 },
    })
    expect(record.mods).toEqual({})
    const guards = extractComponentsGuards(
      [record],
      'beforeRouteEnter',
      to,
      from
    )
    await Promise.all(guards.map(guard => guard()))
    expect(record.mods).toEqual({ default: mod, other: mod2 })
  })
})
