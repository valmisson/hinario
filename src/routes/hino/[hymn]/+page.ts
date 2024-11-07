import { error } from '@sveltejs/kit'
import type { LoadEvent } from '@sveltejs/kit'

export const prerender = true

export async function load ({ fetch, params }: LoadEvent) {
  const response = await fetch(`/hino/${params.hymn}.json`)

  if (response.ok) {
    const { title, html } = await response.json()

    return {
      hymn: {
        title,
        html
      }
    }
  }

  return error(404, `${params.hymn} não encontrado!`)
}
