import Head from "next/head";
import { HomePage } from "../src/components/home/Home";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "react-bootstrap-icons";
import switchTheme from "../src/lib/switchTheme";

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

      <main className="max-w-4xl mx-auto">
        <section className="w-full py-10 px-6 lg:px-0 border-b border-neutral-300 dark:border-neutral-800">
          <Image
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/7796354?v=4"
            width={64}
            height={64}
            alt="Picture of Sariyanta"
          />
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-semibold mt-4">
            WordPress and HubSpot CMS Developer.
          </h1>
          <p className="mt-6 lg:text-xl font-light">
            I’m Sariyanta, a web developer based in the Netherlands. I work with
            WordPress and HubSpot CMS. In my free time, I build side projects
            with NextJS and Django.
          </p>
          <div className="flex mt-6">
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
