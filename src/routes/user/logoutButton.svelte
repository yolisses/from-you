<script>
  import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa/src/fa.svelte";
</script>

<form method="post" action="?/logout">
  <button class="flex-row gap-1 items-center p-2 rounded-lg hover:bg-black/10">
    <Fa icon={faDoorOpen} />
    Sair
  </button>
</form>
