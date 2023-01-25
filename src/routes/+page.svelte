<script lang="ts">
  import AddNoteForm from "../components/addNoteForm.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div class="p-4 bg-zinc-800 flex-1 gap-4 text-white">
  <div class="flex-row items-end gap-4">
    <div>
      <h1 class="text-xl">From You</h1>
      <h2 class="opacity-50">Applicativo de notas</h2>
    </div>
  </div>
  <ul class="flex flex-row items-start gap-2 flex-wrap">
    <AddNoteForm />
    {#each data.notes as post}
      <li class="bg-yellow-100 text-black p-2 shadow-xl rounded">
        <h3 class="font-semibold text-lg">{post.title}</h3>
        <div>{post.description}</div>
      </li>
    {/each}
  </ul>
</div>
