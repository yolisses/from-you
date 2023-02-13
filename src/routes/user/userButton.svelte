<script lang="ts">
  import LogoutButton from "./logoutButton.svelte";
  import SignInButton from "./signInButton.svelte";

  export let logged: boolean;
</script>

{#if logged}
  <LogoutButton />
{:else}
  <SignInButton />
{/if}
