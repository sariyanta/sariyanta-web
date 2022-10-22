/**
 * Contains components used in a single post layout
 */

import Image from "next/future/image"
import Link from "next/link"
import { ArrowLeft, Github } from "react-bootstrap-icons"
import moment from "moment/moment";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import React from "react";

/**
 *
 * @param {object} post
 * @returns string
 */
export function BlogLayout({ post }) {
  return (
    <main className="max-w-4xl w-full mx-auto px-6 lg:px-0">
      <BlogHeader title={post.title} date={post.date} author={post.author} />
      <BlogContent markdown={post.markdown} />
    </main>
  )
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
    <div className="mx-auto w-full py-10 text-center border-b">
      <BlogTitle title={title} />
      <BlogPublishedDate date={date} />
      <BlogAuthor author={author} />
    </div>
  )
}

/**
 *
 * @param {string} title  Post title
 * @returns
 */
export function BlogTitle({ title }) {
  return (
    <h1 className="text-4xl">{title}</h1>
  )
}

/**
 *
 * @param {string} date Published date
 * @returns
 */
export function BlogPublishedDate({ date }) {
  let postDate = new Date(date);
  let relativeTime = moment(postDate).fromNow()
  postDate = moment(postDate).format('dddd, D MMMM YYYY')

  return (
    <time>{postDate} ({relativeTime})</time>
  )
}

/**
 *
 * @param {object} author Object consisting the author name, github username and avatar
 * @returns
 */
export function BlogAuthor({ author }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-none mr-2">
        {author?.avatar ? <Image className="rounded-full inline-block" src={author.avatar} width={40} height={40} alt={`Picture of ${author.name}`} /> : null}
      </div>
      <div className="flex-initial flex flex-col text-left">
        <span className="leading-none">{author.name}</span>
        <Link href={`https://github.com/${author.github}`}>
          <a className="flex items-center  text-indigo-700">
            <Github className="mr-1" />
            <span className="text-sm ">{author.github}</span>
          </a>
        </Link>
      </div>

    </div>
  )
}


export function BlogContent({ markdown }) {
  return (
    <article className="prose w-full mx-auto auto-cols-max py-10 ">
      <ReactMarkdown
        // eslint-disable-next-line
        children={markdown}
        components={{
          h2: ({ node, children, ...props }) => <h2 className="text-4xl" {...props}>{children}</h2>,
          code: CodeBlock
        }}
      />
      <BackToBlog />
    </article>
  )
}

export function CodeBlock({node, inline, children, className, ...props}) {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighter
      // eslint-disable-next-line
      children={String(children).replace(/\n$/, '')}
      language={match[1]}
      PreTag="div"
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

export function BackToBlog() {
  return (
    <Link href="/blog">
      <a className="inline-flex items-center py-3 px-6 mt-10 bg-black text-white drop-shadow-sm border border-transparent hover:drop-shadow-2xl hover:border-black hover:border hover:bg-white hover:text-black transition-colors">
        <ArrowLeft className="mr-4" />
        Back to Blog
      </a>
    </Link>
  )
}

