import ThemeSwitcher from "./ThemeSwitcher"
import Image from "next/image"
import logo from "@/images/sariyanta.jpeg"


export default function Navigation() {

  return (
    <header className="border-b border-gray-200 dark:border-gray-700 ">
      <nav className="lg:container mx-auto flex py-3 px-3 lg:px-0">
        <Image className="aspect-square rounded-full w-8 h-8 " src={logo} width={24} height={24} alt="Picture of Sariyanta as logo" />
        <ThemeSwitcher className="ml-auto" />
      </nav>
    </header>
  )
}
