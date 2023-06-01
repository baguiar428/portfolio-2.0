import Layout from "./components/Layout";
import Image from "next/image";
import Link from "next/link";
import heroPic from "../../public/images/home/hero-pic.png";
import AnimatedText from "./components/AnimatedText";
import { LinkArrow } from "./components/Icons";
import HireMe from "./components/HireMe";
import TransitionEffect from "./components/TransitionEffect";

export default function Home() {
  return (
    <>
    <TransitionEffect/>
    <main className="flex items-center text-dark w-full min-h-screen
    dark:text-light">
      <Layout className="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-full">
            <Image src={heroPic} alt="Bruno Aguiar" className="w-full h-auto 
            lg:hidden md:inline-block md:w-full"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="w-1/2 flex-col items-center self-center
          lg:w-full lg:text-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl"
            />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              I&apos;m a full-stack developer who recently decided to shift from
              IT Support to Web Development. Check out my latest projects and
              blog articles and follow me on my journey to making dreams come
              true!
            </p>
            <div className='flex items-center self-start mt-2 lg:self-center'>
              <Link
                href="/Bruno_Aguiar-Resume.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light 
                p-2.5 px-6 rounded-lg text-lg font-semibold 
                hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                
                dark:bg-light dark:text-dark 
                hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base"
                download={true}>
                Resume
                <LinkArrow className={"w-6 ml-1"}/>
              </Link>
              <Link href="mailto:b.aguiar428@gmail.com" target="_blank"
              className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
              md:text-base">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe/>
      {/* Maybe put an image here?... */}
      {/* <div>
        <Image/>
      </div> */}
    </main>
    </>
  );
}
