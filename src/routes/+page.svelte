<script lang="ts">
  import { appTitle, hymnsList } from '$lib/stores'
  import PageHymns from '$lib/components/pages/hymns/index.svelte'
</script>

<svelte:head>
  <title>{$appTitle}</title>
</svelte:head>

<main>
  <PageHymns hymns={$hymnsList} />
</main>
