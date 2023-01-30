<script lang="ts">
  import { title } from '$store'
  import { HymnsList } from '$components'
  import type { Hymns } from '$types/hymns'

  export let data: Record<string, Hymns>
</script>

<svelte:head>
  <title>{ $title }</title>
</svelte:head>

<HymnsList hymns={data.hymns} />
