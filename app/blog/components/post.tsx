import Markdown from "react-markdown";
import { Tooltip } from "./tooltip";

const extractFootnotes = (markdown: string) => {
  const footnoteRegex = /^\[(\d+)\]\s+(.+)$/gm;
  const footnotes: Record<string, string> = {};

  markdown.replace(footnoteRegex, (match, num, text) => {
    footnotes[num] = text;
    return match;
  });

  return {
    footnotes,
    cleanMarkdown: markdown.replace(footnoteRegex, "").trim(),
  };
};

export const Post = ({ markdown: rawMarkdown }: { markdown: string }) => {
  const { footnotes, cleanMarkdown } = extractFootnotes(rawMarkdown);

  const renderMarkdownWithTooltips = (text: string) => {
    const parts = text.split(/(\[\d+\])/);

    return parts.map((part, i) => {
      const match = part.match(/\[(\d+)\]/);
      if (match && footnotes[match[1]]) {
        return <Tooltip key={i} number={match[1]} text={footnotes[match[1]]} />;
      }
      return part;
    });
  };

  return (
    <article className="p-4 lg:p-8 md:mt-0 mt-12 max-w-5xl mx-auto w-full">
      <Markdown
        components={{
          h1: ({ children }) => (
            <h1 className="mb-2 text-3xl font-bold">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="mb-4 text-2xl font-bold">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-3 text-xl font-bold">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="mb-2 text-lg font-bold">{children}</h4>
          ),
          p: ({ children }) => {
            const renderedChildren = Array.isArray(children)
              ? children.map((child) =>
                  typeof child === "string"
                    ? renderMarkdownWithTooltips(child)
                    : child
                )
              : typeof children === "string"
              ? renderMarkdownWithTooltips(children)
              : children;

            return (
              <p className="leading-relaxed not-last:mb-5">
                {renderedChildren}
              </p>
            );
          },
          blockquote: ({ children }) => {
            const renderedChildren = Array.isArray(children)
              ? children.map((child) =>
                  typeof child === "string"
                    ? renderMarkdownWithTooltips(child)
                    : child
                )
              : typeof children === "string"
              ? renderMarkdownWithTooltips(children)
              : children;

            return (
              <blockquote className="mb-6 border-l-4 border-cyan-500 pl-4 italic">
                {renderedChildren}
              </blockquote>
            );
          },
          ul: ({ children }) => (
            <ul className="mb-5 list-disc pl-6 marker:text-xl marker:text-cyan-500 [&_ul]:mt-4">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 list-decimal pl-6 marker:text-cyan-500">
              {children}
            </ol>
          ),
          li: ({ children }) => {
            const renderedChildren = Array.isArray(children)
              ? children.map((child) =>
                  typeof child === "string"
                    ? renderMarkdownWithTooltips(child)
                    : child
                )
              : typeof children === "string"
              ? renderMarkdownWithTooltips(children)
              : children;

            return <li className="mb-1 pl-2 [&_ul]:mt-1 [&_ul]:pl-4">{renderedChildren}</li>;
          },
          a: ({ children, href }) => {
            const isExternalLink = href
              ? !href.startsWith("/") && !href.startsWith("#")
              : false;

            return (
              <a
                href={href}
                className="text-cyan-500 underline hover:text-cyan-400"
                {...(isExternalLink
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {children}
              </a>
            );
          },
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          hr: () => <hr className="my-8 border-t border-cyan-500" />,
          table: ({ children }) => (
            <table className="my-4 min-w-full border-collapse">
              {children}
            </table>
          ),
          thead: ({ children }) => <thead>{children}</thead>,
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => (
            <tr className="border-b border-gray-500/40">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="bg-gray-900/10 px-4 py-2 text-left font-bold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="bg-gray-900/10 px-4 py-2">{children}</td>
          ),
        }}
      >
        {cleanMarkdown}
      </Markdown>
    </article>
  );
};
