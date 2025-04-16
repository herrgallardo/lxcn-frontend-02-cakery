import Image from "next/image"
import Link from "next/link"
import { homePageContent, products, storeInfo } from "@/data/shop-data"
import AllergenIcons from "@/components/allergen-icons"

export default function Home() {
  // Filter featured products
  const featuredProducts = products.filter((product) => product.featured)

  return (
    <div className="bg-my-peach min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-280px)] md:h-[calc(100vh-150px)] flex items-center">
        <div className="container mx-auto px-4 max-w-5xl z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-great-vibes text-my-lavender text-shadow-sm text-shadow-black/50 mb-4">
                {homePageContent.hero.heading}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                {homePageContent.hero.subheading}
              </p>
              <Link
                href={homePageContent.hero.ctaLink}
                className="inline-block px-6 py-3 bg-my-lavender text-white rounded-lg shadow-md hover:bg-my-lavender/80 hover:scale-105 transition-all duration-300"
              >
                {homePageContent.hero.ctaText}
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="relative aspect-square rounded-full overflow-hidden border-6 border-white shadow-md shadow-black/50 hover:scale-105 transition-all duration-300">
                <Image
                  src={homePageContent.hero.image}
                  alt={storeInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-my-peach/70 to-my-peach/30 z-0"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-semibold text-center mb-12 text-my-lavender text-shadow-sm text-shadow-black/50">
            {homePageContent.featuresSectionTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homePageContent.features.map((feature, index) => (
              <div
                key={index}
                className="bg-my-sage/40 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-36 h-36 flex items-center justify-center">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={144}
                      height={144}
                      className="rounded-full shadow-md shadow-black/50"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-my-lavender">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-my-sage/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-semibold text-center mb-12 text-my-lavender text-shadow-sm text-shadow-black/50">
            {homePageContent.featuredProductsSectionTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative pt-[120%]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover absolute inset-0"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-my-lavender text-shadow-sm text-shadow-black/50">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-2 text-sm">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-my-lavender">
                      {product.price} SEK
                    </span>
                    <div className="flex items-center space-x-2">
                      {product.allergens && (
                        <AllergenIcons
                          allergens={product.allergens}
                          size={16}
                          className="mr-2"
                        />
                      )}
                      <Link
                        href={`/products/${product.category}s`}
                        className="px-3 py-1 bg-my-berry text-white rounded-md text-sm hover:bg-my-berry/90 transition-colors"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-semibold text-center mb-12 text-my-lavender text-shadow-sm text-shadow-black/50">
            {homePageContent.testimonialsSectionTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homePageContent.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-my-sage/40 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-md">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={72}
                      height={72}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p className="italic text-gray-700 mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <h3 className="text-xl font-semibold text-my-lavender">
                  {testimonial.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
