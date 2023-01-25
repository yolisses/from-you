<form action="" id="add-note-form" class="border-2 border-white/50 rounded p-2">
  <input
    type="text"
    placeholder="Título"
    class="bg-transparent font-semibold"
  />
  <textarea placeholder="descrição" class="bg-transparent min-h-[1.5rem]" />
</form>

<style lang="postcss">
  #add-note-form input,
  #add-note-form textarea {
    @apply outline-none focus:border-b;
  }
</style>
