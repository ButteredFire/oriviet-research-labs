import { defineCollection, z } from 'astro:content';

const publication = defineCollection({
  // Type-check frontmatter using Zod
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string().transform(str => new Date(str)), // Transforms string to Date object
    author: z.string().default('Anonymous'), // Default value if not provided
    image: z.string().optional(), // Optional field
    tags: z.array(z.string()).default([]), // Array of strings, defaults to empty array
  }),
});

export const collections = { publication };