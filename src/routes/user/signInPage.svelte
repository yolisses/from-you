<script>
  import TopLogo from "../topLogo.svelte";
  import SignInButton from "./signInButton.svelte";
</script>

<div class="p-4 flex-col min-h-screen">
  <TopLogo />
  <div class="fixed inset-0 p-2 text-center justify-center items-center">
    <h1 class="text-2xl">Bem vindo!</h1>
    <div class="opacity-50 mb-5">
      Para desfrutar de todas as funcionalidades, conecte-se com MetaMask
    </div>
    <SignInButton />
  </div>
</div>
