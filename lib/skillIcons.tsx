// Skill icons mapping

export const getSkillIcon = (skill: string): string => {
  const iconMap: { [key: string]: string } = {
    // Programming Languages
    'Python': '🐍',
    'Java': '☕',
    'JavaScript': '📜',
    'TypeScript': '📘',
    'SQL': '🗄️',
    
    // Frameworks
    'Node.js': '🟢',
    'Express.js': '⚡',
    'FastAPI': '🚀',
    'Django': '🎸',
    'Spring Boot': '🌱',
    'REST APIs': '🔌',
    'WebSockets': '💬',
    
    // Databases
    'PostgreSQL': '🐘',
    'MySQL': '🗃️',
    'MongoDB': '🍃',
    'Redis': '🔴',
    'Oracle': '🗄️',
    'S3': '☁️',
    
    // Cloud & DevOps
    'AWS': '☁️',
    'GCP': '☁️',
    'CI/CD Pipelines': '🔄',
    'Supabase': '⚡',
    
    // Tools & Practices
    'OAuth 2.0': '🔐',
    'JWT': '🎫',
    'GitHub': '🐙',
    'Test-Driven Development': '✅',
    'Agile': '🏃',
    'SDLC': '🔄',
    'Postman': '📮',
    'Jira': '🎯',
  }
  
  return iconMap[skill] || '💻'
}

