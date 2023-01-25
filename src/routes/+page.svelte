<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="p-4 bg-zinc-800 flex-1 gap-4">
  <div>
    <h1 class="text-xl text-white">From You</h1>
    <h2 class="text-white opacity-50">Applicativo de notas</h2>
  </div>
  <ul class="flex flex-row gap-2 flex-wrap">
    {#each data.notes as post}
      <li class="bg-yellow-100 p-2 shadow-xl rounded">
        <h3 class="font-semibold text-lg">{post.title}</h3>
        <div>{post.description}</div>
      </li>
    {/each}
  </ul>
</div>
