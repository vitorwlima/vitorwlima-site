"use client";

import { cn } from "@/lib/utils";
import { PostMeta } from "@/posts";
import Link from "next/link";
import { useParams } from "next/navigation";

export const PostLink = ({ post }: { post: PostMeta }) => {
  const params = useParams<{ id?: string }>();
  const slug = params.id || "";
  const isActive = slug === post.slug;

  return (
    <Link
      href={`/blog/${post.slug}`}
      key={post.slug}
      className={cn(
        "px-4 py-2 opacity-80 hover:text-cyan-400 font-medium rounded-md w-full flex text-sm",
        isActive && "text-cyan-400"
      )}
    >
      {post.title}
    </Link>
  );
};
