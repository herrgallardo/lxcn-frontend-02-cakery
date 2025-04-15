import Image from "next/image"
import { products, navLinks } from "@/data/shop-data"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const WeddingCakes = () => {
  // Filter products to get only wedding cakes
  const weddingCakes = products.filter(
    (product) => product.category === "wedding-cake"
  )

  // Get navigation info
  const productsNav = navLinks.find((link) => link.path === "/products")
  const categoryLink = productsNav?.dropdownLinks?.find((link) =>
    link.path.includes("wedding")
  )

  return (
    <div className="bg-my-peach min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {categoryLink && (
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-great-vibes text-my-lavender text-shadow-sm text-shadow-black/50 mb-4">
              {categoryLink.name}
            </h1>
          </div>
        )}

        <Carousel className="w-full mb-16">
          <CarouselContent>
            {weddingCakes.slice(0, 6).map((cake) => (
              <CarouselItem
                key={cake.id}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg drop-shadow-black hover:shadow-xl transition-all duration-300">
                  <div className="relative pt-[100%]">
                    <Image
                      src={cake.image}
                      alt={cake.name}
                      fill
                      className="object-cover absolute inset-0"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-my-lavender text-shadow-sm text-shadow-black/50">
                      {cake.name}
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm h-12 overflow-hidden">
                      {cake.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-my-lavender">
                        {cake.price} SEK
                      </span>
                      {cake.allergens && (
                        <div className="text-xs text-gray-500">
                          {cake.allergens.join(", ")}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weddingCakes.map((cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg drop-shadow-black hover:shadow-xl transition-all duration-300"
            >
              <div className="relative pt-[100%]">
                <Image
                  src={cake.image}
                  alt={cake.name}
                  fill
                  className="object-cover absolute inset-0"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-my-lavender text-shadow-sm text-shadow-black/50">
                  {cake.name}
                </h3>
                <p className="text-gray-700 mb-4">{cake.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-my-lavender">
                    {cake.price} SEK
                  </span>
                  {cake.allergens && (
                    <div className="text-xs text-gray-500">
                      {cake.allergens.join(", ")}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WeddingCakes
