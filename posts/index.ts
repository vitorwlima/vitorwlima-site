import path from "path";
import fs from "fs/promises";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
};

export type Post = PostMeta & {
  markdown: string;
};

const POSTS_DIR = path.join(process.cwd(), "posts");

const POST_INDEX: PostMeta[] = [
  {
    slug: "cracked-engineer",
    title: "How to become a cracked engineer",
    date: "27/01/2026",
  },
  {
    slug: "correct-way-rl",
    title: "The correct way of doing RL",
    date: "07/12/2025",
  },
  {
    slug: "coding-with-ai",
    title: "Coding with AI",
    date: "28/10/2025",
  },
];

export const listPosts = () => POST_INDEX;

export const getPostBySlug = async (slug: string) => {
  const meta = POST_INDEX.find((post) => post.slug === slug);
  const isHome = slug === "home";

  if (!meta && !isHome) {
    return null;
  }

  const markdownPath = path.join(POSTS_DIR, `${slug}.md`);
  const fileMarkdown = await fs.readFile(markdownPath, "utf-8");
  const markdown = isHome ? fileMarkdown : `# ${meta?.title}\n${fileMarkdown}`;

  return {
    ...meta,
    markdown,
  };
};
