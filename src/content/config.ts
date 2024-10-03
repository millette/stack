// astro
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const stack = defineCollection({
  loader: glob({
    pattern: '**/*\.mdx',
    base: './src/data/stack'
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
})

export const collections = { stack }
