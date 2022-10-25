import Head from "next/head";
import Image from "next/future/image";
import { Github, Linkedin } from "react-bootstrap-icons";
import FeatureCards from "components/FeatureCards";

export default function Home() {
	return (
		<>
			<Head>
				<title>Sariyanta - WordPress and HubSpot CMS Developer</title>
				<meta
					name="description"
					content="I build web solutions for small to medium sized business in The Netherlands and Bali."
				/>
			</Head>

			<main className="group relative">
				<section className="relative mx-auto w-full max-w-4xl border-b border-neutral-300 py-10 px-6 dark:border-neutral-800 lg:px-0">
					<Image
						className="rounded-full saturate-0 filter transition-all duration-500 ease-in-out group-hover:saturate-100"
						src="https://avatars.githubusercontent.com/u/7796354?v=4"
						width={64}
						height={64}
						alt="Picture of Sariyanta"
					/>
					<h1 className="mt-4 text-2xl font-semibold md:text-5xl lg:text-7xl">
						WordPress and HubSpot CMS Developer.
					</h1>
					<p className="mt-6 font-light lg:text-xl">
						I’m Sariyanta, a web developer based in the Netherlands. I work with
						WordPress and HubSpot CMS. In my free time, I build side projects with
						NextJS and Django.
					</p>
					<div className="mt-6 flex">
						<a
							className="mr-4 hover:scale-110"
							href="https://github.com/sariyanta"
							target="_blank"
							rel="noreferrer"
						>
							<Github size={24} />
						</a>
						<a
							className="hover:scale-110"
							href="https://linkedin.com/in/sariyanta"
							target="_blank"
							rel="noreferrer"
						>
							<Linkedin size={24} />
						</a>
					</div>
				</section>
			</main>
		</>
	);
}
