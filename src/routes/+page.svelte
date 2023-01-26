<script lang="ts">
  import Masonry from "./noteList.svelte";
  import type { PageData } from "./$types";
  import AddNoteForm from "./noteAddForm.svelte";
  import SearchInput from "./searchInput.svelte";
  export let data: PageData;
</script>

<div class="p-4 flex-1 gap-4">
  <div class="flex-row md:grid-cols-3 justify-between items-start">
    <div>
      <h1 class="text-xl" style="font-family: 'Carter One';">From You</h1>
      <h2 class="opacity-50 text-sm">Applicativo de notas</h2>
    </div>
    <AddNoteForm />
    <SearchInput />
  </div>
  <Masonry notes={data.notes} />
</div>
