import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-2 bg-bg-card border border-border rounded-full text-sm text-text-secondary mb-8">
              Junior Software Developer
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight"
          >
            Backend-focused.<br />
            Python-first.
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-text-secondary mb-6"
          >
            Building clean APIs and reliable systems
          </motion.p>

          <motion.p 
            variants={fadeInUp}
            className="text-lg text-text-secondary mb-12 max-w-2xl leading-relaxed"
          >
            I'm a developer who values fundamentals, clean code, and real problem-solving. 
            Currently focused on backend development with Python and Django, while exploring 
            the full spectrum of software engineering.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-7 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover transform hover:-translate-y-1 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3 bg-transparent border border-border text-text-primary rounded-lg font-medium hover:border-text-secondary transition-colors duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
