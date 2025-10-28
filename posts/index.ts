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
  // {
  //   slug: "coding-with-ai",
  //   title: "Coding With AI",
  //   date: "28/10/2025",
  // },
];

export const listPosts = () => POST_INDEX;

export const getPostBySlug = async (slug: string) => {
  const meta = POST_INDEX.find((post) => post.slug === slug);
  const isHome = slug === "home";

  if (!meta && !isHome) {
    return null;
  }

  const markdownPath = path.join(POSTS_DIR, `${slug}.md`);
  const markdown = await fs.readFile(markdownPath, "utf-8");

  return {
    ...meta,
    markdown,
  };
};
