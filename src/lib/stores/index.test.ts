import { describe, expect, test } from 'vitest'
import { get } from 'svelte/store'

import { appTitle, hymnsList } from '$lib/stores'

describe('Store', () => {
  test('should have the title in appTitle store', () => {
    expect(get(appTitle)).toMatchSnapshot()
  })

  test('should have 480 items in hymnsList', () => {
    expect(get(hymnsList)).toHaveLength(480)
  })

  test('should have info of the hymns in hymnsList', () => {
    expect(get(hymnsList)[0]).toMatchSnapshot()
  })
})
