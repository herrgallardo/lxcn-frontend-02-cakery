// Types
export interface NavLink {
  name: string
  path: string
  isDropdown?: boolean
  dropdownLinks?: NavLink[]
}

export interface SocialMediaLink {
  platform: string
  url: string
  icon: string // Path to icon in public/icons
}

export interface ContactInfo {
  address: string
  city: string
  country: string
  email: string
  phone: string
  hours: {
    days: string
    hours: string
  }[]
  delivery: {
    areas: string[]
    pickupLocation: string
    orderLeadTime: string
  }
}

export interface Product {
  id: string
  name: string
  description: string
  price: number // In SEK
  image: string // Path to image in public/images
  category: "cupcake" | "wedding-cake"
  featured?: boolean
  allergens?: string[]
}

export interface StoreInfo {
  name: string
  tagline: string
  description: string
  logo: string // Path to logo in public/images
  logo2: string
  founded: number
}

export interface FooterSection {
  title: string
  links: {
    name: string
    path: string
  }[]
}

export interface HomePageContent {
  hero: {
    heading: string
    subheading: string
    ctaText: string
    ctaLink: string
    image: string
  }
  features: {
    title: string
    description: string
    icon: string
  }[]
  testimonials: {
    name: string
    quote: string
    image: string
  }[]
}

export interface AboutPageContent {
  mainImage: string
  story: {
    heading: string
    content: string
  }
  team: {
    name: string
    role: string
    bio: string
    image: string
  }[]
  values: {
    title: string
    description: string
    icon: string
  }[]
}

export interface NewsletterContent {
  heading: string
  description: string
  buttonText: string
  privacyText: string
}

// Navigation Data
export const navLinks: NavLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Products",
    path: "/products",
    isDropdown: true,
    dropdownLinks: [
      {
        name: "Cupcakes",
        path: "/products/cupcakes",
      },
      {
        name: "Wedding Cakes",
        path: "/products/wedding-cakes",
      },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
  },
]

// Social Media Links
export const socialMediaLinks: SocialMediaLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com",
    icon: "/icons/instagram.png",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com",
    icon: "/icons/facebook.png",
  },
]

// Store Information
export const storeInfo: StoreInfo = {
  name: "I Knead Cake",
  tagline: "Artisanal cupcakes and wedding cakes baked with love",
  description:
    "At I Knead Cake, we craft delicious cupcakes and stunning wedding cakes using only the finest ingredients. Each creation is made with passion and attention to detail to make your celebration truly special.",
  logo: "/images/store/logo.png",
  logo2: "/images/store/logo2.png",
  founded: 2018,
}

// Contact Information
export const contactInfo: ContactInfo = {
  address: "Klostergatan 14",
  city: "Lund",
  country: "Sweden",
  email: "hello@ikneadcake.se",
  phone: "+46 70 123 4567",
  hours: [
    {
      days: "Monday - Saturday",
      hours: "9:00 - 18:00",
    },
    {
      days: "Sunday",
      hours: "Closed",
    },
  ],
  delivery: {
    areas: ["Lund", "Malmö"],
    pickupLocation:
      "Kyrkogatan 17, Lund. We will send you the exact location via message after your order is confirmed.",
    orderLeadTime:
      "Orders must be placed 2 days before for greater security, processing and availability.",
  },
}

// Product Data
export const products: Product[] = [
  // Cupcakes
  {
    id: "cupcake-1",
    name: "Classic Vanilla",
    description:
      "Fluffy vanilla cupcake topped with vanilla buttercream frosting and rainbow sprinkles.",
    price: 35,
    image: "/images/products/cupcakes/classic-vanilla.png",
    category: "cupcake",
    featured: true,
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "cupcake-2",
    name: "Chocolate Dream",
    description:
      "Rich chocolate cupcake with chocolate ganache frosting and chocolate shavings.",
    price: 39,
    image: "/images/products/cupcakes/chocolate-dream.png",
    category: "cupcake",
    featured: true,
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "cupcake-3",
    name: "Red Velvet",
    description:
      "Velvety red cake topped with cream cheese frosting and a hint of cocoa.",
    price: 42,
    image: "/images/products/cupcakes/red-velvet.png",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "cupcake-4",
    name: "Lemon Delight",
    description:
      "Tangy lemon cupcake with lemon curd filling and lemon buttercream frosting.",
    price: 40,
    image: "/images/products/cupcakes/lemon-delight.png",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "cupcake-5",
    name: "Strawberry Bliss",
    description:
      "Strawberry-infused cupcake with fresh strawberry buttercream frosting.",
    price: 42,
    image: "/images/products/cupcakes/strawberry-bliss.png",
    category: "cupcake",
    featured: true,
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "cupcake-6",
    name: "Salted Caramel",
    description:
      "Vanilla cupcake filled with salted caramel and topped with caramel buttercream.",
    price: 45,
    image: "/images/products/cupcakes/salted-caramel.png",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "cupcake-7",
    name: "Blueberry Muffin",
    description:
      "Blueberry-studded cupcake with crumble topping and blueberry glaze.",
    price: 38,
    image: "/images/products/cupcakes/blueberry-muffin.png",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "cupcake-8",
    name: "Coffee Crunch",
    description:
      "Coffee-infused cupcake with espresso buttercream and chocolate-covered espresso beans.",
    price: 44,
    image: "/images/products/cupcakes/coffee-crunch.png",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "cupcake-9",
    name: "Pistachio Rose",
    description:
      "Pistachio cupcake with rose-flavored buttercream and crushed pistachios.",
    price: 48,
    image: "/images/products/cupcakes/pistachio-rose.png",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy", "Nuts"],
  },
  {
    id: "cupcake-10",
    name: "Cinnamon Swirl",
    description:
      "Cinnamon-swirled cupcake with cinnamon cream cheese frosting and a mini cinnamon roll on top.",
    price: 43,
    image: "/images/products/cupcakes/cinnamon-swirl.jpg",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "cupcake-11",
    name: "Coconut Paradise",
    description:
      "Coconut cupcake with coconut cream frosting and toasted coconut flakes.",
    price: 42,
    image: "/images/products/cupcakes/coconut-paradise.png",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "cupcake-12",
    name: "Matcha Green Tea",
    description:
      "Matcha-infused cupcake with matcha buttercream and white chocolate drizzle.",
    price: 46,
    image: "/images/products/cupcakes/matcha-green-tea.png",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "cupcake-13",
    name: "Peanut Butter Cup",
    description:
      "Chocolate cupcake with peanut butter filling and peanut butter frosting topped with a mini peanut butter cup.",
    price: 45,
    image: "/images/products/cupcakes/peanut-butter-cup.png",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy", "Peanuts"],
  },
  {
    id: "cupcake-14",
    name: "Black Forest",
    description:
      "Chocolate cupcake with cherry filling and whipped cream frosting topped with a cherry and chocolate shavings.",
    price: 47,
    image: "/images/products/cupcakes/black-forest.png",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "cupcake-15",
    name: "Lavender Honey",
    description:
      "Lavender-infused cupcake with honey buttercream and dried lavender buds.",
    price: 45,
    image: "/images/products/cupcakes/lavender-honey.png",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "cupcake-16",
    name: "Carrot Cake",
    description:
      "Spiced carrot cupcake with cream cheese frosting and candied carrot decoration.",
    price: 41,
    image: "/images/products/cupcakes/carrot-cake.png",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy", "Nuts"],
  },
  {
    id: "cupcake-17",
    name: "Mint Chocolate Chip",
    description:
      "Chocolate cupcake with mint chocolate chip buttercream and chocolate ganache drizzle.",
    price: 44,
    image: "/images/products/cupcakes/mint-chocolate-chip.png",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "cupcake-18",
    name: "Raspberry Cheesecake",
    description:
      "Cheesecake-flavored cupcake with raspberry filling and graham cracker crumble.",
    price: 46,
    image: "/images/products/cupcakes/raspberry-cheesecake.png",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "cupcake-19",
    name: "Almond Amaretto",
    description:
      "Almond-flavored cupcake with amaretto buttercream and sliced almonds.",
    price: 43,
    image: "/images/products/cupcakes/almond-amaretto.png",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy", "Nuts"],
  },
  {
    id: "cupcake-20",
    name: "Birthday Cake",
    description:
      "Funfetti cupcake with vanilla buttercream and colorful sprinkles.",
    price: 40,
    image: "/images/products/cupcakes/birthday-cake.png",
    category: "cupcake",
    featured: true,
    allergens: ["Gluten", "Eggs", "Dairy"],
  },

  // Wedding Cakes
  {
    id: "wedding-cake-1",
    name: "Classic Elegance",
    description:
      "Three-tier vanilla cake with smooth buttercream and fresh flower decorations. Perfect for traditional weddings.",
    price: 3500,
    image: "/images/products/wedding-cakes/classic-elegance.png",
    category: "wedding-cake",
    featured: true,
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "wedding-cake-2",
    name: "Chocolate Symphony",
    description:
      "Four-tier chocolate cake with ganache, chocolate buttercream, and chocolate decorations for chocolate lovers.",
    price: 4200,
    image: "/images/products/wedding-cakes/chocolate-symphony.png",
    category: "wedding-cake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "wedding-cake-3",
    name: "Rustic Charm",
    description:
      "Three-tier semi-naked cake with berry compote filling and fresh berries. Perfect for rustic or barn weddings.",
    price: 3800,
    image: "/images/products/wedding-cakes/rustic-charm.png",
    category: "wedding-cake",
    featured: true,
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "wedding-cake-4",
    name: "Floral Fantasy",
    description:
      "Four-tier vanilla cake with lavender buttercream and hand-piped floral designs in pastel colors.",
    price: 4500,
    image: "/images/products/wedding-cakes/floral-fantasy.png",
    category: "wedding-cake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "wedding-cake-5",
    name: "Marble Magic",
    description:
      "Three-tier marble cake with cream cheese frosting and gold leaf accents for a modern look.",
    price: 4100,
    image: "/images/products/wedding-cakes/marble-magic.png",
    category: "wedding-cake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "wedding-cake-6",
    name: "Scandinavian Simplicity",
    description:
      "Two-tier minimalist cake with white buttercream and simple greenery, embodying Nordic design principles.",
    price: 3200,
    image: "/images/products/wedding-cakes/scandinavian-simplicity.png",
    category: "wedding-cake",
    featured: true,
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "wedding-cake-7",
    name: "Royal Blue",
    description:
      "Four-tier cake with cascading blue ombre effect and silver decorative elements for a regal celebration.",
    price: 4800,
    image: "/images/products/wedding-cakes/royal-blue.png",
    category: "wedding-cake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "wedding-cake-8",
    name: "Geometric Glamour",
    description:
      "Three-tier fondant cake with geometric patterns and gold accents for modern weddings.",
    price: 4300,
    image: "/images/products/wedding-cakes/geometric-glamour.png",
    category: "wedding-cake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "wedding-cake-9",
    name: "Garden Romance",
    description:
      "Four-tier cake with textured buttercream and cascading fresh garden flowers for an outdoor wedding.",
    price: 4600,
    image: "/images/products/wedding-cakes/garden-romance.png",
    category: "wedding-cake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  {
    id: "wedding-cake-10",
    name: "Winter Wonderland",
    description:
      "Three-tier white cake with snowflake details and silver accents, perfect for winter weddings.",
    price: 4000,
    image: "/images/products/wedding-cakes/winter-wonderland.png",
    category: "wedding-cake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
]

// Footer Content
export const footerSections: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Products", path: "/products" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Cupcakes", path: "/products/cupcakes" },
      { name: "Wedding Cakes", path: "/products/wedding-cakes" },
      { name: "Custom Orders", path: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
    ],
  },
]

// Footer Content
export const footerContent = {
  copyright: `© ${new Date().getFullYear()} I Knead Cake. All rights reserved.`,
  sections: footerSections,
}

// Home Page Content
export const homePageContent: HomePageContent = {
  hero: {
    heading: "Delicious Treats for Every Occasion",
    subheading: "Handcrafted cupcakes and wedding cakes made in Lund, Sweden",
    ctaText: "View Our Products",
    ctaLink: "/products",
    image: "/images/hero.jpg",
  },
  features: [
    {
      title: "Fresh Ingredients",
      description:
        "We use only the freshest, locally-sourced ingredients in all of our baked goods.",
      icon: "/icons/ingredients.svg",
    },
    {
      title: "Custom Orders",
      description:
        "Need something special? We can create custom designs for any celebration.",
      icon: "/icons/custom.svg",
    },
    {
      title: "Local Delivery",
      description: "We offer delivery throughout Lund and surrounding areas.",
      icon: "/icons/delivery.svg",
    },
  ],
  testimonials: [
    {
      name: "Lisa Andersson",
      quote:
        "The wedding cake was absolutely perfect! Everyone at our reception was asking where we got it from.",
      image: "/images/testimonials/lisa.jpg",
    },
    {
      name: "Erik Johansson",
      quote:
        "The cupcakes were not only beautiful but delicious! I order them for every office party now.",
      image: "/images/testimonials/erik.jpg",
    },
    {
      name: "Maria Nilsson",
      quote:
        "I appreciate the attention to detail and the friendly service. Best bakery in Lund!",
      image: "/images/testimonials/maria.jpg",
    },
  ],
}

// About Page Content
export const aboutPageContent: AboutPageContent = {
  mainImage: "/images/about/bakery.jpg",
  story: {
    heading: "Our Story",
    content:
      "I Knead Cake was founded in 2018 by pastry chef Anna Lindström with the vision of creating beautiful, delicious treats that bring joy to life's special moments. What started as a small home-based business quickly grew into one of Lund's most beloved bakeries.\n\nWe believe that every cupcake and cake should not only look stunning but taste amazing too. That's why we use only the finest ingredients and bake everything fresh to order.\n\nAt I Knead Cake, we're passionate about being part of your celebrations, from birthdays and weddings to everyday moments worth savoring.",
  },
  team: [
    {
      name: "Anna Lindström",
      role: "Founder & Head Baker",
      bio: "Anna trained at the Swedish Culinary Institute before opening I Knead Cake. She specializes in wedding cakes and loves creating custom designs.",
      image: "/images/about/anna-lindstrom.png",
    },
    {
      name: "Oliver Bergman",
      role: "Pastry Chef",
      bio: "Oliver brings creativity and precision to our cupcake creations. He's known for his innovative flavor combinations and beautiful decorations.",
      image: "/images/about/oliver-bergman.png",
    },
    {
      name: "Emma Svensson",
      role: "Customer Relations",
      bio: "Emma ensures every customer has a wonderful experience. She handles custom orders and helps plan for special events.",
      image: "/images/about/emma-svensson.png",
    },
  ],
  values: [
    {
      title: "Quality",
      description:
        "We never compromise on the quality of our ingredients or our finished products.",
      icon: "/icons/quality.svg",
    },
    {
      title: "Creativity",
      description:
        "We love bringing creative designs and flavor combinations to life.",
      icon: "/icons/creativity.svg",
    },
    {
      title: "Community",
      description:
        "We're proud to be part of the Lund community and support local suppliers.",
      icon: "/icons/community.svg",
    },
  ],
}

// Newsletter Subscription
export const newsletterContent: NewsletterContent = {
  heading: "Join Our Sweet Community",
  description:
    "Subscribe to our newsletter for seasonal recipes, special offers, and event announcements.",
  buttonText: "Subscribe",
  privacyText: "We respect your privacy. Unsubscribe at any time.",
}

// Export all data as default for convenience
const shopData = {
  navLinks,
  socialMediaLinks,
  storeInfo,
  contactInfo,
  products,
  footerContent,
  footerSections,
  homePageContent,
  aboutPageContent,
  newsletterContent,
}

export default shopData
