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
  class="dark-mode btn"
  aria-label="Ativa ou desativar modo escuro"
  aria-pressed={isDark}
>
  {#if isDark}
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="#fff">
      <path d="M10 5.455a4.545 4.545 0 1 0 0 9.09 4.545 4.545 0 0 0 0-9.09z"/>
      <path fill-rule="evenodd" d="M10 0a.91.91 0 0 1 .909.909v.909a.91.91 0 0 1-.909.909.91.91 0 0 1-.909-.909V.909A.91.91 0 0 1 10 0zM2.085 2.085a.91.91 0 0 1 1.285 0l1.364 1.364a.91.91 0 0 1-.011 1.274.91.91 0 0 1-1.274.011L2.085 3.37a.91.91 0 0 1 0-1.285zm15.831 0a.91.91 0 0 1 0 1.285l-1.364 1.364a.91.91 0 0 1-.646.277.91.91 0 0 1-.651-.266.91.91 0 0 1-.266-.651.91.91 0 0 1 .278-.646l1.364-1.364a.91.91 0 0 1 1.286 0zM0 10a.91.91 0 0 1 .909-.909h.909a.91.91 0 0 1 .909.909.91.91 0 0 1-.909.909H.909a.91.91 0 0 1-.643-.266A.91.91 0 0 1 0 10zm17.273 0a.91.91 0 0 1 .909-.909h.909A.91.91 0 0 1 20 10a.91.91 0 0 1-.909.909h-.909a.91.91 0 0 1-.909-.909zM4.734 15.266a.91.91 0 0 1 0 1.285L3.37 17.916a.91.91 0 0 1-1.274-.011.91.91 0 0 1-.011-1.274l1.364-1.364a.91.91 0 0 1 1.285 0zm10.533 0a.91.91 0 0 1 1.285 0l1.364 1.364a.91.91 0 0 1-.011 1.274.91.91 0 0 1-1.274.011l-1.364-1.364a.91.91 0 0 1 0-1.285zM10 17.273a.91.91 0 0 1 .909.909v.909A.91.91 0 0 1 10 20a.91.91 0 0 1-.909-.909v-.909a.91.91 0 0 1 .909-.909z" />
    </svg>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="none">
      <path fill="#33414b" d="M18.722 11.219a8.22 8.22 0 0 1-2.111.275 8.06 8.06 0 0 1-5.737-2.373 8.15 8.15 0 0 1-2.097-7.845A1.02 1.02 0 0 0 8.058.035a1.016 1.016 0 0 0-.525 0 10.168 10.168 0 0 0-4.562 2.622c-3.961 3.96-3.961 10.405 0 14.366A10.1 10.1 0 0 0 10.157 20a10.08 10.08 0 0 0 3.89-.768 10.09 10.09 0 0 0 3.294-2.207 10.165 10.165 0 0 0 2.625-4.562 1.016 1.016 0 0 0-.001-.525 1.02 1.02 0 0 0-.718-.717 1.02 1.02 0 0 0-.525-.001zm-2.817 4.369a8.069 8.069 0 0 1-5.747 2.38 8.072 8.072 0 0 1-3.113-.615 8.08 8.08 0 0 1-2.636-1.766 8.14 8.14 0 0 1 0-11.493 8.05 8.05 0 0 1 2.093-1.506 10.18 10.18 0 0 0 .597 4.307 10.101 10.101 0 0 0 6.004 6.01 10.12 10.12 0 0 0 4.31.592 8.176 8.176 0 0 1-1.508 2.092z" />
    </svg>
  {/if}
</button>
