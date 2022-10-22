import ThemeSwitcher from "../components/global/ThemeSwitcher"
import Image from "next/future/image"
import Link from "next/link"
export default function Navigation(){

  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto flex justify-between items-center py-4 px-6 lg:px-0">
        <nav className="">
          <Link href="/">
            <a>
              <Image src="/favicon-32x32.png" width={32} height={32} alt="Logo Sariyanta" />
            </a>
          </Link>

        </nav>
        <div className="">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}