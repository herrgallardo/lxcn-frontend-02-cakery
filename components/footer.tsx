import Link from "next/link"
import Image from "next/image"
import {
  socialMediaLinks,
  storeInfo,
  footerContent,
  footerSections,
} from "@/data/shop-data"

const Footer = () => {
  return (
    <footer className="py-8 bg-my-berry/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
          {/* Left side - shop info and social links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-3">{storeInfo.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {storeInfo.description}
            </p>

            {/* Social links */}
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              {socialMediaLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label={link.platform}
                >
                  <Image
                    src={link.icon}
                    alt={link.platform}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - navigation links */}
          <div className="w-full md:w-2/3 flex flex-wrap justify-center md:justify-end">
            {footerSections.map((section) => (
              <div
                key={section.title}
                className="px-4 mb-4 md:mb-0 text-center md:text-left"
              >
                <h3 className="text-base font-semibold mb-2">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border text-xs text-center text-muted-foreground mt-4">
          {footerContent.copyright}
        </div>
      </div>
    </footer>
  )
}

export default Footer
