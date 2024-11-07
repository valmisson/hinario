<script lang="ts">
  import { appTitle } from '$lib/stores'
  import PageHymns from '$lib/components/pages/hymns/index.svelte'

  const { data } = $props()
</script>

<svelte:head>
  <title>{$appTitle}</title>
</svelte:head>

<main>
  <PageHymns hymns={data.hymns} />
</main>
