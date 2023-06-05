import type { ComponentType, SvelteComponentTyped } from "svelte";

export interface FrontMatter {
  title: string;
  date: string;
}

export interface MarkdownImport {
  metadata: FrontMatter;
  default: ComponentType<SvelteComponentTyped>;
}
