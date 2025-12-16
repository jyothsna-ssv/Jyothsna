'use client'

import { useState, useEffect } from 'react'
import SectionHeader from '@/components/SectionHeader'

const allImages = Array.from({ length: 17 }, (_, i) => ({
  id: i + 1,
  src: `/pics/g${i + 1}.JPG`,
  alt: `Gallery Image ${i + 1}`,
  caption: ''
}))

export default function Clicks() {

  const [images, setImages] = useState(allImages)

  useEffect(() => {
    // Randomize images on mount
    const shuffled = [...allImages].sort(() => Math.random() - 0.5)
    setImages(shuffled)
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="space-y-10">
        <SectionHeader
          title="Clicks"
          subtitle="A visual collection of moments, projects, and inspirations."
        />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-1">
          {images.map((image) => (
            <div key={image.id} className="mb-1 break-inside-avoid">
              <div className="overflow-hidden bg-gray-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover block"
                />
              </div>
              {image.caption && (
                <p className="text-sm text-gray-600 mt-1 px-1">{image.caption}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
