import { describe, expect, test } from 'vitest'
import { get } from 'svelte/store'

import { appTitle } from '$lib/stores'

describe('Store', () => {
  test('should have the title in appTitle store', () => {
    expect(get(appTitle)).toMatch(
      'Hinário CCB - Hinos de Louvores e Súplicas a Deus - Livro N° 5'
    )
  })
})
