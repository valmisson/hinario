<script lang="ts">
  import { fade } from 'svelte/transition'
  import { page } from '$app/stores'
  import { clickOutside } from '$plugins'
  import type { Hymn, Hymns } from '$types/hymns'

  let isInputVisible = false
  let inputElement: HTMLElement
  let inputValue: string
  let hymnsFound: Hymns = []

  $: if (inputValue) search()
  $: if (!inputValue) hymnsFound = []
  $: if ($page) removeInputVisible()

  function setInputVisible () {
    isInputVisible = true

    setTimeout(inputAutoFocus, 200)
  }

  function removeInputVisible () {
    isInputVisible = false

    resetSearch()
  }

  function inputAutoFocus () {
    inputElement.focus()
  }

  function resetSearch () {
    inputValue = ''
    hymnsFound = []
  }

  async function fetchHymns (input: string) {
    const res = await fetch('/hinos.json')

    if (res.ok) {
      const { hymns } = await res.json()

      const hymnsFound = hymns.filter((hymn: Hymn) => {
        const { metadata: { numero } } = hymn
        const hymnNumber = numero.toString()

        return hymnNumber.startsWith(input)
      })

      return hymnsFound
    }

    return []
  }

  async function search () {
    // in the first click shows only the input
    if (!isInputVisible) {
      setInputVisible()

      return
    }

    // should have only number on input
    inputValue = inputValue.replace(/[a-z]/gi, '')

    if (!inputValue) return

    hymnsFound = await fetchHymns(inputValue)
  }
</script>

<div
  use:clickOutside={removeInputVisible}
  class="search"
  class:input--visible={isInputVisible}
>
  {#if isInputVisible}
    <input
      bind:value={inputValue}
      bind:this={inputElement}
      in:fade={{ duration: 200 }}
      type="search"
      placeholder="Buscar Hinos"
      aria-label="Digite numero do Hino"
      class="search__input"
    >

    {#if hymnsFound.length}
      <ul
        in:fade={{ duration: 200 }}
        class="search__hymns"
      >
        {#each hymnsFound as hymn}
          <li class="hymns__item">
            <a
              href={`/hinos/${hymn.file.name}`}
              class="hymns__link"
            >
              {hymn.metadata.numero}.
              {hymn.metadata.titulo}
            </a>
          </li>
        {/each}
      </ul>
    {/if}

    {#if inputValue && !hymnsFound.length}
      <span
        in:fade={{ duration: 200, delay: 300 }}
        class="search__empty"
        >
          Nenhum hino encontrado!
        </span>
    {/if}
  {/if}

  <button
    on:click={search}
    transition:fade={{ duration: 200 }}
    title="Buscar Hinos"
    aria-label="Buscar Hinos" aria-pressed="false"
    class="search__btn"
  >
    <svg class="search__icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.55249 17.105C10.4501 17.1046 12.2929 16.4694 13.7877 15.3004L18.4873 20L19.9989 18.4883L15.2993 13.7888C16.4689 12.2938 17.1045 10.4505 17.105 8.55249C17.105 3.83686 13.2681 0 8.55249 0C3.83686 0 0 3.83686 0 8.55249C0 13.2681 3.83686 17.105 8.55249 17.105ZM8.55249 2.13812C12.09 2.13812 14.9669 5.01497 14.9669 8.55249C14.9669 12.09 12.09 14.9669 8.55249 14.9669C5.01497 14.9669 2.13812 12.09 2.13812 8.55249C2.13812 5.01497 5.01497 2.13812 8.55249 2.13812Z" fill="#33414B"/>
    </svg>
  </button>
</div>

<style>
  .search {
    @apply
      flex items-center relative;
  }

  .search__btn {
    @apply
      p-1
      bg-transparent border-none cursor-pointer;
  }

  .search__icon {
    @apply
      w-20px;
  }

  .search__icon path {
    @apply
      dark:fill-white;
  }

  .search__input {
    @apply
      pl-3 pr-8 h-40px w-160px
      border border-solid border-gray-400 rounded-md;
  }

  .search__input:focus {
    @apply
      border-gray-600 outline-none;
  }

  .search__input::placeholder {
    @apply
      text-size-15px;
  }

  .input--visible .search__btn {
    @apply
      absolute right-2 mt-1;
  }

  .input--visible .search__icon {
    @apply
      w-16px;
  }

  .input--visible .search__icon path {
    @apply
      dark:fill-gray-300;
  }

  .search__hymns,
  .search__empty {
    @apply
      w-auto
      absolute top-8 right-0
      shadow-md rounded-md z-10
      bg-gray-100 text-gray-600;
  }

  .hymns__item {
    @apply
      list-none;
  }

  .hymns__link {
    @apply
      p-2
      block no-underline transition-all rounded-md
      text-gray-600
    hover:bg-gray-200 hover:transition-all hover:underline
    active:underline-gray-600;
  }

  .search__empty {
    @apply
      p-2 top-12
      text-center;
  }

  .search .search__input {
    @apply
      dark:bg-dark-200 dark:border-gray-500 dark:text-white;
  }

  .search .search__hymns,
  .search .search__empty {
    @apply
      dark:bg-dark-200 dark:text-gray-100;
  }

  .search .hymns__link {
    @apply
    dark:text-gray-100
    dark:hover:bg-dark-300 dark:hover:underline-gray-100
    dark:active:underline-gray-100;
  }
</style>
