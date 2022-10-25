import Link from "next/link";
import Image from "next/future/image";
import moment from "moment/moment"; // Used in the <PublishedDate /> component

export default function BlogPost({ post, index }) {
	const { id, title, excerpt, category, tech, date, featuredimage } = post;
	let published = new Date(date);
	const relativeTime = moment(published).fromNow();
	return (
		<div className="flex flex-col items-baseline justify-between sm:flex-row">
			<Link href={`/blog/${id}`}>
				<a className="flex grow items-center gap-5 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-700 via-red-700 to-black p-[1px] transition-all duration-500 ease-in-out hover:from-black hover:via-indigo-700 hover:to-red-700 hover:shadow-lg dark:border-white">
					<div className="flex grow items-center gap-5 rounded-lg bg-white p-5">
						<div className="relative overflow-hidden rounded-lg">
							<Image
								src={featuredimage.url}
								width={96}
								height={96}
								alt={featuredimage.alt}
								className="z-10 h-24 w-24 object-cover "
							/>
						</div>
						<div className="">
							<h3 className="text-2xl font-semibold">{title}</h3>
							<div className="mt-2 flex gap-3">
								<time>{relativeTime}</time>
								<span>{category}</span>
							</div>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
}

// Featured Image

// Category

// Title

// Excerpt

// Tech Stacks
