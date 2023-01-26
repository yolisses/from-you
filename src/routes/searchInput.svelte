<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faSearch } from "@fortawesome/free-solid-svg-icons";
</script>

<form
  action="/"
  method="get"
  class="flex-row border-2 rounded-full items-stretch w-full max-w-sm"
>
  <input
    name="q"
    type="text"
    placeholder="Pesquisar"
    class="flex-1 rounded-l-full px-2 w-full"
  />
  <label
    class="items-center justify-center p-2 cursor-pointer hover:bg-gray-200 rounded-r-full"
  >
    <Fa icon={faSearch} />
    <input type="submit" value="" class="hidden" />
  </label>
</form>
