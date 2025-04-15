import Image from "next/image"
import { products, navLinks } from "@/data/shop-data"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Cupcakes = () => {
  // Filter products to get only cupcakes
  const cupcakes = products.filter((product) => product.category === "cupcake")

  // Get navigation info
  const productsNav = navLinks.find((link) => link.path === "/products")
  const categoryLink = productsNav?.dropdownLinks?.find((link) =>
    link.path.includes("cupcake")
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
            {cupcakes.slice(0, 6).map((cupcake) => (
              <CarouselItem
                key={cupcake.id}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg drop-shadow-black hover:shadow-xl transition-all duration-300">
                  <div className="relative pt-[130%]">
                    <Image
                      src={cupcake.image}
                      alt={cupcake.name}
                      fill
                      className="object-cover absolute inset-0"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-my-lavender text-shadow-sm text-shadow-black/50">
                      {cupcake.name}
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm h-20 overflow-hidden">
                      {cupcake.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-my-lavender">
                        {cupcake.price} SEK
                      </span>
                      {cupcake.allergens && (
                        <div className="text-xs text-gray-500">
                          {cupcake.allergens.join(", ")}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cupcakes.map((cupcake) => (
            <div
              key={cupcake.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg drop-shadow-black hover:shadow-xl transition-all duration-300"
            >
              <div className="relative pt-[130%]">
                <Image
                  src={cupcake.image}
                  alt={cupcake.name}
                  fill
                  className="object-cover absolute inset-0"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-my-lavender text-shadow-sm text-shadow-black/50">
                  {cupcake.name}
                </h3>
                <p className="text-gray-700 mb-4">{cupcake.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-my-lavender">
                    {cupcake.price} SEK
                  </span>
                  {cupcake.allergens && (
                    <div className="text-xs text-gray-500">
                      {cupcake.allergens.join(", ")}
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

export default Cupcakes
