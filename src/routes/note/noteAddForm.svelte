<script lang="ts">
  import { enhance } from "$app/forms";
  let title: string;
  let description: string;
  $: blocked = !(title || description);
</script>

<form
  use:enhance
  method="post"
  action="?/add"
  on:submit={() => (blocked = true)}
  class="border-2 border-gray/50 rounded w-full max-w-sm p-2 mb-2 break-inside-avoid max-h-[50vh]"
>
  <input
    type="text"
    name="title"
    bind:value={title}
    placeholder="Título"
    class="focus-underline bg-transparent font-semibold placeholder:text-gray-600"
  />
  <textarea
    rows="1"
    name="description"
    placeholder="descrição"
    bind:value={description}
    class="focus-underline bg-transparent min-h-[1.5rem] placeholder:text-gray-600"
  />
  {#if !blocked}
    <input
      type="submit"
      value="salvar"
      disabled={blocked}
      class="p-1 px-2 disabled:saturate-0 disabled:cursor-default bg-green-600 rounded mt-2 cursor-pointer text-white"
    />
  {/if}
</form>

<style lang="postcss">
  .focus-underline {
    @apply outline-none focus:border-b-2 focus:mb-0 mb-[2px];
  }
</style>
