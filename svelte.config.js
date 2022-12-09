import sveltePreprocess from 'svelte-preprocess'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    replace: [["process.env.FORM_ENDPONT", process.env.FORM_ENDPONT], ["process.env.RECAPTCHA_SITE_KEY", process.env.RECAPTCHA_SITE_KEY]],
  }),
}
