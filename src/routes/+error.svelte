<script lang="ts">
  import { title } from '$store'
  import { page } from '$app/stores'
</script>

<svelte:head>
  <title>
    {$page.error?.message} - { $title }
  </title>
</svelte:head>

<section>
  <h1 class="status">{$page.status}</h1>

  <p class="message">{$page.error?.message}</p>

  <a href="/" data-sveltekit-preload-data class="link">Hinos</a>
</section>

<style>
  .status,
  .message {
    @apply
      text-center;
  }

  .status {
    @apply
      mt-80px
      text-size-52px md:text-size-62px text-gray-600;
  }

  .message {
    @apply
    text-size-18px md:text-size-22px font-medium text-gray-400;
  }

  .link {
    @apply
      mt-10 mx-auto
      table text-gray-500;
  }

  section .status {
    @apply
      dark:text-gray-100;
  }

  section .message {
    @apply
      dark:text-gray-300;
  }

  section .link {
    @apply
      dark:text-gray-200;
  }
</style>
