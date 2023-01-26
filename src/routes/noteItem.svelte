<script lang="ts">
  import type { Note } from "../types/note";
  import { onMount } from "svelte";

  export let rowGap: number;
  export let rowHeight: number;
  export let note: Note;

  let height = 4;
  let content: HTMLDivElement;

  // Add the observer when component mounts and cleanup after
  onMount(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      // We're only watching one element
      const entry = entries.at(0);
      if (!entry) return;

      //Get the block size
      const target = entry.target as HTMLDivElement;
      height = Math.ceil(
        (entry.contentBoxSize[0].blockSize + rowGap) / (rowHeight + rowGap)
      );
      console.log(target.style);
    });

    resizeObserver.observe(content);

    // This callback cleans up the observer
    return () => resizeObserver.unobserve(content);
  });
</script>

<div
  style="grid-row-end: span {height};"
  class="bg-yellow-100 shadow-xl rounded"
>
  <div class="content" bind:this={content}>
    <li class="p-2">
      <h3 class="font-semibold text-lg">{note.title || ""}</h3>
      <div>{note.description || ""}</div>
    </li>
  </div>
</div>
