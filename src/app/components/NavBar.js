"use client";
import React from "react";
import Link from "next/link";
//import {useRouter} from "next/navigation"
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, BlogIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  // const router = useRouter();
  // console.log(router)
  // Use this console log to see what the router hook object provides.
  // Use asPath to know what we are on.
  // ${router.asPath === href ? 'w-full' : 'w-0'}

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
      h-[3px] inline-block w-0 bg-dark 
      absolute left-0 -bottom-1
      group-hover:w-full transition-[width] ease duration-300
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/contact" title="Contact" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://github.com/baguiar428"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/aguiarbruno/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://baguiar428.github.io/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <BlogIcon />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
