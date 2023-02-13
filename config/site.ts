import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    instagram: string
    github: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "First Time Growers",
  description:
    "First Time Grower? Not a problem, we're glad you've taken the first step towards a lifelong hobby.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Mission",
      href:"/mission"
    },
    {
      title: "Contact",
      href:"/contact"
    },
    {
      title: "Legality",
      href:"/legality"
    }
  ],
  links: {
    twitter: "https://twitter.com/FTGrowers",
    instagram: "https://www.instagram.com/thefirsttimegrowers/",
    github: "https://github.com/ChrisJRamirez/FTG-2",
    docs: "https://ui.shadcn.com",
  },
}
