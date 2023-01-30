<script lang="ts">
  import type { Hymns } from '$types/hymns'

  import { smoothScroll } from '$plugins'

  export let hymns: Hymns = []
</script>

<section use:smoothScroll={{ horizontalScroll: true }}>
  <ul class="hymns">
    {#each hymns as hymn}
      <li class="hymns__item">
        <a
          data-sveltekit-preload-data
          href={`/hinos/${hymn.file.name}`}
          class="hymns__link">
          <b class="hymns__number">{hymn.metadata.numero}.</b>
          <span class="hymns__name">{hymn.metadata.titulo}</span>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style scoped>
  .hymns {
    height: calc(100vh - 120px);

    @apply
      px-4 lg:px-16 mt-9 md:mt-16
      flex flex-wrap flex-col;
  }

  .hymns__item {
    @apply
      mb-1 -ml-3 px-8px
      w-3/4 md:w-1/3 xl:w-1/5
      transition-all list-none
      text-size-16px md:text-size-18px;
  }

  .hymns__link {
    @apply
      px-2 py-3
      block no-underline transition-all rounded-md
    hover:bg-gray-100 hover:transition-all hover:underline
    active:underline-gray-600;
  }

  .hymns__number {
    @apply
    text-gray-600 text-size-14px md:text-size-16px
    font-black tabular-nums;
  }

  .hymns__name {
    @apply
      font-medium text-gray-600;
  }

  .hymns .hymns__number {
    @apply
    dark:text-gray-300;
  }

  .hymns .hymns__name {
    @apply
    dark:text-gray-100;
  }

  .hymns .hymns__link {
    @apply
    dark:hover:bg-dark-300 dark:hover:underline-gray-100
    dark:active:underline-gray-100;
  }

  @media (min-width: 768px) {
    .hymns {
      height: calc(100vh - 160px);
    }
  }
</style>
