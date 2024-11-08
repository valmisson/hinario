<script lang="ts">
  import type { HymnProps } from '~/types'
  import BackButton from '$lib/components/ui/backButton.svelte'

  const { hymn }: HymnProps = $props()
</script>

<section class="hymn flex flex-col justify-center my-8 md:mt-14 mx-auto w-full max-md:px-4 md:max-w-xl lg:max-w-screen-sm">
  <nav class="breadcrumb flex gap-2 items-center jump:text-lg text-base">
    <a
      href="/"
      class="hover:text-gray-600 dark:text-gray-300 text-gray-500 underline"
    >
      Hinos
    </a>
     / <span class="dark:text-gray-200 text-gray-400">{hymn.title}</span>
  </nav>

  <article class="lyrics mt-8 tracking-wide">
    <h1 class="font-medium jump:text-3xl mb-4 text-2xl">
      {hymn.title}
    </h1>

    {@html hymn.html} <!-- eslint-disable-line svelte/no-at-html-tags -->
  </article>

  <footer class="flex justify-end mt-10">
    <BackButton to="/" />
  </footer>
</section>

<style lang="postcss">
  :global(.lyrics > p),
  :global(.lyrics ol li) {
    @apply ml-5;
  }

  :global(.lyrics p) {
    @apply leading-7 my-2 text-lg text-gray-600;
  }

  :global(.dark .lyrics p) {
    @apply text-gray-100;
  }

  :global(.font-jump .lyrics p) {
    @apply text-xl;
  }
</style>
