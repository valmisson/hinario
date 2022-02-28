import { readdir } from 'fs'

export function getFiles (path: string): Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    readdir(path, (err, files) => {
      if (err) return reject(err)

      const filename = files.filter(name => !/^__*/.test(name))

      resolve(filename)
    })
  })
}
