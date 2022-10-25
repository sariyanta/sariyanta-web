import Head from "next/head";
import BlogPost from "components/blog/BlogPost";
import { getSortedPostsData } from "utils/fetchBlogData";

const { heading, subheading } = {
	heading: "Blog",
	subheading: "Learning by doing",
};

export default function Blog({ allPostsData }) {
	return (
		<>
			<Head>
				<title>{heading}</title>
			</Head>
			<main className="mx-auto max-w-4xl">
				<div className="py-10">
					<h1 className="text-2xl font-bold">{heading}</h1>
					<span className="text-xl">{subheading}</span>
				</div>
				<div className="grid grid-cols-1 gap-3 py-10">
					{allPostsData.map((post, index) => (
						<BlogPost post={post} key={post.id} index={index} />
					))}
				</div>
			</main>
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
