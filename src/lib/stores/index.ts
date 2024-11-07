import { writable } from 'svelte/store'
import hymns from '~/lib/content/hymns'
import type { Hymn } from '~/types'

export const appTitle = writable('Hinário CCB - Hinos de Louvores e Súplicas a Deus - Livro N° 5')

export const hymnsList = writable<Hymn[]>(hymns)
