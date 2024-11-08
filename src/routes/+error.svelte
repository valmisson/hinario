<script lang="ts">
  import { page } from '$app/stores'
  import { appTitle } from '$lib/stores'
  import PageError from '$lib/components/pages/error/index.svelte'

  const error = $derived({
    status: $page.status,
    message: $page.error?.message
  })
</script>

<svelte:head>
  <title>{error.status} - {error.message} - {$appTitle}</title>
</svelte:head>

<main>
  <PageError {error} />
</main>
