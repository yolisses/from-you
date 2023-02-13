<script lang="ts">
  import { onMount } from "svelte";
  import { ethers } from "ethers";

  let error: string;

  async function signIn() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      if (!accounts || !accounts.length) {
        error = "Nenhuma carteira Etherium selecionada";
        return;
      }
      console.log(accounts[0]);

      const signer = await provider.getSigner();
      const secret = await signer.signMessage("From You login");
      console.log(secret);
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
  <h2>Entrar</h2>
  {#if error}
    <div class="text-red-500">{error}</div>
  {/if}
  <button on:click={signIn} class="flex-row items-center gap-2">
    <img src="/metamask.svg" alt="MetaMask fox" width="32" />
    Entrar usando MetaMask</button
  >
</div>
