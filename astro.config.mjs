import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://yaraslaut.github.io',
  base: '/astro-test',
  integrations: [tailwind(), react(),
  image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});
