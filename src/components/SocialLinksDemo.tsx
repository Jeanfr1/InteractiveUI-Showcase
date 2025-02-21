
import { SocialLinks } from "@/components/ui/social-links"

const socials = [
  {
    name: "Instagram",
    image: "https://link-hover-lndev.vercel.app/instagram.png",
  },
  {
    name: "Website",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Domain_name_browser_bar_www.svg/1200px-Domain_name_browser_bar_www.svg.png",
  },
  {
    name: "Gmail",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png",
  },
]

export function SocialLinksDemo() {
  return (
    <section className="w-full py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <SocialLinks socials={socials} />
      </div>
    </section>
  )
}
