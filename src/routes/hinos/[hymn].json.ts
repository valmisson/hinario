import { process } from '$shared/markdown'
import type { Request } from '@sveltejs/kit'

export async function get ({ params }: Request) {
  const { hymn } = params
  const { file, metadata } = await process(`src/content/hinos/${hymn}.md`)

  return {
    body: {
      metadata,
      file
    }
  }
}
