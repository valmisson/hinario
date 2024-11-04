<script lang="ts">
  import { onMount } from 'svelte'

  let isFontJump = $state(false)

  const getFontJump = (): boolean => (
    localStorage.getItem('font-jump') === 'true'
  )

  const saveFontJump = (value: boolean): void => {
    localStorage.setItem('font-jump', String(value))
  }

  const onFontJump = (): void => {
    isFontJump = !isFontJump
    saveFontJump(isFontJump)
  }

  const effectFontJump = (node: HTMLElement): void => {
    const html = node.querySelector('html')

    $effect(() => {
      isFontJump
        ? html?.classList.add('font-jump')
        : html?.classList.remove('font-jump')
    })
  }

  onMount(() => {
    isFontJump = getFontJump()
  })
</script>

<svelte:document use:effectFontJump />

<button
  onclick={onFontJump}
  class="font-jump-btn btn"
  aria-pressed={isFontJump}
  aria-label="Aumentar ou diminuir tamanho da fonte"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="{isFontJump ? 'scale-110 fill-gray-800' : ''} icon duration-300 transition-transform dark:fill-white"
    viewBox="0 0 18 20"
    fill="#33414B"
  >
    <path d="M8 20v-6h2v2h8v2h-8v2H8Zm-8-2v-2h6v2H0Zm3.425-6H5.5l1.1-3.075h4.825L12.5 12h2.075l-4.5-12h-2.15l-4.5 12ZM7.2 7.2l1.75-4.975h.1L10.8 7.2H7.2Z" />
  </svg>
</button>
