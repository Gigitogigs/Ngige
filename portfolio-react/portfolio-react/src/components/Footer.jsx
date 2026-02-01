import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} Ngige Mwaniki. Built with care.
        </p>
      </div>
    </footer>
  )
}

export default Footer
