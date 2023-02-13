<script lang="ts">
  import type { Note } from "../../note/note";
  import Resume from "../resume.svelte";

  export let note: Note;
</script>

<div class="p-2">
  <h3 class="font-semibold text-lg block">
    <Resume value={note.title} max={100} />
  </h3>
  <div class="block">
    <Resume value={note.description} max={100} />
  </div>
</div>
