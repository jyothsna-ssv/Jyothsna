const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">
            © {currentYear}
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/jyothsna-ssv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/karuparthi-jyothsna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:karuparthi.jyothsna@gmail.com"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

