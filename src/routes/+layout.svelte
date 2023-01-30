<script lang="ts" context="module">
  import '$lib/assets/styles/global.css'
  import { Header, PageTransition } from '$components'
  import type { LoadEvent } from '@sveltejs/kit'

  export function load ({ url }: LoadEvent) {
    return {
      props: {
        key: url.pathname
      }
    }
  }
</script>

<script lang="ts">
  export let key: string
</script>

<Header />

<PageTransition refresh={key}>
  <slot />
</PageTransition>
