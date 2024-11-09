import { writable } from 'svelte/store'
import hymns from '~/lib/content/hymns'
import type { Hymn } from '~/types'

export const appTitle = writable('Hinário CCB N° 5 - Hinos de Louvores e Súplicas a Deus')

export const hymnsList = writable<Hymn[]>(hymns)
