<script lang="ts">
  import BrandImage from './Brand.svelte'
  import DarkMode from './DarkMode.svelte'
  import FontJump from './FontJump.svelte'
  import SearchBox from './SearchBox.svelte'
</script>

<header
  class="container flex items-center justify-between mt-4 mx-auto max-2xl:px-4 relative lg:justify-center"
>
  <BrandImage />

  <aside
    class="flex gap-5 md:gap-8 h-full items-center lg:absolute lg:right-0"
  >
    <SearchBox />
    <DarkMode />
    <FontJump />
  </aside>
</header>
