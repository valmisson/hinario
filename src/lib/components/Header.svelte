<script lang="ts">
  import { Brand, DarkMode, Search } from '$components'
</script>

<header class="header">
  <Brand />

  <div role="option" class="header__options">
    <Search />

    <DarkMode />
  </div>
</header>

<style scoped>
  .header {
    @apply
      container lg:w-screen-lg relative
      px-4 lg:px-0 mt-6 mx-auto
      flex justify-between md:justify-center items-center;
  }

  .header__options {
    @apply
      md:absolute right-0
      flex gap-6;
  }
</style>
