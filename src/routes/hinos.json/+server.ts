import { json } from '@sveltejs/kit'
import { get } from 'svelte/store'
import { hymnsList } from '$lib/stores'

export function GET (): Response {
  const hymns = get(hymnsList)

  return json({
    hymns
  })
}
