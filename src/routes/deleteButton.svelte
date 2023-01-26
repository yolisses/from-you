<script lang="ts">
  import { enhance } from "$app/forms";
  import { faTrash } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa/src/fa.svelte";

  export let id: string;

  let confirm = false;
  function onClick(e: Event) {
    if (!confirm) {
      e.preventDefault();
      confirm = true;
    }
  }
</script>

<form action="?/remove" method="post" use:enhance>
  <input type="hidden" name="id" value={id} />
  <button on:click={onClick} class="p-2" style={confirm ? "color:red;" : ""}>
    <Fa icon={faTrash} />
  </button>
</form>
