import "styles/global.css";
import { AuthContextProvider } from "@/lib/auth";

function MyApp({ Component, pageProps }) {
	return (
		<AuthContextProvider>
			<Component {...pageProps} />
		</AuthContextProvider>
	);
}

export default MyApp;
