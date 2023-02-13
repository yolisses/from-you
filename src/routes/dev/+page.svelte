<script lang="ts">
  import { ethers } from "ethers";
  import { onMount } from "svelte";
  import { loginMessage } from "../../user/loginMessage";
  import type { PageData } from "./$types";

  export let data: PageData;
  let error: string | undefined;
  let signature: string;
  let address: string;

  async function handleSubmit(e: SubmitEvent) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      if (!accounts || !accounts.length) {
        error = "Nenhuma carteira Etherium selecionada";
        return;
      }
      address = accounts[0];

      const signer = await provider.getSigner();
      signature = await signer.signMessage(loginMessage);

      // dirt way to wait signature hidden input change
      await new Promise((resolve) => setTimeout(resolve, 0));

      error = undefined;
      e.target.submit();
    } catch (err: any) {
      if (err.code === "ACTION_REJECTED")
        error = "Por favor confirme sua carteira Etherium";
      else {
        error = err.message;
      }
    }
  }

  onMount(() => {
    if (!window.ethereum) {
      error = "Por favor instale o MetaMask para se autenticar";
    }
  });
</script>

<div>
  {data.userId}
  <h2>Entrar</h2>
  {#if error}
    <div class="text-red-500">{error}</div>
  {/if}
  <form method="post" action="?/signIn" on:submit|preventDefault={handleSubmit}>
    {#if signature}
      <input type="hidden" name="signature" value={signature} />{/if}
    {#if address} <input type="hidden" name="address" value={address} /> {/if}
    <button class="flex-row items-center gap-2">
      <img src="/metamask.svg" alt="MetaMask fox" width="32" />
      Entrar usando MetaMask</button
    >
  </form>
</div>
