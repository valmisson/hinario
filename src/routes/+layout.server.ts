import { getFiles, processFile } from '$lib/utils'

const HYMNS_FOLDER = 'src/lib/content/hymns'

export const prerender = true

export async function load () {
  const files = await getFiles(HYMNS_FOLDER)

  const hymns = await Promise.all(files.map(async fileName => {
    const { file, metadata } = await processFile(`${HYMNS_FOLDER}/${fileName}`)

    return {
      file: {
        name: file.name
      },
      metadata
    }
  }))

  return {
    hymns
  }
}
