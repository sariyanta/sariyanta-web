import { getAllPostIds, getPostData } from "../../src/lib/blog";
import ReactMarkdown from "react-markdown";
import {
  BlogHeroSingle,
  BlogContentSingle,
  BackToBlog,
  BlogLayout,
} from "../../src/components/blog/BlogSingle";
import Head from "next/head";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function BlogPost({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <BlogLayout post={postData} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
