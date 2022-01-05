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
  <title>Hinário - Uma coleção de canções Cristã</title>
</svelte:head>

<main>
  <HymnsList {hymns} />
</main>
