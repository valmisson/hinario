import { error } from '@sveltejs/kit'
import type { LoadEvent } from '@sveltejs/kit'

export const prerender = true

export async function load ({ fetch }: LoadEvent) {
  const res = await fetch('/hinos.json')

  if (res.ok) {
    const { hymns } = await res.json()

    return {
      hymns
    }
  }

  throw error(400, 'Error on fetch hyms')
}
