<script lang="ts">
  import { onMount } from 'svelte'

  let isDark: boolean = $state(false)

  const getDarkMode = (): boolean => (
    localStorage.getItem('dark-mode') === 'true'
  )

  const saveDarkMode = (value: boolean): void => {
    localStorage.setItem('dark-mode', String(value))
  }

  const onDarkMode = (): void => {
    isDark = !isDark
    saveDarkMode(isDark)
  }

  const effectDarkMode = (node: HTMLElement): void => {
    const html = node.querySelector('html')

    $effect(() => {
      isDark
        ? html?.classList.add('dark')
        : html?.classList.remove('dark')
    })
  }

  onMount(() => {
    isDark = getDarkMode()
  })
</script>

<svelte:document use:effectDarkMode />

<button
  onclick={onDarkMode}
  class="dark-mode btn icon"
  aria-label="Ativa ou desativar modo escuro"
  aria-pressed={isDark}
></button>

<style>
  button {
    background-image: url(/icons/theme-light.svg);

    :global(.dark) & {
      background-image: url(/icons/theme-dark.svg);
    }
  }
</style>
