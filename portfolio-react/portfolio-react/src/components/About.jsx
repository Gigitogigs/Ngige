import React from 'react'
import { motion } from 'framer-motion'
import { FaBullseye, FaBrain, FaStar, FaSearch } from 'react-icons/fa'

const About = () => {
  const highlights = [
    {
      icon: <FaBullseye />,
      title: 'Idea-Driven',
      description: "I don't just code tasks—I think in systems and possibilities"
    },
    {
      icon: <FaBrain />,
      title: 'Fundamentals-First',
      description: 'Understanding why things work, not just making them work'
    },
    {
      icon: <FaStar />,
      title: 'Quality-Focused',
      description: 'Clean, diligent work that senior engineers appreciate'
    },
    {
      icon: <FaSearch />,
      title: 'Genuinely Curious',
      description: 'Continuous learner who goes deep into topics'
    }
  ]

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-accent text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Building with purpose</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <p className="text-text-secondary text-lg leading-relaxed">
              My journey into software development was not a lifelong plan. It started with a curiosity about how things work and a desire to build things. I found that coding was a way to bring ideas to life, and I've been hooked ever since.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              What drives me is the process of building something that works well—not
              just making it work, but understanding why it works. I believe in writing
              clean, maintainable code and taking the time to do things right.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Currently focused on backend development with Python and Django, I also
              have experience with Java, Flutter, and data science projects. I'm always
              learning, always curious, and committed to growing as a developer.
            </p>
          </div>

          <div className="bg-bg-card border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-[0_0_50px_-12px_rgba(74,158,255,0.2)] transition-all duration-500 group">
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-2">
                    <span className="mr-2 text-accent text-xl">{highlight.icon}</span>
                    {highlight.title}
                  </h3>
                  <p className="text-text-secondary">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
