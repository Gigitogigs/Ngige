import React from 'react'
import { motion } from 'framer-motion'
import { FaRuler, FaBullseye, FaSearch } from 'react-icons/fa'

const HowIWork = () => {
  const principles = [
    {
      icon: <FaRuler />,
      title: 'Fundamentals First',
      description: 'I believe in understanding core concepts deeply rather than jumping to frameworks. This helps me make better technical decisions and write more maintainable code.'
    },
    {
      icon: <FaBullseye />,
      title: 'Thoughtful Problem-Solving',
      description: 'Before writing code, I think through the problem, consider edge cases, and plan my approach. Clean solutions often come from clear thinking.'
    },
    {
      icon: <FaSearch />,
      title: 'Continuous Learning',
      description: "I'm genuinely curious about how things work under the hood. Whether it's reading documentation, exploring source code, or building side projects, I'm always learning."
    }
  ]

  return (
    <section id="work" className="py-24 bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-accent text-sm uppercase tracking-wider">My Approach</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">How I work</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-bg-card border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-[0_0_50px_-12px_rgba(74,158,255,0.2)] hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 text-accent">{principle.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowIWork
