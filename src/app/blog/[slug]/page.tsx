import { readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

import MdxLayout from "@/components/mdx-layout";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const filenames = ["vibe-coding", "mentorship-advantages"]; // OR read from fs
  return filenames.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const filePath = path.join(
    process.cwd(),
    "src/app/blog/posts",
    `${params.slug}.mdx`
  );
  const fileContent = readFileSync(filePath, "utf8");

  const { content, data } = matter(fileContent);

  const { content: compiled } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  });

  return (
    <MdxLayout>
      <article>
        <h1>{data.title}</h1>
        <p className="text-sm text-gray-500">{data.date}</p>
        {compiled}
      </article>
    </MdxLayout>
  );
}
