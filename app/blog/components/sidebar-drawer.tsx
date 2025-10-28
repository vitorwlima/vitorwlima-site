"use client";

import { useState } from "react";
import { Drawer } from "vaul";
import { Menu, X } from "lucide-react";
import { PostMeta } from "@/posts";
import { PostLink } from "./post-link";

export const SidebarDrawer = ({ posts }: { posts: PostMeta[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root open={open} onOpenChange={setOpen} direction="left">
      <Drawer.Trigger asChild>
        <button
          className="md:hidden bg-zinc-950/90 backdrop-blur-sm fixed top-3 left-3 z-50 p-2 cursor-pointer rounded-md transition-colors"
          aria-label="Open navigation"
        >
          <Menu size={20} />
        </button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Drawer.Content className="fixed bottom-0 left-0 top-0 w-[280px] z-50 bg-black rounded-t-lg">
          <div className="flex justify-between items-center py-3 px-6 border-b border-cyan-950">
            <Drawer.Title asChild>
              <h2 className="font-semibold">Navigation</h2>
            </Drawer.Title>
            <Drawer.Close asChild>
              <button
                className="p-2 hover:opacity-80 pr-0 cursor-pointer rounded-md transition-colors"
                aria-label="Close navigation"
              >
                <X size={20} />
              </button>
            </Drawer.Close>
          </div>

          <div className="p-3 flex flex-col gap-1 overflow-y-auto">
            {posts.map((post) => (
              <div key={post.slug} onClick={() => setOpen(false)}>
                <PostLink post={post} />
              </div>
            ))}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
