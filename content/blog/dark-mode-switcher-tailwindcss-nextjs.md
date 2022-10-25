---
title: "How to create Dark and Light mode switch in NextJS with Tailwindcss"
excerpt: "This is the second excerpt"
date: "2022-10-23"
category: "NextJS"
author:
  name: "Sariyanta"
  avatar: "https://avatars.githubusercontent.com/u/7796354?v=4"
  github: "sariyanta"
meta:
  title: "How to create Dark and Light mode switch in NextJS with Tailwindcss - Sariyanta"
  description: "Learn how to create dark and light mode switch in NextJS with Tailwindcss"
featuredimage:
  url: "/images/content/blog/nextjs.png"
  alt: "Next JS"
status: "published"
stack: ["nextjs", "tailwindcss"]
---

Creating a website that can addapt to users screen preference is getting more and more popular. When a website has this feature, it gives it a more polished feeling.

In this post, I'd like to document how I achieve this on this website with Tailwindcss in NextJS. Like many things, I learned how to implement this feature by following an online tutorial. So, credit goes to [Avneesh Agarwal](https://avneesh0612.medium.com/) for creating this [tutorial](https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d). In all honesty, you can better follow his tutorial to get exactly the same result :).

Anyway, let's just jump into it.

### Create a NextJS Project

```bash
npx create-next-app project-name
```

This will create a NextJs project with a 'project-name' folder name. You can change the project name to however you like by changing the last argument.

When this process finished, go ahead and run the NextJS development server.

```bash
cd project-name && npm run dev
```

This will do 2 things;

1. `cd project-name` will change the directory to the 'project-name'
2. `npm run dev` will start the NextJS development server.

If all goes well, you should see a localhost URL, usually [http://localhost:3000](http://localhost:3000), that you can visit to view your NextJS app.

### Install Tailwindcss in your project

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

This will install tailwindcss, postcss to cleanup unused css, and autoprefixer to add vendor prefixer.
The second command will create tailwind.config.js. See the full [guide](https://tailwindcss.com/docs/guides/nextjs).

Open the tailwind.config.js and add content to the config to make the purging of unused css works as follow:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

The next thing is to add darkMode setting to the config as follow:

```js
/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: ["./pages/**/_.{js,ts,jsx,tsx}", "./components/\*\*/_.{js,ts,jsx,tsx}"],
  darkMode: "class',
  theme: {
  extend: {},
  },
  plugins: [],
};

```

Modify the global.css in the styles folder as follow:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Create custom React Hook to add and remove class of the HTML element

Create a new folder, I call this folder 'lib'. In this folder create a new file called useDarkMode.js

```jsx
import { useEffect, useState } from "react";

function useDarkMode() {
	const [theme, setTheme] = useState(
		typeof window !== "undefined" ? localStorage.theme : "dark"
	);
	const colorTheme = theme === "dark" ? "light" : "dark";

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(colorTheme);
		root.classList.add(theme);

		if (typeof window !== "undefined") {
			localStorage.setItem("theme", theme);
		}
	}, [colorTheme, theme]);

	return [colorTheme, setTheme];
}

export default useDarkMode;
```

### Create mode switcher component

Let's now create a mode switcher component where we can use the newly created custom hook.

Since I use Bootstrap Icons with the help of react-bootstrap-icons package, let's install that first.

```bash
npm i react-bootstrap-icons --save
```

Now that we have that installed, we can create a new file called ThemeSwitcher.js inside the components folder. We can then import the icons as well as the custom hook.

```jsx
import useDarkMode from "../lib/useDarkMode";
import { BrightnessHigh, Moon } from "react-bootstrap-icons";

export default function ThemeSwitcher() {
	const [colorTheme, setTheme] = useDarkMode();

	return (
		<>
			{colorTheme === "light" ? (
				<button
					className="group cursor-pointer p-3 rounded-full transition-all duration-300 ring-1 hover:ring-2 hover:bg-white"
					onClick={() => setTheme("light")}
				>
					<BrightnessHigh size={18} className="group-hover:text-black" />
				</button>
			) : (
				<button
					className="group cursor-pointer p-3 rounded-full transition-all duration-300 ring-1 hover:ring-2 hover:bg-black"
					onClick={() => setTheme("dark")}
				>
					<Moon size={18} className="group-hover:text-white" />
				</button>
			)}
		</>
	);
}
```

That is it! Now we can use this component to any page or other components where we want the theme switcher to appear. In my case, I'd like to show this component on the entire website. To do that, we need to create a layout component. Read more about Layout component in NextJS in this [guide](https://nextjs.org/docs/basic-features/layouts).

### Create Layout component

In the components folder, create Navbar.js and Layout.js. We will use the ThemeSwitcher component inside the Navbar component. We will then use the Navbar inside the Layout component.

Navbar.js

```jsx
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/future/image";
import Link from "next/link";

const logoUrl = "path/to/logo.png";
export default function Navigation() {
	return (
		<header className="border-b border-neutral-200 dark:border-neutral-800">
			<div className="max-w-4xl mx-auto flex justify-between items-center py-4 px-6 lg:px-0">
				<nav className="">
					<Link href="/">
						<a>
							<Image src={logoUrl} width={32} height={32} alt="Logo" />
						</a>
					</Link>
				</nav>
				<div className="">
					<ThemeSwitcher />
				</div>
			</div>
		</header>
	);
}
```

Layout.js

```jsx
import Navigation from "./Navigation";

export default function Layout({ children }) {
	return (
		<>
			<Navigation />
			{children}
		</>
	);
}
```

Now we need to modify the \_app.js inside the pages folder to use the Layout component.

```jsx
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
```

Here is how it looks like on this website.

![Example of dark mode switcher](/images/content/blog/DarkModeSite.gif "dark mode switcher")
