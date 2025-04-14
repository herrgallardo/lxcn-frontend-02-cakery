"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { navLinks } from "@/data/shop-data"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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
                    <NavigationMenuTrigger className="text-lg px-5 py-2">
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
                                  "block w-full text-lg p-2 hover:bg-[#f4e8ff] rounded-md transition-colors",
                                  pathname === dropdownLink.path &&
                                    "font-medium bg-[#e4d5f6]"
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
                        "text-lg px-5 py-2 rounded-md hover:bg-[#e4d5f6] transition-colors",
                        pathname === link.path && "font-medium bg-[#d2c0ec]"
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
        <div className="md:hidden mt-2 px-4 py-3 bg-card rounded-md shadow-md">
          <ul className="space-y-3">
            {navLinks.map((link) => {
              if (link.isDropdown && link.dropdownLinks) {
                return (
                  <li key={link.name} className="space-y-2">
                    <div className="font-medium text-lg">{link.name}</div>
                    <ul className="pl-4 space-y-2 border-l-2 border-muted">
                      {link.dropdownLinks.map((dropdownLink) => (
                        <li key={dropdownLink.name}>
                          <Link
                            href={dropdownLink.path}
                            onClick={toggleMenu}
                            className={cn(
                              "block text-lg transition-colors hover:text-primary",
                              pathname === dropdownLink.path
                                ? "text-primary font-medium"
                                : "text-muted-foreground"
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
                      "block font-medium text-lg transition-colors hover:text-primary",
                      pathname === link.path
                        ? "text-primary"
                        : "text-foreground"
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
