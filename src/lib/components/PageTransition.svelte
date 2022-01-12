<script lang="ts">
  import { fade } from 'svelte/transition'

  export let refresh: string
</script>

{#key refresh}
  <div in:fade>
    <slot />
  </div>
{/key}
