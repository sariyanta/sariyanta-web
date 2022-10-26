import "styles/global.css";
import "styles/fonts.css";
import { AuthProvider } from "@/lib/auth";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "styles/theme";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<ChakraProvider theme={theme}>
				<CSSReset />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</AuthProvider>
	);
}

export default MyApp;
