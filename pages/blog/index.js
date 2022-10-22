import Head from 'next/head'
import { getSortedPostsData } from '../../src/lib/blog'
import Link from 'next/link'
import BlogHero from '../../src/components/blog/BlogHero'
import BlogContainer from '../../src/components/blog/BlogContainer'
import BlogItem from '../../src/components/blog/BlogItem'

const {heading, subheading} = {
  heading: "Blog",
  subheading: "Learning by doing"
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{heading}</title>
      </Head>
      <main>
        <BlogHero heading={heading} subheading={subheading} />
        <BlogContainer>
            {allPostsData.map((post ) => (
              <BlogItem key={post.id} post={post} />
            ))}
        </BlogContainer>
      </main>
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