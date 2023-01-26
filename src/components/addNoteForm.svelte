<script lang="ts">
  import { enhance } from "$app/forms";
  let title = "";
  let description = "";
</script>

<form
  use:enhance
  method="POST"
  id="add-note-form"
  class="border-2 border-gray/50 rounded p-2 w-full max-w-sm"
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
  {#if title || description}
    <input
      type="submit"
      value="salvar"
      class="p-1 px-2 bg-green-600 rounded-lg mt-2 cursor-pointer"
    />
  {/if}
</form>

<style lang="postcss">
  .focus-underline {
    @apply outline-none focus:border-b focus:mb-0 mb-[1px];
  }
</style>
