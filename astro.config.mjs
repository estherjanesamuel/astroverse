// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://stirring-meringue-ff494b.netlify.app/",
  integrations: [preact()]
});