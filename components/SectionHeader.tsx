interface SectionHeaderProps {
  title: string
  subtitle?: string
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <section className="space-y-2">
      <h1 className="text-2xl md:text-3xl font-medium text-gray-900">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </section>
  )
}

export default SectionHeader

