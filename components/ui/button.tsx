import * as React from "react"

export function Button({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 ${className}`}
    >
      {children}
    </button>
  )
}