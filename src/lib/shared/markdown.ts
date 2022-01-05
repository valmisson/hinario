import { readFileSync } from 'fs'
import { basename, extname } from 'path'
import { compile } from 'mdsvex'
import remarkBreaks from 'remark-breaks'

const options = {
  remarkPlugins: [remarkBreaks]
}

export async function process (filePath: string) {
  const content = readFileSync(filePath, { encoding: 'utf-8' })

  // @ts-expect-error mdsvex types
  const { code, data } = await compile(content, options)
  const filename = basename(filePath, extname(filePath))
  const html = code
    .replace(/<script.*>.*<\/script>/ims, '') // remove the tag script
    .trim()

  return {
    metadata: data.fm,
    file: {
      name: filename,
      html
    }
  }
}
