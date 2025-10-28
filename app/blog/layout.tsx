import { listPosts } from "@/posts";
import { PostLink } from "./components/post-link";

export const generateMetadata = async () => {
  return {
    title: "Blog - Vitor Lima",
  };
};

const BlogLayout = async ({ children }: { children: React.ReactNode }) => {
  const posts = listPosts();

  return (
    <main className="flex relative">
      <aside className="max-w-[300px] w-full p-4 flex flex-col gap-2 sticky h-fit top-0">
        {[{ slug: "", title: "Home", date: "" }, ...posts].map((post) => {
          return <PostLink key={post.slug} post={post} />;
        })}
      </aside>
      {children}
    </main>
  );
};

export default BlogLayout;
