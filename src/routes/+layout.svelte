<script lang="ts">
  import '$lib/assets/css/app.css'
  import HeaderLayout from '$lib/components/layout/Header/index.svelte'
  import { hymnsList } from '$lib/stores'

  const { children, data } = $props()

  $effect.pre(() => {
    hymnsList.set(data.hymns)
  })
</script>

<HeaderLayout />

{@render children()}
