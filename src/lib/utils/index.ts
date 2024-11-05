import { readdir, readFileSync } from 'node:fs'
import { basename, extname } from 'node:path'
import { compile } from 'mdsvex'
import type { Hymn } from '~/types'

export function getFiles (path: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    readdir(path, (error, files) => {
      if (error) reject(error)

      const filesName = files.sort((a, b) => (
        a.localeCompare(b, undefined, { numeric: true })
      ))

      resolve(filesName)
    })
  })
}

export async function processFile (filePath: string): Promise<Hymn> {
  const file = readFileSync(filePath, { encoding: 'utf-8' })

  // @ts-expect-error mdsvex types
  const { code, data } = await compile(file)

  const html = code.replace(/<script.*>.*<\/script>/ims, '').trim()

  return {
    metadata: data.fm,
    file: {
      name: basename(filePath, extname(filePath)),
      html
    }
  } as Hymn
}
