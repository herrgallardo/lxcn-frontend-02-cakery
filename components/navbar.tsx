"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { navLinks } from "@/data/shop-data"

import * as NavigationMenuComponents from "@/components/ui/navigation-menu"

const {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} = NavigationMenuComponents

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleTriggerClick =
    (path: string, isDropdown: boolean) => (e: React.MouseEvent) => {
      // If it's a dropdown but user clicks directly on the text (not the arrow)
      if (isDropdown) {
        // Check if click is not on the arrow
        const arrowElement = (e.currentTarget as HTMLElement).querySelector(
          "svg"
        )
        if (arrowElement && !arrowElement.contains(e.target as Node)) {
          e.preventDefault()
          router.push(path)
        }
      }
    }

  return (
    <nav className="w-full">
      {/* Desktop Navigation with Shadcn Navigation Menu */}
      <div className="hidden md:flex items-center justify-center">
        <NavigationMenu>
          <NavigationMenuList className="space-x-2">
            {navLinks.map((link) => {
              if (link.isDropdown && link.dropdownLinks) {
                return (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuTrigger
                      className={cn(
                        "text-lg px-5 py-2 cursor-pointer",
                        pathname === link.path &&
                          "bg-[var(--color-my-lavender)] bg-opacity-20 font-medium"
                      )}
                      onClick={handleTriggerClick(link.path, true)}
                    >
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[220px] gap-2 p-4">
                        {link.dropdownLinks.map((dropdownLink) => (
                          <li key={dropdownLink.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={dropdownLink.path}
                                className={cn(
                                  "block w-full text-lg p-2 rounded-md transition-colors",
                                  "hover:bg-[var(--color-my-lavender)] hover:bg-opacity-10 hover:text-[var(--color-my-lavender)]",
                                  pathname === dropdownLink.path
                                    ? "bg-[var(--color-my-lavender)] bg-opacity-20 text-[var(--color-my-lavender)] font-medium"
                                    : "text-gray-600"
                                )}
                                data-active={pathname === dropdownLink.path}
                              >
                                {dropdownLink.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              }

              return (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.path}
                      className={cn(
                        "text-lg px-5 py-2 rounded-md transition-colors",
                        "hover:bg-[var(--color-my-lavender)] hover:bg-opacity-10 hover:text-[var(--color-my-lavender)]",
                        pathname === link.path
                          ? "bg-[var(--color-my-lavender)] bg-opacity-20 text-[var(--color-my-lavender)] font-medium"
                          : "text-gray-600"
                      )}
                      data-active={pathname === link.path}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end">
        <button
          onClick={toggleMenu}
          className="flex items-center focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 px-4 py-3 bg-white rounded-md shadow-md">
          <ul className="space-y-3">
            {navLinks.map((link) => {
              if (link.isDropdown && link.dropdownLinks) {
                return (
                  <li key={link.name} className="space-y-1">
                    <Link
                      href={link.path}
                      onClick={toggleMenu}
                      className={cn(
                        "block font-medium text-lg transition-colors",
                        pathname === link.path
                          ? "text-[var(--color-my-lavender)]"
                          : "text-gray-600 hover:text-[var(--color-my-lavender)]"
                      )}
                    >
                      {link.name}
                    </Link>

                    <ul className="pl-4 space-y-2 border-l-2 border-gray-200 mt-2">
                      {link.dropdownLinks.map((dropdownLink) => (
                        <li key={dropdownLink.name}>
                          <Link
                            href={dropdownLink.path}
                            onClick={toggleMenu}
                            className={cn(
                              "block text-lg transition-colors",
                              pathname === dropdownLink.path
                                ? "text-[var(--color-my-lavender)] font-medium"
                                : "text-gray-600 hover:text-[var(--color-my-lavender)]"
                            )}
                          >
                            {dropdownLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              }

              return (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    onClick={toggleMenu}
                    className={cn(
                      "block font-medium text-lg transition-colors",
                      pathname === link.path
                        ? "text-[var(--color-my-lavender)]"
                        : "text-gray-600 hover:text-[var(--color-my-lavender)]"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
