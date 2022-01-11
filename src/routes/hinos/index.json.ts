import { readdirSync } from 'fs'
import { process } from '$shared/markdown'

const BASE_DIR = 'src/content/hinos'

export async function get () {
  const files = readdirSync(BASE_DIR)
  const hymns = await Promise.all(files.map(async filePath => {
    const { file, metadata } = await process(`${BASE_DIR}/${filePath}`)

    return {
      metadata,
      file: {
        name: file.name
      }
    }
  }))

  // asc order
  hymns.sort((a, b) => {
    return a.metadata.number - b.metadata.number
  })

  return {
    body: {
      hymns
    }
  }
}
