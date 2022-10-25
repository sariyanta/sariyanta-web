import Head from "next/head";
import { useAuth } from "../src/lib/auth";

export default function Home() {
	const auth = useAuth();
	const { user } = auth;
	console.log(auth);
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
				{auth?.user ? (
					<button onClick={(e) => auth.logout()}>Sign out {user?.email}</button>
				) : (
					<button onClick={(e) => auth.signInWithGithub()}>Sign in</button>
				)}
			</main>
		</>
	);
}
