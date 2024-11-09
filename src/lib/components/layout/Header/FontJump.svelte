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
  class="font-jump-btn btn icon duration-300 transition-transform dark:fill-white"
  aria-label="Aumentar ou diminuir tamanho da fonte"
  aria-pressed={isFontJump}
></button>

<style>
  button {
    background-image: url(/icons/font-jump-light.svg);

    :global(.dark) & {
      background-image: url(/icons/font-jump-dark.svg);
    }

    :global(.font-jump) & {
      width: 20px;
      height: 22px;
    }
  }
</style>
