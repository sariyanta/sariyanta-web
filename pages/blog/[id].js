import { getAllPostIds, getPostData } from "@/lib/blog";


export default function BlogPost({ postData }) {
  return (
    <>

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
