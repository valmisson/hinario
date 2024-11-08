<script lang="ts">
  import BackButton from '$lib/components/ui/backButton.svelte'
  import type { ErrorProps } from '~/types'

  const { error }: ErrorProps = $props()
</script>

<section class="error text-center mt-28 px-4 mx-auto md:max-w-xl lg:max-w-screen-sm">
  <article>
    <h1 class="font-medium text-6xl">
      {error.status}
    </h1>
    <p class="mt-4 text-xl">
      {error?.message}
    </p>
  </article>

  <footer class="mt-10">
    <BackButton to="/" />
  </footer>
</section>
