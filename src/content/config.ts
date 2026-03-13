import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    published: z.boolean().default(false),
    category: z.enum(['evaluation', 'constraint', 'failure-modes', 'welfare']).optional(),
  }),
});

export const collections = { essays };
