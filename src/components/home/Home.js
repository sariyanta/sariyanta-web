import Image from "next/image";
import { Github, Linkedin } from "react-bootstrap-icons";

export function HomePage() {
  return (
    <main className="max-w-4xl mx-auto">
      <HomeHero />
    </main>
  );
}

export function HomeHero() {
  return (
    <section className="w-full py-10 px-6 lg:px-0 border-b border-black dark:border-gray-300">
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
        WordPress and HubSpot CMS. In my free time, I build side projects with
        NextJS and Django.
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
  );
}
