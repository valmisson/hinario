<script lang="ts" context="module">
  import '$lib/assets/styles/global.css'
  import { Header, PageTransition } from '$components'
  import type { LoadInput } from '@sveltejs/kit'

  export function load ({ page }: LoadInput) {
    return {
      props: {
        key: page.path
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
