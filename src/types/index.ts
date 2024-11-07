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

export interface HymnsProps {
  hymns: Hymn[];
}

export interface HymnProps {
  hymn: {
    title: string;
    html: string;
  }
}
