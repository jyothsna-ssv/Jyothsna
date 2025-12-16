'use client'

import { useState } from 'react'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'

export default function Work() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Experience
  const experiences = [
    {
      title: 'Executive Project Manager and Full-Stack Developer',
      company: 'Community Dreams Foundation',
      location: 'New Jersey, USA',
      period: 'Jul 2025 - Present',
      image: '/pics/CDF.jpg',
      description: 'As Executive Project Manager and Full-Stack Developer at Community Dreams Foundation, I led the end-to-end development of a commercial cleaning service platform, overseeing delivery and execution. I built the system from scratch with React, TypeScript, and Supabase, designing backend workflows, database models, and secure role-based access to support bookings, payments, and staff operations across customer, admin, and staff portals. I worked with stakeholders to translate business requirements into technical solutions, using serverless automation to reduce manual coordination and streamline recurring payments.',
    },
    {
      title: 'Software Engineer',
      company: 'WebMD',
      location: 'Navi Mumbai, India',
      period: 'Apr 2023 - Jul 2023',
      image: '/pics/WebMD.jpg',
      description: 'At WebMD, I worked on internal productivity tools designed to improve task tracking and operational visibility for engineering teams. I built a real-time worklog system using Python, Vue.js, and PostgreSQL, enabling teams to record and monitor daily progress with live status updates and asynchronous data fetching. I also containerized and deployed the application using Docker, improving environment consistency and reducing deployment issues across development and production.',
    },
    {
      title: 'Software Engineer Intern',
      company: 'MinitzGo',
      location: 'Hyderabad, India',
      period: 'Aug 2022 - Mar 2023',
      image: '/pics/minitzgo.jpg',
      description: 'As a Software Engineer Intern at MinitzGo, I contributed to a real-time e-commerce platform by building responsive, high-performance user interfaces with React. I implemented features such as search filtering, infinite scrolling with API pagination, and real-time cart updates using WebSockets, while strengthening authentication flows with robust validation and error handling. I also improved performance and mobile usability by adding PWA features, including offline caching and SEO optimizations.',
    },
  ]

  // Education
  const education = [
    {
      institution: 'New Jersey Institute of Technology',
      location: 'New Jersey, USA',
      degree: 'Master of Science (M.S.), Computer Science',
      period: 'Jan 2024 - Mar 2025',
      image: '/pics/njit.jpg',
      description: 'At NJIT, I explored both the technical and professional sides of computer science through a mix of theory, hands-on learning, and campus involvement. Beyond coursework, I engaged with coding clubs, strategic tech events, and the Career Development Services, which helped shape my approach to problem-solving and career growth. Courses like Data Structures & Algorithms and AI stood out for their practical depth and challenge, making learning engaging while strengthening my thinking about efficiency, logic, and real-world applications.',
    },
    {
      institution: 'Hyderabad Institute of Technology and Management',
      location: 'Hyderabad, India',
      affiliation: 'Under Affiliation of Jawaharlal Nehru Technological University Hyderabad',
      degree: 'Bachelor of Technology (B.Tech.), Computer Science',
      period: 'June 2018 - Aug 2022',
      image: '/pics/hitam.jpg',
      description: 'At HITAM, I complemented my computer science studies with active leadership and community involvement. I served as a Class Representative and Student HOD (CSE), working closely with students and faculty to improve communication, learning quality, and academic coordination. I also coordinated the Coding Club and helped organize hackathons gaining hands-on experience in mentoring peers, evaluating ideas, and executing initiatives from planning to delivery.',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="space-y-16">
        {/* Page Header */}
        <div className="text-center">
          <SectionHeader 
            title="Work"
            subtitle="My professional journey, experience, and education."
          />
        </div>

        {/* Section 1: Experience */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">Experience</h2>
          </div>
          
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg">
                <div className="flex items-start gap-4">
                  {exp.image && (
                    <button
                      onClick={() => setSelectedImage(exp.image || null)}
                      className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gray-50 rounded border border-gray-200 hover:opacity-80 transition-opacity cursor-pointer"
                    >
                      <img
                        src={exp.image}
                        alt={exp.company}
                        className="max-w-full max-h-full object-contain"
                      />
                    </button>
                  )}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-base font-medium text-gray-900">{exp.title}</h3>
                    <p className="text-sm text-gray-600">{exp.company}</p>
                    <p className="text-xs text-gray-500">{exp.location}</p>
                    <p className="text-xs text-gray-500">{exp.period}</p>
                    <p className="text-sm text-gray-700 leading-relaxed mt-2">{exp.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 2: Education */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">Education</h2>
          </div>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg">
                <div className="flex items-start gap-4">
                  {edu.image && (
                    <button
                      onClick={() => setSelectedImage(edu.image || null)}
                      className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gray-50 rounded border border-gray-200 hover:opacity-80 transition-opacity cursor-pointer"
                    >
                      <img
                        src={edu.image}
                        alt={edu.institution}
                        className="max-w-full max-h-full object-contain"
                      />
                    </button>
                  )}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-base font-medium text-gray-900">{edu.institution}</h3>
                    <p className="text-sm text-gray-600">{edu.location}</p>
                    {edu.affiliation && (
                      <p className="text-xs text-gray-500 italic">{edu.affiliation}</p>
                    )}
                    <p className="text-sm text-gray-700">{edu.degree}</p>
                    {edu.period && (
                      <p className="text-xs text-gray-500">{edu.period}</p>
                    )}
                    {edu.description && (
                      <p className="text-sm text-gray-700 leading-relaxed mt-2">{edu.description}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {selectedImage.endsWith('.pdf') ? (
              <iframe
                src={selectedImage}
                className="w-full h-[90vh] rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <div className="flex items-center justify-center w-full h-[90vh] bg-white rounded-lg p-4" onClick={(e) => e.stopPropagation()}>
                <img
                  src={selectedImage}
                  alt="Company logo or document"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

