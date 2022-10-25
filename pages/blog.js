import Head from "next/head";
import { getSortedPostsData } from "@/utils/getBlogContents";


export default function Blog({ allPostsData }) {
  return (
    <>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
