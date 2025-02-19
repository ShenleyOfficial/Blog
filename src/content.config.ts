// 导入 glob 加载器（loader）
import { glob } from "astro/loaders";
// 从 `astro:content` 导入工具函数
import { z, defineCollection } from "astro:content";
// 为每个集合定义一个 `loader` 和 `schema`
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});
// 导出一个单独的 `collections` 对象用以注册你的集合（们）
export const collections = { blog };
