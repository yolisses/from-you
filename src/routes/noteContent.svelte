<script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte";
  import { faEllipsis, faMinus } from "@fortawesome/free-solid-svg-icons";
  import type { Note } from "../types/note";
  export let note: Note;

  const maxTitle = 100;
  const titleBig = note.title && note.title.length > maxTitle;
  let titleClosed = true;

  function getTitle(value: string | undefined, closed: true) {
    if (!value) return "";
    if (closed) return value.slice(0, maxTitle);
    return value;
  }

  $: title = getTitle(note.title, titleClosed);
</script>

<div class="p-2">
  <h3 class="font-semibold text-lg block">
    {title}
    {#if titleBig}
      <button
        on:click={() => {
          titleClosed = !titleClosed;
        }}
        class="inline items-end text-white bg-black/30 rounded p-1 text-sm"
      >
        <Fa icon={titleClosed ? faEllipsis : faMinus} />
      </button>
    {/if}
  </h3>
  <div>{note.description || ""}</div>
</div>
