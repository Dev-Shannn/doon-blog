import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MyBlog
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        {/* Navbar Links */}
        <ul
          className={`md:flex md:gap-6 absolute md:relative top-16 md:top-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:flex-row flex-col text-center transition-all duration-300 ease-in-out ${isOpen ? "left-0" : "left-[-100%] md:left-0"}`}
        >
          <li className="py-2 md:py-0">
            <Link href="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/blog" className="hover:text-gray-400">Blog</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/about" className="hover:text-gray-400">About</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
