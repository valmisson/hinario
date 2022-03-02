import { getFiles } from '$shared/utils'
import { process } from '$shared/markdown'

const BASE_DIR = 'src/content/hinos'

export async function get () {
  const files = await getFiles(BASE_DIR)
  const hymns = await Promise.all(files.map(async filePath => {
    const { file, metadata } = await process(`${BASE_DIR}/${filePath}`)

    return {
      metadata,
      file: {
        name: file.name
      }
    }
  }))

  return {
    body: {
      hymns
    }
  }
}
