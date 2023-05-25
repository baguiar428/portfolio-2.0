import Layout from "./components/Layout"
import Image from "next/image"
import Link from "next/link"
import heroPic from "../../public/images/home/hero-pic.png"
import AnimatedText from "./components/AnimatedText"

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={heroPic} alt="Bruno Aguiar" className="w-full h-auto" />
          </div>
          <div className="w-1/2 flex-col items-center self-center">
            <AnimatedText text="Turning Vision Into Reality With Code And Design." 
             className="!text-6xl !text-left"/>
            <p className="my-4 text-base font-medium">
              I&apos;m a full-stack developer who recently decided to shift from IT Support to Web Development.
              Check out my latest projects and blog articles and follow me on my journey to making dreams come true!
            </p>
            <div>
              <Link href="../public/Bruno_Aguiar-Resume.pdf">Resume</Link>
              <Link href="mailto:b.aguiar428@gmail.com">Contact Me</Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}
