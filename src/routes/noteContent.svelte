<script lang="ts">
  import type { Note } from "../types/note";
  export let note: Note;
</script>

<div class="p-2">
  <h3 class="font-semibold text-lg">{note.title || ""}</h3>
  <div>{note.description || ""}</div>
</div>
