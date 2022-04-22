<script lang="ts" context="module">
  import { title } from '$store'
  import type { LoadInput } from '@sveltejs/kit'

  export function load ({ error, status }: LoadInput) {
    return {
      props: {
        status,
        message: error?.message
      }
    }
  }
</script>

<script lang="ts">
  export let status: number
  export let message: string
</script>

<svelte:head>
  <title>
    {message} - { $title }
  </title>
</svelte:head>

<section>
  <h1 class="status">{status}</h1>

  <p class="message">{message}</p>

  <a href="/" class="link">Hinos</a>
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
