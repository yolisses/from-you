<script lang="ts">
  import { enhance } from "$app/forms";
  import type { Note } from "../../note/note";
  export let note: Note;
  let title = note.title;
  let description = note.description;
</script>

<form use:enhance class="p-2" method="post" action="?/edit">
  <input type="hidden" name="id" value={note._id} />
  <input
    type="text"
    name="title"
    bind:value={title}
    placeholder="Título"
    class="text-lg focus-underline bg-transparent font-semibold placeholder:text-black/50"
  />
  <textarea
    rows="1"
    name="description"
    placeholder="descrição"
    bind:value={description}
    class="focus-underline bg-transparent min-h-[1.5rem] placeholder:text-black/50"
  />
  <input
    type="submit"
    value="salvar"
    class="p-1 px-2 disabled:saturate-0 disabled:cursor-default bg-green-600 rounded mt-2 cursor-pointer text-white"
  />
</form>

<style lang="postcss">
  .focus-underline {
    @apply outline-none border-black focus:border-b-2 focus:mb-0 mb-[2px];
  }
</style>
