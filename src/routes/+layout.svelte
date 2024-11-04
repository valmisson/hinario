<script lang="ts">
  import '$lib/assets/css/app.css'
  import HeaderLayout from '$lib/components/layout/Header/index.svelte'

  const { children } = $props()
</script>

<HeaderLayout />

{@render children()}
