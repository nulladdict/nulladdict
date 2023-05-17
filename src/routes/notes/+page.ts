import type { PageLoad } from "./$types";

interface FrontMatter {
  title: string;
  date: string;
}
interface Glob {
  metadata: FrontMatter;
}

export const load: PageLoad = async () => {
  const imports = import.meta.glob<Glob>("./**/*.md");
  const posts = await Promise.all(
    Object.entries(imports).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const href = path.replace(/\/\+page\.md$/gm, "");
      return { href, metadata };
    })
  );
  return {
    posts,
  };
};
