import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  download?: boolean
}

const CTAButton = ({ href, children, variant = 'primary', download = false }: CTAButtonProps) => {
  const baseStyles = 'inline-block px-8 py-3 text-sm font-medium text-center transition-colors'
  const primaryStyles = 'bg-gray-900 text-white hover:bg-gray-800'
  const secondaryStyles = 'border border-gray-900 text-gray-900 hover:bg-gray-50'

  const styles = variant === 'primary' ? primaryStyles : secondaryStyles

  if (download) {
    return (
      <a
        href={href}
        download
        className={`${baseStyles} ${styles}`}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={`${baseStyles} ${styles}`}>
      {children}
    </Link>
  )
}

export default CTAButton

