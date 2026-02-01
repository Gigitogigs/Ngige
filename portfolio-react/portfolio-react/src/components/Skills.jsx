import React from 'react'
import { motion } from 'framer-motion'
import { FaPython, FaJava, FaGitAlt, FaLinux, FaDatabase } from 'react-icons/fa'
import { SiFlutter, SiDart } from 'react-icons/si'

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

  const scrollingSkills = [
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    { name: 'Dart', icon: SiDart, color: '#0175C2' },
    { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Linux', icon: FaLinux, color: '#FCC624' },
  ]

  return (
    <section id="skills" className="py-24 bg-bg-secondary/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="mb-16">
          <span className="text-accent text-sm uppercase tracking-wider">Technical Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">What I work with</h2>
          <p className="text-text-secondary text-lg max-w-3xl">
            Focused expertise in backend development, with supporting skills in
            full-stack and data science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

      {/* Infinite Scroller */}
      <div className="relative w-full py-10 bg-bg-card/50 border-y border-border/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-secondary via-transparent to-bg-secondary z-10 pointer-events-none"></div>
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-16 items-center px-16"
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {[...scrollingSkills, ...scrollingSkills, ...scrollingSkills, ...scrollingSkills].map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-3 min-w-[100px] group cursor-default">
                <div
                  className="text-6xl transition-transform duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  style={{ color: skill.color }}
                >
                  <skill.icon />
                </div>
                <span className="text-text-secondary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
