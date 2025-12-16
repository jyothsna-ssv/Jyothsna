'use client'

import { useState, useEffect } from 'react'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'

export default function Perspectives() {
  // Photography images (Clicks)
  const allImages = Array.from({ length: 17 }, (_, i) => ({
    id: i + 1,
    src: `/pics/g${i + 1}.JPG`,
    alt: `Photo ${i + 1}`,
  }))

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  // Public Speaking & Leadership
  const speakingItems = [
    {
      event: 'Career Assistant',
      platform: 'Career Development Service (NJIT)',
      topic: 'Led career workshops and 1:1 advising, supporting 200+ students in resume building, interviews, and job search readiness.',
      year: '',
      image: '/pics/CDS.JPG',
    },
    {
      event: 'Toastmasters',
      platform: 'HITAM Toastmasters Club',
      topic: 'I practiced speaking. I showed up. I grew.',
      year: '',
    },
  ]

  // Awards
  const awards = [
    {
      name: 'National Women Empowerment Award',
      organization: 'AICTE LILAVATI',
      year: '2021',
      description: 'Honored nationally for leading digital-literacy initiatives empowering 200+ women.',
      image: '/pics/AICTE certificate.pdf',
    },
    {
      name: 'Academic Excellence & Leadership Distinction',
      organization: 'JNTU Hyderabad',
      year: '2021',
      description: 'Honored for academic achievement and leadership in fostering innovation and student collaboration.',
      image: '/pics/best-std-award.jpg',
    },
    {
      name: 'Transparency in Administration',
      organization: 'Toastmasters International',
      year: '',
      description: 'Recognized by Toastmasters International with the "Transparency in Administration" award for compliance, mentoring, and operational clarity.',
      image: '/pics/Transparency in Administation.jpg',
    },
  ]

  // Hobbies
  const hobbies = [
    {
      name: 'Clicking pictures',
      description: 'Capturing moments and exploring different perspectives through the lens.',
    },
    {
      name: 'Karate',
      description: 'Practicing martial arts for discipline, focus, and personal growth.',
      images: ['/pics/karate-nidan.pdf', '/pics/karate-shodan.pdf'],
    },
    {
      name: 'Reading',
      description: 'Knowing others perspectives, knowing recent updates.',
    },
  ]

  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedKarateImages, setSelectedKarateImages] = useState<string[] | null>(null)

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="space-y-16">
        {/* Page Header */}
        <div className="text-center">
          <SectionHeader 
            title="Perspectives"
            subtitle="Moments, thoughts, and work shaped by how I see and share the world."
          />
        </div>

        {/* Section 1: Public Speaking & Leadership */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">Public Speaking & Leadership</h2>
            <p className="text-sm text-gray-600">
              I enjoy sharing ideas through talks, panels, and reflections from my journey in tech and learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {speakingItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-medium text-gray-900">{item.event}</h3>
                      <p className="text-sm text-gray-600">{item.platform}</p>
                    </div>
                    {item.year && <span className="text-xs text-gray-500">{item.year}</span>}
                  </div>
                  <p className="text-sm text-gray-700">{item.topic}</p>
                  {item.image && (
                    <button
                      onClick={() => setSelectedImage(item.image || null)}
                      className="text-xs text-gray-600 hover:text-gray-900 inline-flex items-center gap-1"
                    >
                      View →
                    </button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 2: Awards */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">Awards</h2>
            <p className="text-sm text-gray-600">
              Recognized for leadership, initiative, and community impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg">
                <div className="space-y-2">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">{award.name}</h3>
                    <p className="text-sm text-gray-600">{award.organization}</p>
                  </div>
                  <p className="text-sm text-gray-700">{award.description}</p>
                  {award.image && (
                    <button
                      onClick={() => setSelectedImage(award.image || null)}
                      className="text-xs text-gray-600 hover:text-gray-900 inline-flex items-center gap-1"
                    >
                      View →
                    </button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 3: Hobbies */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">Hobbies</h2>
            <p className="text-sm text-gray-600">
              Activities and interests that shape my perspective and keep me inspired.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {hobbies.map((hobby, index) => (
              <Card key={index} className="hover:shadow-lg">
                <div className="space-y-2">
                  <h3 className="text-base font-medium text-gray-900">{hobby.name}</h3>
                  <p className="text-sm text-gray-700">{hobby.description}</p>
                  {hobby.images && (
                    <button
                      onClick={() => {
                        setSelectedKarateImages(hobby.images || null)
                      }}
                      className="text-xs text-gray-600 hover:text-gray-900 inline-flex items-center gap-1"
                    >
                      View →
                    </button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 4: Photography (Clicks) */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">Clicks</h2>
            <p className="text-sm text-gray-600">
              Photography helps me slow down and notice the subtle beauty in everyday life.
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-4xl">
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Image Container */}
              <div className="flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={allImages[currentImageIndex].src}
                  alt={allImages[currentImageIndex].alt}
                  className="max-w-full max-h-[70vh] w-auto h-auto object-contain"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
                aria-label="Next image"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white text-xs px-3 py-1 rounded-full">
                {currentImageIndex + 1} / {allImages.length}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Image/PDF Modal */}
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
              <img
                src={selectedImage}
                alt="Certificate or document"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        </div>
      )}

      {/* Karate Images Modal */}
      {selectedKarateImages && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={() => setSelectedKarateImages(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full space-y-4 overflow-y-auto">
            <button
              onClick={() => setSelectedKarateImages(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {selectedKarateImages.map((image, index) => (
              <div key={index} className="bg-white rounded-lg p-2" onClick={(e) => e.stopPropagation()}>
                {image.endsWith('.pdf') ? (
                  <iframe
                    src={image}
                    className="w-full h-[80vh] rounded-lg"
                  />
                ) : (
                  <img
                    src={image}
                    alt={`Karate certificate ${index + 1}`}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

