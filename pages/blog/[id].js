import { getAllPostIds, getPostData } from "utils/blogdata";
import { BlogLayout } from "components/blog/BlogSingle";
import Head from "next/head";

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
