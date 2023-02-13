<script lang="ts">
  import TopLogo from "./topLogo.svelte";
  import type { PageData } from "./$types";
  import NoteList from "./note/noteList.svelte";
  import SearchInput from "./searchInput.svelte";
  import LogoutButton from "./user/logoutButton.svelte";

  export let data: PageData;
</script>

<div class="p-4 flex-1 gap-4">
  <div
    class="grid grid-cols-1 md:grid-cols-3 grid-flow-row md:grid-flow-col gap-2 items-start"
  >
    <TopLogo />
    <SearchInput />
    <div class="md:items-end">
      <LogoutButton />
    </div>
  </div>
  <NoteList notes={data.notes} />
</div>
