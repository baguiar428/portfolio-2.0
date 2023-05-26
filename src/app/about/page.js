import React from "react";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Image from "next/image";
import bioPic from "../../../public/images/about/bio_pic.png"
import heroPic from "../../../public/images/home/hero-pic.png";



export default function Page() {
  return (
    <>
      <Head>
        <title>T.A.B | About</title>
        <meta name="description" content="About Page - Talk About Bruno" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Talk About Bruno!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold text-dark/75 uppercase">
                About Me
              </h2>
              <p className="font-medium">
                I&apos;m a full-stack developer with a passion for using
                technology to solve problems while making life easier...and fun!
                I have 10+ years of experience in IT across multiple industries.
                I decided to dive into software development and graduated from
                the Flatiron School Software Engineering program. I&apos;ve
                started my journey to level up my skillset and career and
                I&apos;m excited for what&apos;s to come!
              </p>
              <p className="my-4 font-medium">
                I believe that you don&apos;t have to sacrifice style for
                function. The better you get at something the more you can let
                your style shine through. I want to convey that with my work.
              </p>
              <p className="font-medium">
                Technology and tinkering are true passions of mine so I&apos;m
                always looking out for the latests tech toys to play with. Web
                development is a large canvas to paint on. Let&apos;s build
                something beautiful and useful...
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8">
                <div className="absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"/>
                <Image src={bioPic} alt="Bruno" className="w-full h-auto rounded-2xl"/>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
