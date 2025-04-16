import Image from "next/image"
import { Tooltip } from "@/components/ui/tooltip"

type AllergenIconsProps = {
  allergens?: string[]
  size?: number
  className?: string
}

/**
 * Component to display allergen icons with tooltips
 */
const AllergenIcons = ({
  allergens,
  size = 25,
  className = "",
}: AllergenIconsProps) => {
  if (!allergens || allergens.length === 0) return null

  const allergenMap: Record<string, { icon: string; label: string }> = {
    Gluten: { icon: "/icons/gluten.png", label: "Contains Gluten" },
    Dairy: { icon: "/icons/dairy.png", label: "Contains Dairy" },
    Eggs: { icon: "/icons/egg.png", label: "Contains Eggs" },
    Peanuts: { icon: "/icons/peanut.png", label: "Contains Peanuts" },
    Nuts: { icon: "/icons/peanut.png", label: "Contains Nuts" },
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {allergens.map((allergen) => {
        const allergenInfo = allergenMap[allergen]
        if (!allergenInfo) return null

        return (
          <Tooltip key={allergen} content={allergenInfo.label}>
            <div className="relative cursor-help">
              <Image
                src={allergenInfo.icon}
                alt={allergen}
                width={size}
                height={size}
                className="rounded-full bg-my-lavender/40 p-0.5 shadow-sm shadow-black/50"
              />
            </div>
          </Tooltip>
        )
      })}
    </div>
  )
}

export default AllergenIcons
