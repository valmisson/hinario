interface HymnMetadata {
  numero: number
  titulo: string
}

interface HymnFile {
  name: string
  html: string
}

export interface Hymn {
  metadata: HymnMetadata
  file: HymnFile
}

export type Hymns = Array<Hymn>
