<script lang="ts">
  import { envVars } from "../envVars";

  let name;
  let email;
  let hometown;

  function handleSubmit() {
    state = State.requesting;
    doRecaptcha();
  }

  const key = envVars.VITE_RECAPTCHA_SITE_KEY;
  let State = {
    idle: "idle",
    requesting: "requesting",
    success: "success",
  };

  let state = State.idle;

  function doRecaptcha() {
    grecaptcha.ready(function () {
      grecaptcha.execute(key, { action: "submit" }).then(function (token) {
        fetch(envVars.VITE_FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            token,
            hometown,
          }),
        }).then((res) => {
          if (res.ok) {
            state = State.success;
            name = "";
            email = "";
            hometown = "";
          } else {
            state = State.idle;
          }
        });
      });
    });
  }
</script>

<svelte:head>
  <script
    src="https://www.google.com/recaptcha/api.js?render={key}"
    async
    defer
  ></script>
</svelte:head>

<h2>Tell us about yourself!</h2>

<form on:submit|preventDefault={handleSubmit}>
  <label for="name">Name</label>
  <input type="text" bind:value={name} />

  <label for="email">Email</label>
  <input type="email" bind:value={email} />

  <label for="hometown">Hometown</label>
  <input type="text" bind:value={hometown} />

  <button disabled={!name} type="submit"
    >{state === State.requesting ? "Loading…" : "Get invite"}</button
  >
  <div
    class="success"
    style="display: {state === State.success ? 'block' : 'none'}"
  >
    <p>Thanks for signing up! Check your email for your invite.</p>
  </div>
</form>

<style>
  input {
    display: block;
    width: 500px;
    max-width: 100%;
    margin-bottom: 1.5em;
  }

  input[type="text"],
  input[type="email"] {
    padding: 0.5em;
  }

  label {
    margin-bottom: 0.25em;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
</style>
