"use client";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import Layout from "../components/Layout";
import Image from "next/image";
import bioPic from "../../../public/images/about/bio_pic.png";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import TransitionEffect from "../components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      // console.log(latest)
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default function Page() {
  return (
    <>
      <Head>
        <title>T.A.B | About</title>
        <meta name="description" content="About Page - Talk About Bruno" />
      </Head>
      <TransitionEffect/>
      <main
        className="flex w-full flex-col items-center justify-center
      dark:text-light"
      >
        <Layout className="pt-16">
          <AnimatedText text="Talk About Bruno!" className="mb-16 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:!text-4xl" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 xl:col-span-4 flex flex-col items-start justify-start md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold text-dark/75 uppercase dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                I&apos;m a native bilingual speaker &#40;Portuguese and
                English&#41; and full-stack developer with a passion for using
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
                development is a large canvas to paint on.{" "}
                <em className="font-bold">
                  Let&apos;s build something beautiful and useful!
                </em>
              </p>
            </div>
            <div
              className="col-span-3 xl:col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light md:order-1 md:col-span-8"
            >
              <div
                className="absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[2rem] 
              bg-dark dark:bg-light"
              />
              <Image
                src={bioPic}
                alt="Bruno"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* Extra Space to work with.*/}
            {/* Either use client and projects counter 
                or
                Another picture or graphic*/}
            <div className="col-span-2 xl:col-span-8 xl:flex-row xl:items-center flex flex-col items-end justify-between md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={6} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  year of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
