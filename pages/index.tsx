import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { Sidebar } from "lucide-react"
import { SidebarHome } from "@/components/sidebarHome"
import  Carousel  from "../components/Carousel"
// import CarouselTest from "@/components/carouselTest"



const images = [
  {
    url: "https://2fast4buds.com/temp/img_upload/bg_ccaba0ad2d1638325c6180bdc8f5269d.jpg",
    title: "First Time Grower?",
    subtitle: "test1"
  },
  {
    url: "http://placekitten.com/g/400/200",
    title: "First Time Grower?",
    subtitle: "test2"
  },
  {
    url: "http://placekitten.com/g/400/200",
    title: "First Time Grower?",
    subtitle: "test3"
  }
]

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>First Time Growers</title>
        <meta
          name="description"
          content="First Time Grower? Not a problem, we're glad you've taken the first step towards a lifelong hobby."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid flex-row items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 sm:text-3xl md:text-5xl lg:text-6xl">
          First Time Grower?  <br className="hidden sm:inline" />
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
          Not a problem, we're glad you've taken the first step towards a lifelong hobby.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link>        
        </div> 
      
       {/* <CarouselTest /> */}
        
      </section>
    </Layout>
  )
}
