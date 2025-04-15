import Image from "next/image"
import Link from "next/link"
import { products, navLinks } from "@/data/shop-data"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Products = () => {
  // Get product categories
  const categories = [...new Set(products.map((product) => product.category))]

  // Find category links from navigation data
  const productsNav = navLinks.find((link) => link.path === "/products")
  const categoryLinks = productsNav?.dropdownLinks || []

  return (
    <div className="bg-my-peach min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {categories.map((category) => {
          const categoryProducts = products.filter(
            (p) => p.category === category
          )
          const categoryLink = categoryLinks.find((link) =>
            link.path.includes(category)
          )

          return (
            <section key={category} className="mb-16">
              {categoryLink && (
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-semibold text-my-lavender text-shadow-sm text-shadow-black/50">
                    {categoryLink.name}
                  </h2>
                  <Link
                    href={categoryLink.path}
                    className="px-6 py-3 bg-my-lavender text-white rounded-lg shadow-md hover:bg-my-lavender/90 transition-all duration-300"
                  >
                    {categoryLink.name}
                  </Link>
                </div>
              )}

              <Carousel className="w-full">
                <CarouselContent>
                  {categoryProducts.map((product) => (
                    <CarouselItem
                      key={product.id}
                      className="md:basis-1/2 lg:basis-1/3 pl-4"
                    >
                      <div className="bg-white rounded-lg overflow-hidden shadow-lg drop-shadow-black hover:shadow-xl transition-all duration-300">
                        <div className="relative pt-[130%]">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover absolute inset-0"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2 text-my-lavender text-shadow-sm text-shadow-black/50">
                            {product.name}
                          </h3>
                          <p className="text-gray-700 mb-4 text-sm h-20 overflow-hidden">
                            {product.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-my-lavender">
                              {product.price} SEK
                            </span>
                            {product.allergens && (
                              <div className="text-xs text-gray-500">
                                {product.allergens.join(", ")}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious variant="outline" />
                <CarouselNext variant="outline" />
              </Carousel>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default Products
