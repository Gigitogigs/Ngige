import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const contactLinks = [
    {
      icon: '📧',
      label: 'Email',
      href: 'mailto:ngigemwaniki2004@gmail.com'
    },
    {
      icon: '💻',
      label: 'GitHub',
      href: 'https://github.com/Gigitogigs'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ngige-mwaniki-b08287278'
    },
    {
      icon: '📄',
      label: 'Download CV',
      href: '/Ngige_Mwaniki_CV.pdf',
      download: true
    }
  ]

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="mb-12">
          <span className="text-accent text-sm uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Let's connect</h2>
          <p className="text-text-secondary text-lg">
            I'm open to opportunities, collaborations, or just talking about
            interesting technical problems.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') || link.download ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              download={link.download}
              className="flex items-center gap-2 px-6 py-3 bg-bg-card border border-border rounded-lg text-text-secondary hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-xl">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
