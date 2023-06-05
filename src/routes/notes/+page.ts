import type { MarkdownImport } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const imports = import.meta.glob<MarkdownImport>("./*.md");
  const posts = await Promise.all(
    Object.entries(imports).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const href = path.replace(/\.md$/gm, "");
      return { href, metadata };
    })
  );
  return {
    posts,
  };
};
