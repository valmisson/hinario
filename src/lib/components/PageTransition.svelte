<script lang="ts">
  import { fade } from 'svelte/transition'

  export let refresh: string
</script>

{#key refresh}
  <main in:fade>
    <slot />
  </main>
{/key}
