import type { MarkdownImport } from "$lib/types";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    const post: MarkdownImport = await import(`../${params.slug}.md`);
    return {
      slug: params.slug,
      metadata: post.metadata,
      content: post.default,
    };
  } catch (e) {
    throw error(404, "Not found");
  }
}
