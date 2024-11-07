import { readFile } from 'node:fs'
import { basename, extname } from 'node:path'
import { compile } from 'mdsvex'
import remarkBreaks from 'remark-breaks'
import type { Hymn } from '~/types'

export function getFile (path: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    readFile(path, (error, file) => {
      if (error) reject(error)

      resolve(file)
    })
  })
}

export async function processFile (filePath: string): Promise<Hymn | null> {
  try {
    const file = await getFile(filePath)

    // @ts-expect-error mdsvex types
    const { code, data } = await compile(file, { remarkPlugins: [remarkBreaks] })

    const html = code.replace(/<script.*>.*<\/script>/ims, '').trim()

    return {
      metadata: data.fm,
      file: {
        name: basename(filePath, extname(filePath)),
        html
      }
    } as Hymn
  } catch {
    return null
  }
}
