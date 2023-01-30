<script lang="ts">
  import { onMount } from "svelte";
  import Fa from "svelte-fa/src/fa.svelte";
  import type { Note } from "../types/note";
  import NoteContent from "./noteContent.svelte";
  import DeleteButton from "./deleteButton.svelte";
  import { faPen } from "@fortawesome/free-solid-svg-icons";
  import NoteEditForm from "./noteEditForm.svelte";

  export let note: Note;
  export let edit = false;
  export let rowGap: number;
  export let rowHeight: number;

  let height = 4;
  let content: HTMLDivElement;

  onMount(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries.at(0);
      if (!entry) return;
      const { blockSize } = entry.contentBoxSize[0];
      height = Math.ceil((blockSize + rowGap) / (rowHeight + rowGap));
    });

    resizeObserver.observe(content);
    return () => resizeObserver.unobserve(content);
  });
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<li
  tabindex="0"
  style="grid-row-end: span {height};"
  class="bg-yellow-100 shadow-xl rounded relative group break-words cursor-pointer overflow-hidden transition"
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
