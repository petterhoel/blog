// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
    // `loader` can accept an array of multiple patterns as well as string patterns
    // Load all markdown files in the space-probes directory, except for those that start with "voyager-"
    loader: glob({ pattern: ['*.md', '!README.md∂'], base: 'src/content/blog' }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string().optional(),
        author: z.string().optional(),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };