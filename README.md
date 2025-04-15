# I Knead Cake Bakery Website

## Course Context

- **Program**: Arbetsmarknadsutbildning - IT Påbyggnad/Programmerare
- **Course**: Front-End Development
- **Project Type**: Individual Project (Project-2: Cakery Web Site - Mandatory)

## Overview

A responsive bakery website built with Next.js 15 and Tailwind CSS. This project showcases an artisanal bakery shop called "I Knead Cake" that specializes in cupcakes and wedding cakes. The website features a clean, modern design with a soft color palette that highlights the bakery's products while providing essential business information to potential customers.

## Learning Objectives

This project demonstrates key frontend development skills:

- HTML semantic structure for improved accessibility and SEO
- Modern CSS styling techniques using Tailwind CSS
- Responsive design that works on mobile, tablet, and desktop
- React component architecture with Next.js framework
- TypeScript for type-safe code
- UI/UX principles for a clean and professional design
- Advanced UI components with shadcn/ui
- API routes for handling contact form submissions
- Optimized image loading with Next.js Image component
- Deployment to Vercel

## Project Structure

The bakery website is built using Next.js App Router with a component-based architecture:

```typescript
├── app/                 # Next.js app directory
│   ├── about/           # About page
│   ├── api/             # API routes
│   │   └── contact/     # Contact form API endpoint
│   ├── contact/         # Contact page
│   ├── products/        # Products pages
│   │   ├── cupcakes/    # Cupcakes product page
│   │   └── wedding-cakes/ # Wedding cakes product page
│   ├── globals.css      # Global CSS styles with Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component (Home)
├── components/          # React components
│   ├── ui/              # UI components (shadcn)
│   ├── footer.tsx       # Footer component
│   ├── header.tsx       # Header component
│   └── navbar.tsx       # Navigation component
├── data/                # Data layer
│   └── shop-data.ts     # Shop information (products, contact info, etc.)
├── lib/                 # Utility functions
│   └── utils.ts         # Helper functions
├── public/              # Static assets
│   ├── icons/           # UI icons
│   └── images/          # Product and other images
├── .gitignore           # Git ignore file
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies
├── postcss.config.mjs   # PostCSS configuration for Tailwind
├── README.md            # Project documentation
└── tsconfig.json        # TypeScript configuration
```

## Features

### Layout & Design

- Clean, professional bakery website with responsive design
- Soft color palette with pastel colors evoking bakery aesthetics
- Interactive elements with hover effects and smooth transitions
- Accessibility considerations for all users
- Mobile-first approach with responsive breakpoints

### Home Page

- Engaging hero section with call-to-action
- Featured products showcase
- Bakery benefits section
- Customer testimonials
- Visual hierarchy highlighting key information

### Products Pages

- Categorized products (Cupcakes and Wedding Cakes)
- Image carousel for featured items
- Detailed product information including prices and descriptions
- Allergen information for each product
- Responsive grid layout for all products

### About Page

- Bakery story and background
- Team member information with photos
- Company values and mission statement
- Visual elements reinforcing brand identity

### Contact Page

- Working contact form with form validation
- Store information (hours, location, contact details)
- Newsletter subscription option
- Delivery information
- Interactive UI elements for improved user experience

### Additional Features

- TypeScript type definitions for data structure
- Optimized asset loading with Next.js Image component
- Custom color themes for consistent styling
- Functional API endpoint for form submissions via Resend
- Animated UI components

## Technical Implementation

The website is built using:

- **Next.js 15**: Modern React framework with App Router for efficient page rendering
- **TypeScript**: For type-safe code and better developer experience
- **Tailwind CSS**: For utility-first styling with responsive design
- **shadcn/ui**: Component library for consistent UI elements
- **React Hooks**: For component state and effects
- **Next/Image**: For optimized image loading and rendering
- **Embla Carousel**: For image sliders and carousels
- **Resend**: For email functionality in the contact form
- **Lucide React**: For icon components

## Data Structure

The bakery website data is structured as TypeScript interfaces:

```typescript
interface StoreInfo {
  name: string
  tagline: string
  description: string
  logo: string
  logo2: string
  founded: number
}

interface ContactInfo {
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

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "cupcake" | "wedding-cake"
  featured?: boolean
  allergens?: string[]
}

interface HomePageContent {
  hero: {
    heading: string
    subheading: string
    ctaText: string
    ctaLink: string
    image: string
  }
  // Additional content structure
}

// Additional interfaces for other page content
```

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/i-knead-cake.git

# Navigate to the project directory
cd i-knead-cake

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Making Changes

### Updating Shop Data

To update shop information, edit the `data/shop-data.ts` file:

```typescript
// Example: Update store information
export const storeInfo: StoreInfo = {
  name: "I Knead Cake",
  tagline: "Artisanal cupcakes and wedding cakes baked with love",
  // ...other fields
}
```

### Adding New Products

To add new products to the bakery's offerings:

1. Add the product image to the appropriate folder in `public/images/products/`
2. Update the products array in `data/shop-data.ts`:

```typescript
export const products: Product[] = [
  // Existing products
  {
    id: "cupcake-21",
    name: "New Cupcake Flavor",
    description: "Description of the new cupcake flavor...",
    price: 45,
    image: "/images/products/cupcakes/new-flavor.png",
    category: "cupcake",
    allergens: ["Gluten", "Eggs", "Dairy"],
  },
  // ...other products
]
```

### Styling Changes

The project uses Tailwind CSS for styling. To customize the appearance:

1. Edit the theme colors in `app/globals.css`
2. Modify Tailwind classes directly in the component files
3. Add custom CSS where needed for specific components

## Live Demo

The bakery website is deployed and live on Vercel:

[https://lxcn-frontend-02-cakery.vercel.app/](https://lxcn-frontend-02-cakery.vercel.app/)

## Deployment

This project is deployed using Vercel, the platform from the creators of Next.js:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Alternatively, you can set up continuous deployment by connecting your GitHub repository to Vercel for automatic deployments on each push.

## Project Requirements Met

This project fulfills the requirements specified in the project description:

- Responsive design that works on phones and computers
- Four required pages: Home, About, Products, Contact
- Products divided into Cupcakes and Wedding Cakes categories
- At least 8 cupcakes and 8 wedding cakes with images, titles, and prices
- Consistent header and footer across all pages
- Social media links in the footer
- Contact information and email link in the footer

## Future Enhancements

- Add e-commerce functionality for online ordering
- Implement user accounts for order history and preferences
- Create a blog section for recipes and bakery news
- Add a gallery section with customer celebration photos
- Implement light/dark mode toggle
- Add animations for section transitions
- Implement internationalization for multiple languages
- Add an events booking system for cake tastings

## Acknowledgments

- Course instructors and fellow students for feedback and support
- Next.js and Tailwind CSS documentation and community
- shadcn/ui for component library
- Design inspiration from professional bakery websites
- Claude AI and ChatGPT for generating mock data and assisting with development
- AI tools for generating product and team member images
