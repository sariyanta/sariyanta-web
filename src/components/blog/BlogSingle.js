/**
 * Contains components used in a single post layout
 */

import Image from "next/future/image";
import Link from "next/link";
import { ArrowLeft, Github } from "react-bootstrap-icons";
import moment from "moment/moment";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import React from "react";
import * as styles from "react-syntax-highlighter/dist/cjs/styles/prism";
const slugify = require("slugify");

/**
 *
 * @param {object} post
 * @returns string
 */
export function BlogLayout({ post }) {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 lg:px-0">
      <BlogHeader title={post.title} date={post.date} author={post.author} />
      <BlogContent markdown={post.markdown} />
    </main>
  );
}

/**
 *
 * @param {string} title Title of the blog post
 * @param {string} date Published date
 * @param {object} author Object consisting of author name, github username, and avatar
 * @returns
 */
export function BlogHeader({ title, date, author }) {
  return (
    <div className="mx-auto w-full border-b py-10 text-center">
      <BlogTitle title={title} />
      <BlogPublishedDate date={date} />
      <BlogAuthor author={author} />
    </div>
  );
}

/**
 *
 * @param {string} title  Post title
 * @returns
 */
export function BlogTitle({ title }) {
  return <h1 className="mb-6 text-2xl font-bold lg:text-5xl">{title}</h1>;
}

/**
 *
 * @param {string} date Published date
 * @returns
 */
export function BlogPublishedDate({ date, ...props }) {
  let postDate = new Date(date);
  let relativeTime = moment(postDate).fromNow();
  postDate = moment(postDate).format("dddd, D MMMM YYYY");

  return (
    <time className="mb-2 inline-block" {...props}>
      {postDate} ({relativeTime})
    </time>
  );
}

/**
 *
 * @param {object} author Object consisting the author name, github username and avatar
 * @returns
 */
export function BlogAuthor({ author }) {
  return (
    <div className="flex items-center justify-center">
      <div className="mr-2 flex-none">
        {author?.avatar ? (
          <Image
            className="inline-block rounded-full"
            src={author.avatar}
            width={40}
            height={40}
            alt={`Picture of ${author.name}`}
          />
        ) : null}
      </div>
      <div className="flex flex-initial flex-col text-left">
        <span className="leading-none">{author.name}</span>
        <Link href={`https://github.com/${author.github}`}>
          <a className="flex items-center  text-indigo-700">
            <Github className="mr-1" />
            <span className="text-sm ">{author.github}</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export function BlogContent({ markdown }) {
  return (
    <article className="prose mx-auto w-full auto-cols-max py-10 ">
      <ReactMarkdown
        // eslint-disable-next-line
        children={markdown}
        components={{
          h2: ({ node, children, ...props }) => (
            <h2 className="mb-4 text-3xl font-semibold" {...props}>
              {children}
            </h2>
          ),
          h3: ({ node, children, ...props }) => (
            <h3 className="mb-4 text-2xl font-semibold" {...props}>
              {children}
            </h3>
          ),
          p: ({ node, children, ...props }) => (
            <p className="mb-4 text-lg" {...props}>
              {children}
            </p>
          ),
          a: ({ node, children, ...props }) => (
            <a
              className="text-red-600 hover:text-red-800"
              target="_blank"
              {...props}
            >
              {children}
            </a>
          ),
          ol: ({ node, children }) => (
            <ol className="ml-6 mb-4 list-decimal">{children}</ol>
          ),
          pre: ({ node, children, ...props }) => (
            <pre className="mb-6" {...props}>
              {children}
            </pre>
          ),
          code: CodeBlock,
          img: ({ node, children, ...props }) => (
            <img className="h-auto w-full" {...props}>
              {children}
            </img>
          ),
        }}
      />
      <BackToBlog />
    </article>
  );
}

export function CodeBlock({ node, inline, children, className, ...props }) {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      // eslint-disable-next-line
      children={String(children).replace(/\n$/, "")}
      language={match[1]}
      style={styles.atomDark}
      PreTag="div"
      showLineNumbers={true}
      showInlineLineNumbers={true}
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
}

export function BackToBlog() {
  return (
    <Link href="/blog">
      <a className="mt-10 inline-flex items-center border border-transparent bg-black py-3 px-6 text-white drop-shadow-sm transition-colors hover:border hover:border-black hover:bg-white hover:text-black hover:drop-shadow-2xl">
        <ArrowLeft className="mr-4" />
        Back to Blog
      </a>
    </Link>
  );
}
