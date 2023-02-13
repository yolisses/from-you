<script lang="ts">
  import type { PageData } from "./$types";
  import MainPage from "./mainPage.svelte";
  import SignInPage from "./user/signInPage.svelte";
  export let data: PageData;
</script>

{#if data.logged}
  <MainPage {data} />
{:else}
  <SignInPage />
{/if}
