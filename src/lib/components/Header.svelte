<script lang="ts">
  import Brand from '$lib/assets/images/brand.svg'
  import IconDark from '$lib/assets/images/icon-search.svg'
  import IconSearch from '$lib/assets/images/icon-dark.svg'
</script>

<header class="header">
  <figure class="header__brand">
    <a href="/">
      <img src={Brand} alt="brand" class="brand__img">
    </a>
  </figure>

  <div role="option" class="header__options">
    <button
      title="Buscar canções"
      aria-label="Buscar canções" aria-pressed="false"
      class="options__btn"
    >
      <img src={IconDark} alt="search icon" class="options__icon">
    </button>

    <button
      title="Ativar modo escuro"
      aria-label="Ativar modo escuro" aria-pressed="false"
      class="options__btn"
    >
      <img src={IconSearch} alt="dark mode icon" class="options__icon">
    </button>
  </div>
</header>

<style scoped>
  .header {
    @apply
      container lg:w-screen-lg relative
      px-4 lg:px-0 mt-6 mx-auto
      flex justify-between md:justify-center items-center;
  }

  .header__brand {
    @apply
      m-0;
  }

  .brand__img {
    @apply
      w-68px md:w-88px;
  }

  .header__options {
    @apply
      md:absolute right-0
      flex gap-6;
  }

  .options__btn {
    @apply
      p-1
      bg-transparent border-none cursor-pointer;
  }

  .options__icon {
    @apply
      w-20px;
  }
</style>
