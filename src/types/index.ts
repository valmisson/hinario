export interface Hymn {
  file: {
    name: string;
    html?: string
  },
  metadata: {
    number: number;
    title: string;
  }
}

export interface HymnProps {
  hymns: Hymn[]
}
