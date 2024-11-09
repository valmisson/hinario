<script lang="ts">
  import { appTitle } from '$lib/stores'
  import PageHymn from '$lib/components/pages/hymn/index.svelte'

  const { data } = $props()

  const hymnTitle = data.hymn.title
</script>

<svelte:head>
  <title>{hymnTitle} - {$appTitle}</title>

  <meta name="description" content={`Hino ${hymnTitle}, hinário de numero 5 da congregação cristã do brasil`}>
  <meta name="keywords" content={`${hymnTitle}, hinário, ccb, numero 5, hinos, congregação cristã do brasil`}>
</svelte:head>

<main>
  <PageHymn hymn={data.hymn} />
</main>
