"use client"

import React, { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"

type TooltipProps = {
  children: React.ReactNode
  content: string
}

export const Tooltip = ({ children, content }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setCoords({
        top: rect.top + window.scrollY,
        left: rect.left + rect.width / 2 + window.scrollX,
      })
    }
  }, [isVisible])

  return (
    <>
      <div
        ref={ref}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        className="inline-block"
      >
        {children}
      </div>

      {isVisible &&
        createPortal(
          <div
            className="absolute z-50 px-2 py-1 text-sm font-medium text-white bg-my-lavender rounded whitespace-nowrap text-shadow-sm text-shadow-black/50"
            style={{
              position: "absolute",
              top: coords.top - 32,
              left: coords.left,
              transform: "translateX(-50%)",
            }}
          >
            {content}
            <div className="absolute left-1/2 top-full -translate-x-1/2 h-2 w-2 bg-gray-900 rotate-45"></div>
          </div>,
          document.body
        )}
    </>
  )
}
