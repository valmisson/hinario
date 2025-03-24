<script lang="ts">
  import BrandImage from './Brand.svelte'
  import DarkMode from './DarkMode.svelte'
  import FontJump from './FontJump.svelte'
  import SearchBox from './SearchBox.svelte'
</script>

<header
  class="container flex items-center justify-between 2xl:justify-center mt-4 mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-0 2xl:relative"
>
  <BrandImage />

  <aside
    class="flex gap-5 md:gap-8 pr-1 sm:pr-2 2xl:pr-0 h-full items-center 2xl:absolute 2xl:right-0"
  >
    <SearchBox />
    <DarkMode />
    <FontJump />
  </aside>
</header>
