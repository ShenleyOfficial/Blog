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

const friends = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/friends" }),
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
    description: z.string(),
    url: z.string().url(),
    backgroundColor: z.string().optional(),
    textColor: z.string().optional(),
  }),
});
export const collections = { blog, friends };
