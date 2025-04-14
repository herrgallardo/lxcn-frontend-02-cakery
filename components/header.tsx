"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar"
import { storeInfo } from "@/data/shop-data"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHoveringLogo, setIsHoveringLogo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "bg-white/10 backdrop-blur-sm shadow-sm"
          : "bg-my-berry/30 shadow-md"
      )}
    >
      <div
        className={cn(
          "w-full px-4 py-4 md:py-0 relative flex flex-col md:block items-center",
          isScrolled ? "md:h-[150px]" : "md:h-[280px]"
        )}
      >
        {/* Mobile Layout */}
        <div
          className={cn(
            "md:hidden w-full relative flex flex-col items-center",
            isScrolled ? "py-1" : "py-3"
          )}
        >
          {/* Hamburger in top-right */}
          <div className="absolute top-0 right-0 p-2">
            <Navbar />
          </div>
          {/* Centered logo */}
          <Link href="/" className={isScrolled ? "mt-2" : "mt-6"}>
            <Image
              src={isHoveringLogo ? storeInfo.logo2 : storeInfo.logo}
              alt={storeInfo.name}
              width={isScrolled ? 80 : 150}
              height={isScrolled ? 80 : 150}
              priority
              className="object-contain rounded-full bg-my-lemon drop-shadow-my-lavender shadow-md transition-all duration-200"
              onMouseEnter={() => setIsHoveringLogo(true)}
              onMouseLeave={() => setIsHoveringLogo(false)}
            />
          </Link>
        </div>
        {/* Desktop Layout */}
        <div
          className={cn(
            "hidden md:block w-full relative",
            isScrolled ? "h-[150px]" : "h-[280px]"
          )}
        >
          {/* Logo on the left */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2">
            <Link href="/">
              <Image
                src={isHoveringLogo ? storeInfo.logo2 : storeInfo.logo}
                alt={storeInfo.name}
                width={isScrolled ? 120 : 240}
                height={isScrolled ? 120 : 240}
                priority
                className="object-contain rounded-full bg-my-lemon drop-shadow-my-lavender shadow-md transition-all duration-200"
                onMouseEnter={() => setIsHoveringLogo(true)}
                onMouseLeave={() => setIsHoveringLogo(false)}
              />
            </Link>
          </div>
          {/* Store name and navbar centered in the header */}
          <div className="ml-[180px] h-full flex flex-col items-center justify-center">
            <h1
              className={cn(
                "font-bold text-my-lavender mb-6 font-great-vibes text-shadow-sm text-shadow-black/50 transition-all duration-200",
                isScrolled ? "text-4xl" : "text-6xl lg:text-8xl"
              )}
            >
              {storeInfo.name}
            </h1>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
