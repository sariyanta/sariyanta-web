// 1. Import `extendTheme`
import { theme as chakraTheme, extendTheme } from "@chakra-ui/react";

const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

// 2. Call `extendTheme` and pass your custom values
let theme = extendTheme({
	config,
});

theme = {
	...chakraTheme,
	fonts: {
		...chakraTheme.fonts,
		body: `"IBM Plex Sans", -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" `,
		heading: `"IBM Plex Sans", -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" `,
	},
};

export default theme;
