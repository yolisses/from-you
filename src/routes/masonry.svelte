<script lang="ts">
  import type { Note } from "../types/note";
  import NoteItem from "./noteItem.svelte";
  export let notes: Note[];
</script>

<ul class="note-grid">
  {#each notes as note (note)}
    <NoteItem {note} rowGap={10} rowHeight={10} />
  {/each}
</ul>

<style lang="postcss">
  .note-grid {
    display: grid;
    grid-gap: 10px;
    grid-auto-rows: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
</style>
