<script lang="ts">
  import type { PageData } from "./$types";
  import NoteList from "./note/noteList.svelte";
  import SearchInput from "./searchInput.svelte";
  import UserButton from "./user/userButton.svelte";

  export let data: PageData;
</script>

<div class="p-4 flex-1 gap-4">
  <div
    class="grid grid-cols-1 md:grid-cols-3 grid-flow-row md:grid-flow-col gap-2 items-start"
  >
    <div>
      <h1 class="text-xl" style="font-family: 'Carter One';">From You</h1>
      <h2 class="opacity-50 text-xs">Aplicativo de notas</h2>
    </div>
    <SearchInput />
    <div class="md:items-end">
      <UserButton logged={data.logged} />
    </div>
  </div>
  <NoteList notes={data.notes} />
</div>
