import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'

export default function Skills() {
  const getCategoryIcon = (category: string) => {
    const iconStyle = "w-6 h-6"
    const iconColor = "#000000" // Black color

    const iconMap: { [key: string]: JSX.Element } = {
      'Frontend Development': (
        <svg className={iconStyle} fill="none" stroke={iconColor} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      'Backend Development': (
        <svg className={iconStyle} fill={iconColor} viewBox="0 0 24 24">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          <circle cx="6" cy="7" r="1" fill={iconColor} />
          <circle cx="6" cy="12" r="1" fill={iconColor} />
          <circle cx="6" cy="17" r="1" fill={iconColor} />
        </svg>
      ),
      'Mobile Development': (
        <svg className={iconStyle} fill={iconColor} viewBox="0 0 24 24">
          <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zm-1-3h-8v-2h8v2z" />
        </svg>
      ),
      'Cloud & DevOps': (
        <svg className={iconStyle} fill={iconColor} viewBox="0 0 24 24">
          <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
        </svg>
      ),
      'Programming Languages': (
        <svg className={iconStyle} fill={iconColor} viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      ),
      'Tools & Technologies': (
        <svg className={iconStyle} fill={iconColor} viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      ),
    }
    return iconMap[category] || <div className={iconStyle}></div>
  }

  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Python', 'Java', 'Express.js', 'FastAPI', 'Django', 'Spring Boot', 'REST APIs', 'WebSockets'],
    },
    {
      category: 'Mobile Development',
      skills: ['React Native', 'Android Studio'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'GCP', 'CI/CD Pipelines', 'Supabase', 'Git'],
    },
    {
      category: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      category: 'Tools & Technologies',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle', 'S3', 'OAuth 2.0', 'JWT', 'GitHub', 'Postman', 'Jira'],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="space-y-12">
        <div className="text-center">
          <SectionHeader
            title="Skills & Technologies"
            subtitle="A comprehensive overview of the technologies, languages, and tools I work with to build reliable software systems."
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.category} className="space-y-4 hover:shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#EFECEE' }}>
                  {getCategoryIcon(category.category)}
                </div>
                <h2 className="text-lg font-medium text-gray-900">
                  {category.category}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Always Learning</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technology evolves rapidly, and I&apos;m committed to continuous learning and exploring
              new frameworks, tools, and best practices to build better systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
