<script lang="ts">
  import type { Note } from "../../note/note";
  import NoteAddForm from "./noteAddForm.svelte";
  import NoteItem from "./noteItem.svelte";

  export let notes: Note[];
</script>

<ul class="block grid-flow-row columns-xs grid-cols-5 gap-2">
  <NoteAddForm />
  {#each notes as note (note)}
    <NoteItem {note} />
  {/each}
</ul>
