import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc"; // If using RSC
import MdxLayout from "@/components/mdx-layout";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "src/app/blog/posts"));
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(
    process.cwd(),
    "src/app/blog/posts",
    `${params.slug}.mdx`
  );
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(rawContent);

  const { content: compiled } = await compileMDX({
    source: content,
    options: { parseFrontmatter: true },
  });

  return (
    <MdxLayout>
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">{data.date}</p>
      <article>{compiled}</article>
    </MdxLayout>
  );
}
