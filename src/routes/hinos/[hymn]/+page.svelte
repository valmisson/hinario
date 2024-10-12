<script lang="ts">
  import { title } from '$store'
  import type { Hymn } from '$types/hymns'

  export let data: Hymn
</script>

<svelte:head>
  <title>
    {data.metadata.numero}. {data.metadata.titulo} - { $title }
  </title>
</svelte:head>

<div class="container">
  <nav>
    <ul class="breadcrumb">
      <li class="breadcrumb__item">
        <a href="/" class="breadcrumb__link">Hinos</a>
      </li>
      <li class="breadcrumb__item breadcrumb--active" aria-current="page">
        {data.metadata.numero}.
        {data.metadata.titulo}
      </li>
    </ul>
  </nav>

  <section class="hymn">
    <h1 class="hymn__name">
      <span class="hymn__number">{data.metadata.numero}.</span>

      {data.metadata.titulo}
    </h1>

    <article class="hymn__lyrics">
      {@html data.file.html} <!-- eslint-disable-line svelte/no-at-html-tags -->
    </article>
  </section>
</div>

<style lang="postcss">
  .container {
    @apply
      px-4 mt-8 md:mt-16 mx-auto
      md:w-screen-sm;
  }

  .breadcrumb {
    @apply
      flex;
  }

  .breadcrumb__item {
    @apply
      list-none
      text-size-16px md:text-size-18px;
  }

  .breadcrumb__link {
    @apply
      mr-3
      text-gray-500;
  }

  .breadcrumb--active {
    @apply
      text-gray-400;
  }

  .breadcrumb--active::before {
    content: "/";

    @apply
     mr-3;
  }

  .breadcrumb .breadcrumb__link {
    @apply
      dark:text-gray-100;
  }

  .breadcrumb .breadcrumb--active {
    @apply
      dark:text-gray-300;
  }

  .hymn {
    @apply
      mt-8 md:mt-12
      text-gray-600;
  }

  .hymn__name {
    @apply
      mb-6
      text-size-22px md:text-size-26px font-bold;
  }

  .hymn__number {
    @apply
      mr-2;
  }

  .hymn__lyrics {
    @apply
      ml-5 md:ml-6 mb-6
      text-size-18px md:text-size-20px
      leading-7 md:leading-8 tracking-wide;
  }

  :global(.hymn__lyrics ol) {
    @apply
      mt-2 mb-0;
  }

  :global(.hymn__lyrics p) {
    @apply
      mt-2 mb-0;
  }

  .container .hymn {
    @apply
      dark:text-gray-100;
  }
</style>
