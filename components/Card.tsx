import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div 
      className={`bg-white border border-gray-200 rounded-lg p-6 transition-all duration-200 cursor-pointer ${className}`}
    >
      {children}
    </div>
  )
}

export default Card

