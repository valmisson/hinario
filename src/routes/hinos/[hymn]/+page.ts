import { error } from '@sveltejs/kit'
import type { LoadEvent } from '@sveltejs/kit'

export const prerender = true

export async function load ({ fetch, params }: LoadEvent) {
  const hymnPath = params.hymn

  const res = await fetch(`/hinos/${hymnPath}.json`)

  if (res.ok) {
    const { file, metadata } = await res.json()

    return {
      metadata,
      file
    }
  }

  throw error(404, `Not found: /${hymnPath}`)
}
