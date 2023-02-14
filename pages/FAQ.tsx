import { Icons } from "@/components/icons"
import { SidebarHome } from "@/components/sidebarHome"
import { SiteHeader } from "@/components/site-header"
import { FAQData } from "../components/FAQData"

export default function FAQPage() {
  return (
    <div>
      <SiteHeader />
      <div className="container grid flex-row items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Here are 10 of the most frequently asked questions about growing
            cannabis asp per ChatGPT.
          </p>
          {/* use the FAQData component */}
          <FAQData />
        </div>
        <div className="flex gap-4"></div>
      </div>
    </div>
  )
}
