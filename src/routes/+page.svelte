<script lang="ts">
  import type { PageData } from "./$types";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faPen } from "@fortawesome/free-solid-svg-icons";
  import Modal from "../common/modal.svelte";

  export let data: PageData;
  let showModal = false;
</script>

<div class="p-4 bg-zinc-800 flex-1 gap-4">
  <div class="flex-row items-end gap-4">
    <div>
      <h1 class="text-xl text-white">From You</h1>
      <h2 class="text-white opacity-50">Applicativo de notas</h2>
    </div>
    <button
      on:click={() => (showModal = true)}
      class="bg-blue-800 text-white p-2 rounded-lg flex-row gap-1 items-center shadow-lg"
    >
      <Fa icon={faPen} />
      Adicionar</button
    >
  </div>
  <ul class="flex flex-row gap-2 flex-wrap">
    {#each data.notes as post}
      <li class="bg-yellow-100 p-2 shadow-xl rounded">
        <h3 class="font-semibold text-lg">{post.title}</h3>
        <div>{post.description}</div>
      </li>
    {/each}
  </ul>
  {#if showModal}
    <Modal on:close={() => (showModal = false)}>hello</Modal>
  {/if}
</div>
