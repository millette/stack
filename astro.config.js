// npm
import solid from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'

// astro
import { defineConfig } from 'astro/config'
import devtoolBreakpoints from "astro-devtool-breakpoints"

import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), devtoolBreakpoints(), solid({
    include: ['**/solid/*'],
  }), mdx()],
})