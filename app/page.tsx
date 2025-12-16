import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section - Full Viewport */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto w-full text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Jyothsna Karuparthi
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Software Engineer @ Community Dreams Foundation | Blogs | Perspectives
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <div className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2 border" style={{ backgroundColor: '#EFECEE', borderColor: '#EFECEE' }}>
              <span className="text-base">&lt;/&gt;</span>
              <span>Engineering</span>
            </div>
            <div className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2 border" style={{ backgroundColor: '#EFECEE', borderColor: '#EFECEE' }}>
              <span className="text-lg font-bold">✨</span>
              <span>Creating</span>
            </div>
            <Link href="/clicks" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2 border" style={{ backgroundColor: '#EFECEE', borderColor: '#EFECEE' }}>
              <span className="text-base">📷</span>
              <span>Clicks</span>
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/projects"
              className="inline-block px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors rounded-lg"
            >
              Explore My Work →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section - Below the fold */}
      <section className="max-w-6xl mx-auto px-6 pt-8 pb-16 md:pt-12 md:pb-24 grid md:grid-cols-[2fr_1fr] gap-6 md:gap-8 items-start">
        <div className="space-y-3">
          <h2 className="text-lg md:text-xl font-medium text-gray-900">
            About
          </h2>
          <div className="space-y-2.5">
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-justify">
              I&apos;m a software engineer who enjoys working where quiet focus meets meaningful collaboration.
              With a pragmatic mindset, I turn ideas into action by leading with clarity, communicating thoughtfully,
              or building things that work. Coding is where logic meets creativity for me, and I enjoy tackling
              diverse problems to find thoughtful, real-world solutions. Public Speaking and exploring new things help me
              connect ideas with people and sharpen how I observe everyday details. Curiosity shapes how I learn,
              build, and grow.
            </p>
          </div>
          <div className="pt-1.5">
            <Link
              href="/contact"
              className="inline-block px-4 py-1.5 border border-gray-900 text-gray-900 text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors rounded"
            >
              Let&apos;s Connect →
            </Link>
          </div>
        </div>

        <div className="rounded-2xl p-6 md:p-8 border" style={{ backgroundColor: '#EFECEE', borderColor: '#EFECEE' }}>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E5E1E0' }}>
              <span className="text-3xl md:text-4xl">👩🏻‍💻</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Always Building</h3>
              <p className="text-xs md:text-sm text-gray-600">Creating solutions that matter</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
