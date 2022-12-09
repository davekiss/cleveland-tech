<script lang="ts">
  import cleLogo from "./assets/cleveland-script-logo-black.png";
  import Form from "./lib/Form.svelte";
</script>

<main>
  <div>
    <img src={cleLogo} class="logo svelte" alt="Cleveland Logo" />
  </div>
  <h1>Join our tech Slack community</h1>

  <div class="card">
    <Form />
  </div>

  <p>We're glad you're here!</p>
</main>

<style>
  h1 {
    font-size: 2em;
  }
  .logo {
    height: 16em;
    padding: 1.5em;
    filter: invert(1);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
