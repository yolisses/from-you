<script>
  import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa/src/fa.svelte";
</script>

<form method="post" action="?/logout">
  <button class="flex-row gap-1 items-center">
    <Fa icon={faDoorOpen} />
    Sair
  </button>
</form>
