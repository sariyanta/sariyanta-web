import Head from 'next/head'
import { getSortedPostsData } from '../../src/lib/blog'
import { BlogArchive } from '../../src/components/blog/BlogArchive'

const { heading, subheading } = {
  heading: "Blog",
  subheading: "Learning by doing"
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{heading}</title>
      </Head>
      <BlogArchive posts={allPostsData} />
    </>

  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}