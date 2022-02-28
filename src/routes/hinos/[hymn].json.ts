import { process } from '$shared/markdown'
import type { LoadInput } from '@sveltejs/kit'

export async function get ({ params }: LoadInput) {
  const { hymn } = params
  const { file, metadata } = await process(`src/content/hinos/${hymn}.md`)

  return {
    body: {
      metadata,
      file
    }
  }
}
