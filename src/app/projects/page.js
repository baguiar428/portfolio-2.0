"use client"; //If using Framer for Thumbnail Zoom
import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../components/Icons";
import ogPortfolio from "../../../public/images/projects/portfolio_v1-1.png";
import blogPic from "../../../public/images/projects/TAB_Blog.png";
import assetTransmogrifier from "../../../public/images/projects/asset_transmogrifier.png"
import newRecoupPic from "../../../public/images/projects/new_recoup_collage.png"
import {motion} from "framer-motion" //Import for Framer Effects

const FramerLink = motion(Link);

const FeaturedProject = ({
  type,
  title,
  summary,
  picture,
  website,
  github,
}) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 
    dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light" />

      <FramerLink
        href={website}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        whileHover={{scale:1.01}}
        transition={{duration:0.2}}
      >
        {/* Change to FramerImage for zoom in effect. Include whileHover and Transition */}
        <Image src={picture} alt={title} className="w-full h-auto"
        // whileHover={{scale:1.05}}
        // transition={{duration:0.2}}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
         />
      </FramerLink>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={website}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
          {/* If you want to add a live link to visit project  */}
          <Link
            href={website}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, summary, picture, website, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />

      <FramerLink
        href={website}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg
        "
        whileHover={{scale:1.01}}
        transition={{duration:0.2}}
      >
        <Image src={picture} alt={title} className="w-full h-auto" />
      </FramerLink>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={website}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          {/* If you want to add a live link to visit project  */}
          <Link
            href={website}
            target="_blank"
            className="text-lg font-semibold underline underline-offset-2 dark:text-light"
          >
            Visit Project
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const page = () => {
  return (
    <>
      <Head>
        <title>T.A.B | Projects</title>
        <meta name="description" content="Projects Page - Talk About Bruno" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Let's Create and Build!" className="mb-16" />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Portfolio 1.0"
                picture={ogPortfolio}
                summary="Original version of my portfolio page. Used Next.js with Pages Router and Tailwind CSS."
                website="https://github.com/baguiar428/Portfolio"
                type="Featured Project"
                github="https://github.com/baguiar428/Portfolio"
              />
            </div>
            {/* For two side by side projects view use code below */}
            <div className="col-span-6">
              <Project
                title="T.A.B - Blog"
                picture={blogPic}
                summary="Simple but elegant blog website using Github Pages and Beautiful Jekyll."
                website="https://baguiar428.github.io/"
                type="Blog Site"
                github="https://github.com/baguiar428/Portfolio"
              />
            </div>
            <div className="col-span-6">
            <Project
                title="Asset Transmogrifier"
                picture={assetTransmogrifier}
                summary="A BASH shell script for converting a batch download list from Windows to Unix format."
                website="https://github.com/baguiar428/Asset-Transmogrifier"
                type="System Utility Script"
                github="https://github.com/baguiar428/Asset-Transmogrifier"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="New Recoup Wellness"
                picture={newRecoupPic}
                summary="Web Portal for Massage Therapists to create an Address Book which can be used to create email mailing lists or send out an SMS message.
                Clients can schedule an appointment via Calendly on the landing page. Massage Therapists can log-in to manage address book and marketing."
                website="https://newrecoup.com/"
                type="Flatiron Capstone"
                github="https://github.com/baguiar428/flatiron-capstone"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;
