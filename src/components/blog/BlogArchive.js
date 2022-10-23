import Link from "next/link";
import Image from "next/future/image";
import { BlogPublishedDate } from "./BlogSingle";
export function BlogArchive({ posts }) {
  const publishedPosts = [];
  posts.map((post) => {
    if (post.status === "published") {
      publishedPosts.push(post);
    }
  });
  return (
    <div className="max-w-4xl mx-auto">
      <BlogArchiveHeader />
      <BlogArchiveGridWrapper>
        {publishedPosts.map((post) => (
          <BlogArchiveGridItem post={post} key={post.id} />
        ))}
      </BlogArchiveGridWrapper>
    </div>
  );
}

export function BlogArchiveHeader({ heading, subheading }) {
  return (
    <>
      Header here.
      <br />
    </>
  );
}

export function BlogArchiveGridWrapper({ children }) {
  return (
    <div className="blog-archive-grid-wrapper grid grid-cols-1 lg:grid-cols-6 gap-3 w-full auto-cols-max">
      {children}
    </div>
  );
}

export function BlogArchiveGridItem({ post }) {
  const url = `/blog/${post.id}`;
  return (
    <Link href={url}>
      <a className="group relative overflow-hidden rounded-lg shadow-lg h-full flex flex-col col-span-3">
        {post.featuredimage ? (
          <div className="relative overflow-hidden rounded-t-lg w-full">
            <Image
              src={post.featuredimage}
              alt={`Picture of ${post.title}`}
              width={600}
              height={400}
              className="group-hover:scale-110  transition-all ease-in duration-300"
            />
          </div>
        ) : null}
        <div className="p-6 flex flex-col justify-between grow">
          <div>
            <span className="uppercase text-gray-600 font-bold">
              {post.category}
            </span>
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              {post.title}
            </h5>
          </div>

          <BlogPublishedDate className="mt-4" date={post.date} />
        </div>
      </a>
    </Link>
  );
}
