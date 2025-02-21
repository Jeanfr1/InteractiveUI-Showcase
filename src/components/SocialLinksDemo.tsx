
import { SocialLinks } from "@/components/ui/social-links"

const socials = [
  {
    name: "Instagram",
    image: "https://link-hover-lndev.vercel.app/instagram.png",
  },
  {
    name: "Website",
    image: "https://link-hover-lndev.vercel.app/website.png",
  },
  {
    name: "Gmail",
    image: "https://link-hover-lndev.vercel.app/gmail.png",
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
