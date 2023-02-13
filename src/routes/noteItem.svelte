<script script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte";
  import type { Note } from "../note/note";
  import NoteContent from "./noteContent.svelte";
  import DeleteButton from "./deleteButton.svelte";
  import NoteEditForm from "./noteEditForm.svelte";
  import { faPen } from "@fortawesome/free-solid-svg-icons";

  export let note: Note;
  export let edit = false;
  let content: HTMLDivElement;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<li
  tabindex="0"
  class="bg-yellow-100 mb-2 w-full shadow-xl rounded relative group break-words cursor-pointer overflow-hidden transition"
>
  <div class="hidden group-hover:block absolute top-0 right-0">
    <div class="flex-row rounded text-white bg-black/50 shadow">
      <button on:click={() => (edit = !edit)} class="p-2"
        ><Fa icon={faPen} /></button
      >
      <DeleteButton id={note._id} />
    </div>
  </div>
  <div class="content" bind:this={content}>
    {#if edit}
      <NoteEditForm {note} />
    {:else}
      <NoteContent {note} />
    {/if}
  </div>
</li>
