import { error, json } from '@sveltejs/kit'
import { processFile } from '$lib/utils'
import type { LoadEvent } from '@sveltejs/kit'

const HYMNS_FOLDER = 'src/lib/content/hymns/files'

export async function GET ({ params }: LoadEvent): Promise<Response> {
  const hymn = await processFile(`${HYMNS_FOLDER}/${params.hymn}.md`)

  if (!hymn) error(404, `${params.hymn} não encontrado!`)

  return json({
    title: `${hymn.metadata.number}. ${hymn.metadata.title}`,
    html: hymn.file.html
  })
}
