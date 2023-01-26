<script lang="ts">
  import { onMount } from "svelte";
  import Colcade from "colcade";
  import AddNoteForm from "../components/addNoteForm.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;

  onMount(() => {
    var colc = new Colcade(".notes-grid", {
      columns: ".notes-grid-col",
      items: ".notes-grid-item",
    });
  });
</script>

<div class="p-4 bg-zinc-800 flex-1 gap-4 text-white">
  <div class="flex-row items-end gap-4">
    <div>
      <h1 class="text-xl" style="font-family: 'Carter One';">From You</h1>
      <h2 class="opacity-50 text-sm">Applicativo de notas</h2>
    </div>
  </div>
  <ul class="flex flex-row flex-wrap items-start gap-2 notes-grid">
    {#each Array(4) as _, i}
      <div class="notes-grid-col flex-1 gap-2" />
    {/each}
    <AddNoteForm />
    {#each data.notes as note}
      <li
        class="bg-yellow-100 text-black p-2 shadow-xl rounded notes-grid-item"
      >
        <h3 class="font-semibold text-lg">{note.title}</h3>
        <div>{note.description}</div>
      </li>
    {/each}
  </ul>
</div>
