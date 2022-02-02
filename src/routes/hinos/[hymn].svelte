<script lang="ts" context="module">
  import type { LoadInput } from '@sveltejs/kit'
  import type { HymnFile, HymnMetadata } from '$types/hymns'

  export async function load ({ fetch, params }: LoadInput) {
    const hymnPath = params.hymn

    const res = await fetch(`/hinos/${hymnPath}.json`)

    if (res.ok) {
      const { file, metadata } = await res.json()

      return {
        props: {
          metadata,
          file
        }
      }
    }
  }
</script>

<script lang="ts">
  export let metadata: HymnMetadata
  export let file: HymnFile
</script>

<svelte:head>
  <title>
    {metadata.number}.
    {metadata.name}
    - Hinário - Uma coleção de canções Cristã
  </title>
</svelte:head>

<main>
  <nav>
    <ul class="breadcrumb">
      <li class="breadcrumb__item">
        <a href="/" class="breadcrumb__link">Hinos</a>
      </li>
      <li class="breadcrumb__item breadcrumb--active" aria-current="page">
        {metadata.number}.
        {metadata.name}
      </li>
    </ul>
  </nav>

  <section class="hymn">
    <h1 class="hymn__name">
      <span class="hymn__number">{metadata.number}.</span>

      {metadata.name}
    </h1>

    <article class="hymn__lyrics">
      {@html file.html}
    </article>
  </section>
</main>

<style>
  main {
    @apply
      px-4 mt-8 md:mt-16 mx-auto
      md:w-screen-sm;
  }

  .breadcrumb {
    @apply
      flex items-center;
  }

  .breadcrumb__item {
    @apply
      list-none;
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
      text-size-20px md:text-size-24px font-bold;
  }

  .hymn__number {
    @apply
      mr-2;
  }

  .hymn__lyrics {
    @apply
      ml-5 md:ml-6 mb-6
      text-size-16px md:text-size-18px
      leading-6 md:leading-7 tracking-wide;
  }

  :global(.hymn__lyrics ol) {
    @apply
      mt-2 mb-0;
  }

  :global(.hymn__lyrics p) {
    @apply
      mt-2 mb-0;
  }

  main .hymn {
    @apply
      dark:text-gray-100;
  }
</style>
