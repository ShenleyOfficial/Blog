import { glob } from "astro/loaders";

import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    createdDate: z.date(),
    updatedDate: z.date(),
    author: z.string().optional().default("Shenley"),
    category: z.string().optional().default("未分类"),
    tags: z.array(z.string()).optional(),
  }),
});
export const collections = { blog };
