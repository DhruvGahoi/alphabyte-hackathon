import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
      
        <header className="sticky top-0 border-b transition duration-200 ease-in-out border-white/10 bg-black/[0.96] backdrop-blur-[0.5px] animate-header-slide-down-fade">
        <div className="mx-auto hidden h-[58px] w-full items-center justify-between transition duration-500 ease-in-out md:flex">
          <a className="text-2xl font-bold text-gray-900 dark:text-white" href="#">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Qualisys
            </span>
          </a>
          <nav className="flex space-x-6">
            <Link
              className="text-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              href="#"
            >
              Interviews
            </Link>
            <Link
              className="text-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              href="#"
            >
              Blog
            </Link>
            <Link
              className="text-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              href="#"
            >
              About
            </Link>
          </nav>
        </div>
      </header>
    )
}