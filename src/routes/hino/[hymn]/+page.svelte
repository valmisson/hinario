<script lang="ts">
  import { appTitle } from '$lib/stores'
  import PageHymn from '$lib/components/pages/hymn/index.svelte'

  const { data } = $props()
</script>

<svelte:head>
  <title>
    {data.hymn.title} - {$appTitle}
  </title>
</svelte:head>

<main>
  <PageHymn hymn={data.hymn} />
</main>
