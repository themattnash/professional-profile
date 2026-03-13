import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const essays = await getCollection('essays', ({ data }) => data.published);
  return rss({
    title: 'Matt Nash | Writing',
    description: 'Essays on AI evaluation, constraint design, failure modes, and welfare measurement.',
    site: context.site!,
    items: essays
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((essay) => ({
        title: essay.data.title,
        pubDate: essay.data.date,
        description: essay.data.description,
        link: `/writing/${essay.slug}/`,
      })),
  });
}
