<script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte";
  import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

  export let max: number;
  export let value: string | undefined;
  const resumable = value && value.length > max;

  let resumed = true;

  function getSized(value: string | undefined, closed: boolean) {
    if (!value) return "";
    if (closed) return value.slice(0, max);
    return value;
  }

  $: text = getSized(value, resumed);
</script>

{text}
{#if resumable}
  <button
    on:click={() => {
      resumed = !resumed;
    }}
    class="inline items-end bg-black/10 rounded p-1 text-sm"
  >
    <Fa icon={faEllipsis} />
  </button>
{/if}
