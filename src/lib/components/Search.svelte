<script lang="ts">
  import { fade } from 'svelte/transition'
  import { clickOutside } from '$plugins'

  let isInputVisible = false
  let inputElement: HTMLElement
  let inputValue: string

  function setInputVisible () {
    isInputVisible = true

    setTimeout(inputAutoFocus, 200)
  }

  function removeInputVisible () {
    isInputVisible = false
  }

  function inputAutoFocus () {
    inputElement.focus()
  }

  async function onPressEnter (e: KeyboardEvent) {
    if (e.key === 'Enter') search()
  }

  async function search () {
    // in the first click shows only the input
    if (!isInputVisible) {
      setInputVisible()

      return
    }

    if (!inputValue) return

    console.log('Buscando hino', inputValue)

    removeInputVisible()
    inputValue = ''
  }
</script>

<div
  use:clickOutside={removeInputVisible}
  class="search"
  class:input--visible={isInputVisible}
>
  {#if isInputVisible}
    <input
      on:keypress={onPressEnter}
      bind:value={inputValue}
      bind:this={inputElement}
      in:fade={{ duration: 200 }}
      type="number"
      min="1" max="479"
      placeholder="Buscar Hinos"
      aria-label="Digite numero do Hino"
      class="search__input"
    >
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
    outline: none;

    @apply
      border-gray-600;
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
      dark:fill-gray-800;
  }
</style>
