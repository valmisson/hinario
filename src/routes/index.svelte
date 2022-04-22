<script lang="ts" context="module">
  import { HymnsList } from '$components'
  import type { LoadInput } from '@sveltejs/kit'
  import type { Hymns } from '$types/hymns'

  export async function load ({ fetch }: LoadInput) {
    const res = await fetch('/hinos.json')

    if (res.ok) {
      const { hymns } = await res.json()

      return {
        props: {
          hymns
        }
      }
    }
  }
</script>

<script lang="ts">
  export let hymns: Hymns
</script>

<svelte:head>
  <title>Hinário CCB - Hinos de Louvores e Súplicas a Deus - Livro N° 5</title>
</svelte:head>

<HymnsList {hymns} />
