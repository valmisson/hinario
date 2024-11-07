<script lang="ts">
  import smoothScroll from '$lib/plugins/smoothScroll'
  import type { HymnsProps } from '~/types'

  const { hymns }: HymnsProps = $props()
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
        class="dark:hover:bg-neutral-700 hover:bg-neutral-100 rounded-md"
      >
        <a
          href={`/hino/${file.name}`}
          class="block hover:underline jump:text-xl px-2 py-2"
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
