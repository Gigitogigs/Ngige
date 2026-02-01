import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend & APIs',
      skills: ['Python', 'Django', 'REST APIs', 'Java']
    },
    {
      title: 'Mobile',
      skills: ['Flutter', 'Dart']
    },
    {
      title: 'Data & Tools',
      skills: ['Data Science', 'SQL', 'Git', 'Linux']
    }
  ]

  return (
    <section id="skills" className="py-24 bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-accent text-sm uppercase tracking-wider">Technical Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">What I work with</h2>
          <p className="text-text-secondary text-lg max-w-3xl">
            Focused expertise in backend development, with supporting skills in 
            full-stack and data science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-bg-card border border-border rounded-xl p-6 hover:border-text-secondary transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-bg-secondary border border-border rounded-md text-sm text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
