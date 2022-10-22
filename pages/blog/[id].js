import { getAllPostIds, getPostData } from "../../src/lib/blog";
import ReactMarkdown from "react-markdown";
import { BlogHeroSingle, BlogContentSingle, BackToBlog } from "../../src/components/blog/BlogComponents";
import Head from "next/head";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

export default function BlogPost({postData}) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <BlogHeroSingle post={postData} />
      <BlogContentSingle>
        <ReactMarkdown
          children={postData.markdown}
          components={{
            h2: ({node, children, ...props}) => <h2 className="text-2xl" {...props}>{children}</h2>,
            h3: ({node, children, ...props}) => <h3 className="text-xl" {...props}>{children}</h3>,
            code: ({node, children, ...props}) => <SyntaxHighlighter>{children}</SyntaxHighlighter>
          }}
        />
        <BackToBlog />
      </BlogContentSingle>

    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}