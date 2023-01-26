<script lang="ts">
  import { faTrash } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa/src/fa.svelte";

  export let id: string;

  let confirm = false;
  function onClick(e: Event) {
    if (!confirm) confirm = true;
  }
</script>

<form action="?/delete/{id}" />
<button on:click={onClick} class="p-2" style={confirm ? "color:red;" : ""}>
  <Fa icon={faTrash} />
</button>
