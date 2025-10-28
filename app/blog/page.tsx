import { getPostBySlug } from "@/posts";
import { Post } from "./components/post";

const BlogPage = async () => {
  const post = (await getPostBySlug("home"))!;
  return <Post markdown={post.markdown} />;
};

export default BlogPage;
