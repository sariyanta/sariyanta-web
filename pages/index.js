import Head from "next/head";

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

			<main className="flex flex-col max-w-4xl mx-auto">
				<h1>Hello</h1>
				<button type="button" role="button" className="inline-block bg-gradient-to-r self-center px-4 py-2 from-black to-red-400 text-white">Sign in</button>
			</main>
		</>
	);
}
