import { readFileSync, readdirSync } from "fs"; // Import fs correctly
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import MdxLayout from "@/components/mdx-layout";

interface PageProps {
  params: { slug: string };
}

// Generate static params based on the file names in the blog posts folder
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");

  // Ensure fs is correctly imported
  const filenames = readdirSync(postsDirectory).map((file) =>
    file.replace(/\.mdx$/, "")
  );
  return filenames.map((slug) => ({ slug }));
}

// Dynamic Blog Post Page
export default async function BlogPostPage({ params }: PageProps) {
  // Ensure params is awaited
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "src/app/blog/posts",
    `${slug}.mdx` // Use the dynamic slug to load the correct file
  );

  const fileContent = readFileSync(filePath, "utf8");

  const { content, data } = matter(fileContent); // Parse frontmatter and content

  // Compile MDX content using next-mdx-remote
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
        {compiled} {/* Render compiled MDX content */}
      </article>
    </MdxLayout>
  );
}
