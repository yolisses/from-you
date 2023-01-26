<script>
  let title = "";
  let description = "";
</script>

<form
  method="POST"
  id="add-note-form"
  class="notes-grid-item border-2 border-white/50 rounded p-2"
>
  <input
    type="text"
    name="title"
    bind:value={title}
    placeholder="Título"
    class="focus-underline bg-transparent font-semibold"
  />
  <textarea
    rows="1"
    name="description"
    placeholder="descrição"
    bind:value={description}
    class="focus-underline bg-transparent min-h-[1.5rem]"
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
