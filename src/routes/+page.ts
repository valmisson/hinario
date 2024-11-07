import type { LoadEvent } from '@sveltejs/kit'

export const prerender = true

export async function load ({ fetch }: LoadEvent) {
  const response = await fetch('/hinos.json')

  if (response.ok) {
    const { hymns } = await response.json()

    return {
      hymns
    }
  }
}
