import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      type: 'Backend API',
      title: 'Campus Hub',
      description: 'Brief description of what the project does, the problem it solves, and your approach. Focus on the technical decisions and what you learned.',
      tech: ['Python', 'Django', 'REST API', 'PostgreSQL'],
      github: 'https://github.com/Gigitogigs/Campus-Hub', // Put your GitHub repo link here
      live: '#' // Put your live demo link here (if any)
    },
    {
      type: 'Full-Stack App',
      title: 'Haven-Community Platform',
      description: 'Haven is a community platform designed to foster meaningful connections through shared interests, real-world activities, and local group management.',
      tech: ['Flutter', 'Dart', 'Firebase'],
      github: 'https://github.com/Gigitogigs/Haven/tree/flutter-UI'
    },
    {
      type: 'Data Science',
      title: 'F1 Predictor',
      description: 'Describe the data problem you tackled, your methodology, and the insights you discovered. Show your analytical thinking.',
      tech: ['Python', 'Pandas', 'Machine Learning'],
      github: 'https://github.com/Gigitogigs/F1_predictor'
    }
  ]

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-accent text-sm uppercase tracking-wider">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Projects</h2>
          <p className="text-text-secondary text-lg max-w-3xl">
            Quality over quantity—each project demonstrates attention to fundamentals
            and real problem-solving.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-bg-card border border-border rounded-xl p-8 md:p-10 hover:border-text-secondary transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <span className="text-accent text-sm uppercase tracking-wider">
                    {project.type}
                  </span>
                  <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                </div>
                <div className="flex gap-4 mt-4 md:mt-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors text-sm"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors text-sm"
                    >
                      Live →
                    </a>
                  )}
                </div>
              </div>

              <p className="text-text-secondary leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-bg-secondary border border-border rounded-md text-sm text-text-secondary"
                  >
                    {tech}
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

export default Projects
