import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../components/Icons";
// import OGportfolio from "../../../public/images/projects/portfolio_v1-1.png"

const FeaturedProject = (type, title, summary, pic, link, github) => {
  return (
    <article>
      <Link href={link} target="_blank">
        <Image src={pic} alt={title} className="w-full h-auto" />
      </Link>
      <div>
        <span>{type}</span>
        <Link href={link} target="_blank">
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
        <div>
          <Link href={github} target="_blank">
            {" "}
            <GithubIcon />{" "}
          </Link>
          {/* If you want to add a live link to visit project  */}
          <Link href={link} target="_blank">
            Visit Project
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Let's Create and Build!" />

          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject />
            </div>
            {/* For two side by side projects view use code below */}
            {/* <div className="col-span-6">
                    Second Project
                </div>
                <div className="col-span-6">
                    Third Project
                </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;
