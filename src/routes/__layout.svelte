<script lang="ts" context="module">
  import '$lib/assets/styles/global.css'
  import { Header, PageTransition } from '$components'
  import type { LoadInput } from '@sveltejs/kit'

  export function load ({ url }: LoadInput) {
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
