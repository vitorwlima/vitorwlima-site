import Markdown from "react-markdown";

export const Post = ({ markdown }: { markdown: string }) => {
  return (
    <article className="p-4 max-w-5xl mx-auto w-full">
      <Markdown
        components={{
          h1: ({ children }) => (
            <h1 className="mb-5 text-3xl font-bold">{children}</h1>
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
          p: ({ children }) => (
            <p className="leading-relaxed not-last:mb-5">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="mb-4 list-disc pl-6 marker:text-xl marker:text-cyan-500">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 list-decimal pl-6 marker:text-cyan-500">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="mb-3 pl-2">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="mb-4 border-l-4 border-cyan-500 pl-4 italic">
              {children}
            </blockquote>
          ),
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
        {markdown}
      </Markdown>
    </article>
  );
};
