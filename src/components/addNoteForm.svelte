<script lang="ts">
  import { enhance } from "$app/forms";
  let title = "quale";
  let description = "";
</script>

<form
  use:enhance
  method="POST"
  id="add-note-form"
  class="border-2 border-gray/50 rounded w-full max-w-sm"
>
  <input
    type="text"
    name="title"
    bind:value={title}
    placeholder="Título"
    class="m-2 focus-underline bg-transparent font-semibold placeholder:text-gray-600"
  />
  <textarea
    rows="1"
    name="description"
    placeholder="descrição"
    bind:value={description}
    class="mx-2 focus-underline bg-transparent min-h-[1.5rem] placeholder:text-gray-600"
  />
  {#if title || description}
    <input
      type="submit"
      value="salvar"
      class="p-1 px-2 bg-green-600 rounded mt-2 cursor-pointer text-white"
    />
  {/if}
</form>

<style lang="postcss">
  .focus-underline {
    @apply outline-none focus:border-b-2 focus:mb-0 mb-[2px];
  }
</style>
