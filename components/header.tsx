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
          : "bg-my-peach shadow-2xl shadow-my-lavender"
      )}
    >
      <div className="w-full px-4 py-4 md:py-0 md:h-[200px] relative flex flex-col md:block items-center">
        {/* Mobile Layout */}
        <div className="md:hidden w-full relative flex flex-col items-center">
          {/* Hamburger in top-right */}
          <div className="absolute top-0 right-0 p-2">
            <Navbar />
          </div>

          {/* Centered logo */}
          <Link href="/" className="mt-6">
            <Image
              src={isHoveringLogo ? storeInfo.logo2 : storeInfo.logo}
              alt={storeInfo.name}
              width={150}
              height={150}
              priority
              className="object-contain rounded-full shadow-my-lavender shadow-md"
              onMouseEnter={() => setIsHoveringLogo(true)}
              onMouseLeave={() => setIsHoveringLogo(false)}
            />
          </Link>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block w-full h-[200px] relative">
          {/* Logo on the left */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2">
            <Link href="/">
              <Image
                src={isHoveringLogo ? storeInfo.logo2 : storeInfo.logo}
                alt={storeInfo.name}
                width={160}
                height={160}
                priority
                className="object-contain rounded-full shadow-my-lavender shadow-lg"
                onMouseEnter={() => setIsHoveringLogo(true)}
                onMouseLeave={() => setIsHoveringLogo(false)}
              />
            </Link>
          </div>

          {/* Store name and navbar centered in the header */}
          <div className="ml-[180px] h-full flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-my-lavender mb-6 font-great-vibes">
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
