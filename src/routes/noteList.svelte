<script lang="ts">
  import type { Note } from "../note/note";
  import NoteItem from "./noteItem.svelte";
  import AddNoteForm from "./noteAddForm.svelte";
  export let notes: Note[];
</script>

<ul class="block grid-flow-row columns-xs grid-cols-5 gap-2">
  <AddNoteForm />
  {#each notes as note (note)}
    <NoteItem {note} />
  {/each}
</ul>
