import "styles/global.css";
import "styles/fonts.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "styles/theme";
import Layout from "@/components/Layout";
import { AuthProvider } from "@/lib/auth";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<CSSReset />
			<AuthProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AuthProvider>
		</ChakraProvider>
	);
}

export default MyApp;
