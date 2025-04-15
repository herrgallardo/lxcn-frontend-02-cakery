import Image from "next/image"
import { aboutPageContent } from "@/data/shop-data"

const About = () => {
  return (
    <div className="bg-my-peach min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero section */}
        <div className="mb-12">
          <div className="w-full max-w-5xl mx-auto">
            <Image
              src={aboutPageContent.mainImage}
              alt="I Knead Cake Bakery"
              width={1200}
              height={600}
              className="rounded-lg object-contain w-full h-auto shadow-lg drop-shadow-black"
              priority
            />
          </div>
        </div>

        {/* Story section */}
        <section className="mb-16 bg-my-sage/40 rounded-lg shadow-lg drop-shadow-black p-8">
          <h2 className="text-3xl text-center font-semibold mb-6 text-my-lavender text-shadow-sm text-shadow-black/50 pb-2">
            {aboutPageContent.story.heading}
          </h2>
          <div className="prose max-w-none">
            {aboutPageContent.story.content
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index} className="mb-4 text-lg text-black">
                  {paragraph}
                </p>
              ))}
          </div>
        </section>

        {/* Team section */}
        <section className="mb-16">
          <h2 className="text-3xl text-center font-semibold mb-8 text-shadow-sm shadow-lg drop-shadow-black text-shadow-black/50 text-my-lavender bg-my-sage/40 rounded-lg p-4">
            {aboutPageContent.team.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutPageContent.team.members.map((member) => (
              <div
                key={member.name}
                className="bg-my-sage/40 rounded-lg shadow-lg drop-shadow-black overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="relative pt-[125%] mt-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-my-sage/40">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-black/80 mb-3">{member.role}</p>
                  <p className="text-sm text-black">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values section */}
        <section className="mb-8">
          <h2 className="text-3xl text-center font-semibold mb-8 text-shadow-sm shadow-lg drop-shadow-black text-shadow-black/50 text-my-lavender bg-my-sage/40 rounded-lg p-4">
            {aboutPageContent.values.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutPageContent.values.items.map((value) => (
              <div
                key={value.title}
                className="bg-my-sage/40 p-6  rounded-lg shadow-sm shadow-black/50 hover:shadow-xl transition-shadow duration-300 border border-my-sage"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-36 h-36 flex items-center justify-center">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={144}
                      height={144}
                      className="rounded-full shadow-md shadow-black/50"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-my-lavender text-shadow-sm text-shadow-black/50">
                  {value.title}
                </h3>
                <p className="text-center text-black">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
