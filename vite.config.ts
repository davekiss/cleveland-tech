import * as dotenv from 'dotenv'
dotenv.config() // inject the content of the .env file into 'process.env'

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()]
})
