<script lang="ts">
  import smoothScroll from '$lib/plugins/smoothScroll'
  import type { HymnProps } from '~/types'

  const { hymns }: HymnProps = $props()
</script>

<section
  use:smoothScroll
  class="hymns px-2 mt-12 lg:pl-16 lg:pr-10 lg:mt-20"
>
  <ul
    class="flex flex-wrap flex-col gap-x-1 gap-y-1"
  >
    {#each hymns as { file, metadata }}
      <li
        class="hover:bg-gray-100"
      >
        <a
          href={`/hino/${file.name}`}
          class="block hover:underline jump:text-xl px-2 py-2 rounded-md"
        >
          <b>{metadata.number}</b>.
          <span>{metadata.title}</span>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style lang="postcss">
  .hymns ul {
    height: calc(theme(height.screen) - 110px);
  }

  @screen lg {
    .hymns ul {
      height: calc(theme(height.screen) - 150px);
    }
  }
</style>
