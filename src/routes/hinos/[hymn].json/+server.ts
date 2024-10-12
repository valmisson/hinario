import { json } from '@sveltejs/kit'
import { process } from '$shared/markdown'
import type { LoadEvent } from '@sveltejs/kit'

export async function GET ({ params }: LoadEvent) {
  const { hymn } = params
  const { file, metadata } = await process(`src/content/hinos/${hymn}.md`)

  return json({
    metadata,
    file
  })
}
