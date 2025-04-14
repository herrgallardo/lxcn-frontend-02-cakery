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
    <footer className="py-12 bg-my-sage/40 rounded-t-lg shadow-lg">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Left side - shop info and social links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-my-lavender text-shadow-sm text-shadow-black/50">
              {storeInfo.name}
            </h3>
            <p className="text-sm text-black/80 mb-6">
              {storeInfo.description}
            </p>

            {/* Social links */}
            <div className="flex justify-center md:justify-start space-x-4">
              {socialMediaLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-all duration-300 transform hover:scale-110"
                  aria-label={link.platform}
                >
                  <Image
                    src={link.icon}
                    alt={link.platform}
                    width={32}
                    height={32}
                    className="rounded-full shadow-md"
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
                <h3 className="text-lg font-semibold mb-3 text-my-lavender text-shadow-sm text-shadow-black/50">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        className="text-sm text-black/80 hover:text-my-lavender transition-colors duration-300 hover:underline"
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

        <div className="pt-6 border-t border-my-sage/50 text-sm text-center text-black/70 mt-4">
          {footerContent.copyright}
        </div>
      </div>
    </footer>
  )
}

export default Footer
