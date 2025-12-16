import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'CrowdShield',
      description: 'A real-time content moderation platform using Redis queues, ML scoring, and WebSockets to classify and filter unsafe content.',
      techStack: ['Spring Boot', 'Redis', 'PostgreSQL', 'WebSockets', 'OpenAI'],
      github: 'https://github.com/jyothsna-ssv/CrowdShield'
    },
    {
      id: 2,
      title: 'CineTrail',
      description: 'A movie discovery and review system using TMDB data, user profiles, and personalized recommendations across multiple genres.',
      techStack: ['React', 'Python', 'MySQL', 'WebSockets'],
      github: 'https://github.com/jyothsna-ssv'
    },
    {
      id: 3,
      title: 'ChopURL',
      description: 'A high-speed URL shortener built with FastAPI and Redis, offering custom short codes, analytics, and TTL-based link expiry.',
      techStack: ['Python', 'FastAPI', 'Redis', 'Vue.js'],
      github: 'https://github.com/jyothsna-ssv/ChopURL'
    },
    {
      id: 4,
      title: 'FlowStory',
      description: '(FlowStory is a minimal and personal productivity app that transforms your daily schedule into a story.)',
      techStack: ['Coming soon……'],
      github: 'https://github.com/jyothsna-ssv/flowstory'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="space-y-10">
        <div className="text-center">
          <SectionHeader
            title="My Projects"
            subtitle="A collection of projects I've been working on. From web applications to backend systems, here's what keeps me busy."
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing {projects.length} projects</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="h-full flex flex-col relative border-[#EFECEE] hover:bg-white hover:shadow-lg">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 text-gray-900 hover:opacity-70 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <div className="flex-grow space-y-3">
                <h3 className="text-base font-medium text-gray-900 pr-8">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>

                {project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-medium text-gray-700 bg-gray-100 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-end">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 font-medium flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
