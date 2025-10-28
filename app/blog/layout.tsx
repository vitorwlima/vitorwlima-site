import { listPosts } from "@/posts";
import { PostLink } from "./components/post-link";
import { SidebarDrawer } from "./components/sidebar-drawer";

export const generateMetadata = async () => {
  return {
    title: "Blog - Vitor Lima",
  };
};

const BlogLayout = async ({ children }: { children: React.ReactNode }) => {
  const posts = listPosts();
  const allPosts = [{ slug: "", title: "Home", date: "" }, ...posts];

  return (
    <main className="flex relative">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex max-w-[280px] w-full p-4 lg:p-8 flex-col gap-1 sticky h-fit top-0">
        {allPosts.map((post) => {
          return <PostLink key={post.slug} post={post} />;
        })}
      </aside>

      {/* Mobile Drawer */}
      <SidebarDrawer posts={allPosts} />

      {children}
    </main>
  );
};

export default BlogLayout;
