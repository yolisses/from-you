<script lang="ts">
  import type { Note } from "../types/note";
  import { onMount } from "svelte";
  import NoteContent from "./noteContent.svelte";

  export let note: Note;
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

<li
  style="grid-row-end: span {height};"
  class="bg-yellow-100 shadow-xl rounded"
>
  <div class="content" bind:this={content}>
    <NoteContent {note} />
  </div>
</li>
