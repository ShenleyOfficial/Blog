import { glob } from "astro/loaders";

import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    author: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});
export const collections = { blog };
