import Link from "next/link"
import Image from "next/future/image";

export default function BlogItem({post}){
  const url = `/blog/${post.id}`;
  return(
    <Link href={url}>
      <a  className="block  bg-white rounded-lg  shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
        { post.featuredimage ?
          <div className="relative overflow-hidden rounded-t-lg">
            <Image src={post.featuredimage} alt={`Picture of ${post.title}`} width={300} height={300} className="hover:scale-110  transition-all"/>
          </div>
          : null
        }
        <div className="p-6">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{post.excerpt}</p>
        </div>
      </a>
    </Link>
  )
}