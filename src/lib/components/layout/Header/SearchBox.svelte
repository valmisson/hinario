<script lang="ts">
  import { tick } from 'svelte'
  import { fly } from 'svelte/transition'
  import { navigating } from '$app/stores'
  import { hymnsList } from '$lib/stores'
  import type { Hymn } from '~/types'

  let searchTerm: string = $state('')
  let searchStarted: boolean = $state(false)
  let searchBoxElement: HTMLElement | undefined = $state()
  let inputRef: HTMLInputElement | undefined = $state()
  let inputVisible: boolean = $state(false)
  let inputFocused: boolean = $state(false)
  let loading: boolean = $state(false)
  let hymnsFound: Hymn[] = $state([])

  const onSearchHymns = async (): Promise<void> => {
    try {
      loading = true
      searchStarted = !!searchTerm

      const hymns = $hymnsList.filter(({ metadata }) => (
        String(metadata.number).startsWith(searchTerm)
      ))

      hymnsFound = searchStarted ? hymns : []
    } finally {
      loading = false
    }
  }

  const onInputFocus = (): void => {
    inputFocused = true

    if (!inputFocused) inputVisible = false
  }

  const onClickOutside = (element: MouseEvent): void => {
    if (!searchBoxElement?.contains(element.target as HTMLElement)) {
      inputFocused = false
      inputVisible = false
    }
  }

  const onButtonClick = async (): Promise<void> => {
    if (inputVisible) return

    inputVisible = true

    await tick()
    inputRef?.focus()
  }

  const onRemoveSearch = (): void => {
    inputFocused = false
    searchTerm = ''
    hymnsFound.length = 0
    searchStarted = false
  }

  $effect(() => {
    if ($navigating) onRemoveSearch()
  })
</script>

<svelte:window onclick={onClickOutside} />

<div
  bind:this={searchBoxElement}
  class="search-box relative flex items-center w-36 md:w-40"
>
  <input
    oninput={onSearchHymns}
    onfocus={onInputFocus}
    bind:value={searchTerm}
    bind:this={inputRef}
    transition:fly
    type="number"
    min="1"
    max="480"
    class=" border-gray-500 border border-solid dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-300 dark:outline-neutral-950 font-medium outline-gray-400 placeholder:text-gray-500 placeholder:font-normal pl-3 pr-9 py-2 rounded-md text-base w-full"
    class:focused={inputVisible}
    placeholder="Buscar hinos"
  >

  <button
    onclick={onButtonClick}
    class="absolute btn px-2 right-0"
    aria-label="Pesquisa hinos pelo numero"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path class="dark:fill-white" fill="#33414B" d="M8.552 17.105a8.5 8.5 0 0 0 5.236-1.805l4.7 4.7 1.51-1.512-4.699-4.7a8.502 8.502 0 0 0 1.806-5.236C17.105 3.837 13.268 0 8.552 0 3.837 0 0 3.837 0 8.552c0 4.716 3.837 8.553 8.552 8.553Zm0-14.967a6.42 6.42 0 0 1 6.415 6.414 6.42 6.42 0 0 1-6.415 6.415 6.42 6.42 0 0 1-6.414-6.415 6.42 6.42 0 0 1 6.414-6.414Z"/>
    </svg>
  </button>

  {#if searchStarted && inputFocused}
    <ul
      transition:fly
      class="absolute bg-neutral-100 border dark:bg-neutral-700 dark:border-neutral-500 max-h-96 leading-tight overflow-y-auto text-lg top-12 rounded-md w-full z-50"
    >
      {#if loading}
        <li class="animate-pulse dark:text-gray-100 px-3 py-2 text-gray-500">
          Buscando hinos...
        </li>
      {:else if !hymnsFound.length}
        <li class="px-3 py-2 text-gray-500">
          Nenhum hino encontrado.
        </li>
      {:else}
        {#each hymnsFound as { file, metadata }}
          <li class="duration-300 border-y border-neutral-200 dark:border-neutral-900 dark:hover:bg-neutral-600 hover:bg-neutral-300 pl-3 pr-2 py-2 jump:text-lg truncate transition-colors">
            <a href={`/hino/${file.name}`} title={metadata.title} class="hover:underline py-2">
              <b class="font-medium dark:text-gray-100 text-gray-600">{metadata.number}</b>. {metadata.title}
            </a>
          </li>
        {/each}
      {/if}
    </ul>
  {/if}
</div>

<style lang="postcss">
  input {
    @apply max-md:hidden;

    &.focused {
      @apply max-md:block;
    }
  }
</style>
