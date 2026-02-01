import React from 'react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profile.png'

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
    <section className="min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="w-full md:w-1/2"
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center md:justify-end relative"
          >
            <div className="relative group">
              {/* Abstract blur background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-purple-600 rounded-full opacity-20 group-hover:opacity-30 blur-2xl transition duration-500"></div>

              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border border-border/50 transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10"></div>
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-bg-card border border-border p-4 rounded-xl shadow-lg z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium">Open to work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
