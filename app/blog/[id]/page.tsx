import { getPostBySlug, listPosts } from "@/posts";
import { Post } from "../components/post";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  return listPosts().map(({ slug }) => ({ id: slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const post = await getPostBySlug(id);

  if (!post) {
    return null;
  }

  return {
    title: `${post.title} - Vitor Lima`,
  };
};

const BlogPostPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const post = await getPostBySlug(id);

  if (!post) {
    return notFound();
  }

  return <Post markdown={post.markdown} />;
};

export default BlogPostPage;
