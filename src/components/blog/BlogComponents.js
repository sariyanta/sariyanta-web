/**
 * Contains components used in a single post tlayoute
 */

import Image from "next/future/image"
import Link from "next/link"
import { ArrowLeft, Github } from "react-bootstrap-icons"
import moment from "moment/moment";


export function BlogHeroDate({date}) {
  let postDate = new Date(date);
  let relativeTime = moment(postDate).fromNow()
  postDate = moment(postDate).format('dddd, Do MMMM YYYY')

  return (
    <div className="flex justify-center my-4">
      {postDate} (about {relativeTime})
    </div>
  )
}
/**
 *
 * @param {object} Post
 * @returns string
 */
export function BlogHeroAuthor({post}) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-none mr-2">
        { post?.author.avatar ? <Image className="rounded-full inline-block" src={post.author.avatar} width={40} height={40} alt={`Picture of ${post.author.name}`}  /> : null}
      </div>
      <div className="flex-initial flex flex-col text-left">
        <span className="leading-none">{post.author.name}</span>
        <Link href={`https://github.com/${post.author.github}`}>
          <a className="flex items-center  text-indigo-700">
            <Github className="mr-1"/>
            <span className="text-sm ">{post.author.github}</span>
            </a>
        </Link>
      </div>

    </div>
  )
}
export function BlogHeroSingle({post}){


  return (
    <section className="max-w-4xl mx-auto py-10 text-center border-b">
      { post?.title ?  <h1 className="text-6xl mt-6 font-worksans"> {post.title} </h1> : null }
      <BlogHeroDate date={post.date} />
      <BlogHeroAuthor post={post} />
      {post.excerpt}
    </section>
  )
}

export function BlogContentSingle({children}){
  return (
    <article className="prose max-w-4xl w-full mx-auto auto-cols-max py-10 ">
      {children}
    </article>
  )
}

export function BackToBlog() {
  return (
    <Link href="/blog">
      <a className="inline-flex items-center py-4 px-10 mt-10 bg-black text-white drop-shadow-sm hover:drop-shadow-lg hover:bg-white hover:text-black transition-colors">
        <ArrowLeft className="mr-4"/>
        Back to Blog
        </a>
    </Link>
  )
}

