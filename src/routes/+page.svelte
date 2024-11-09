<script lang="ts">
  import { appTitle } from '$lib/stores'
  import PageHymns from '$lib/components/pages/hymns/index.svelte'

  const { data } = $props()
</script>

<svelte:head>
  <title>{$appTitle}</title>

  <meta name="description" content="Hinário de numero 5 da congregação cristã do brasil com todos os hinos de louvores e súplicas a deus">
  <meta name="keywords" content="hinário, ccb, numero 5, hinos, congregação cristã do brasil">
</svelte:head>

<main>
  <PageHymns hymns={data.hymns} />
</main>
