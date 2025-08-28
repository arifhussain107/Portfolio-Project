import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Calculator, Droplets, Brain, TrendingUp, FileText, Globe } from 'lucide-react'

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'News API Application',
      description: 'A Python application that fetches and displays latest news from various sources using news APIs. Features include category filtering, search functionality, and clean data presentation.',
      icon: Globe,
      color: 'from-blue-500 to-blue-600',
      technologies: ['Python', 'API Integration', 'JSON', 'Requests'],
      status: 'Completed',
      github: '#',
      live: '#'
    },
    {
      title: 'Millionaire Game',
      description: 'An interactive quiz game inspired by "Who Wants to Be a Millionaire" with multiple difficulty levels, score tracking, and lifeline features.',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      technologies: ['Python', 'Tkinter', 'Game Logic', 'File I/O'],
      status: 'Completed',
      github: '#',
      live: '#'
    },
    {
      title: 'PDF Merger Tool',
      description: 'A utility application that combines multiple PDF files into a single document with options for page ordering and metadata preservation.',
      icon: FileText,
      color: 'from-green-500 to-green-600',
      technologies: ['Python', 'PyPDF2', 'Tkinter', 'File Management'],
      status: 'Completed',
      github: '#',
      live: '#'
    },
    {
      title: 'Advanced Calculator',
      description: 'A feature-rich calculator with scientific functions, history tracking, and a user-friendly interface for both basic and complex calculations.',
      icon: Calculator,
      color: 'from-orange-500 to-orange-600',
      technologies: ['Python', 'Tkinter', 'Math Functions', 'GUI Design'],
      status: 'Completed',
      github: '#',
      live: '#'
    },
    {
      title: 'Drink Water Reminder',
      description: 'A desktop application that reminds users to stay hydrated throughout the day with customizable intervals and notification settings.',
      icon: Droplets,
      color: 'from-cyan-500 to-cyan-600',
      technologies: ['Python', 'Tkinter', 'Notifications', 'Scheduling'],
      status: 'Completed',
      github: '#',
      live: '#'
    },
    {
      title: 'AI-Powered Reel Generator',
      description: 'An innovative application that uses AI algorithms to generate creative content ideas and suggestions for social media reels.',
      icon: Brain,
      color: 'from-pink-500 to-pink-600',
      technologies: ['Python', 'AI/ML', 'Content Generation', 'Creative Tools'],
      status: 'Completed',
      github: '#',
      live: '#'
    },
    {
      title: 'Stock Prediction App',
      description: 'A data analysis tool that analyzes historical stock data and provides predictions using statistical models and trend analysis.',
      icon: TrendingUp,
      color: 'from-emerald-500 to-emerald-600',
      technologies: ['Python', 'Data Analysis', 'Pandas', 'Matplotlib'],
      status: 'Completed',
      github: '#',
      live: '#'
    }
  ]

  const getStatusColor = (status: string) => {
    return status === 'Completed' 
      ? 'bg-green-100 text-green-700' 
      : 'bg-yellow-100 text-yellow-700'
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my work, demonstrating problem-solving skills and technical expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-6 group hover:shadow-xl transition-all duration-300"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon size={24} />
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors duration-300 text-sm font-medium"
                >
                  <Github size={16} />
                  Code
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.live}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors duration-300 text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-accent-blue/30 to-accent-mint/30 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              More Projects Coming Soon!
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              I'm constantly working on new projects and improving existing ones. 
              Check back regularly to see my latest work and developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <Github size={20} />
                View All Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <Code size={20} />
                Request Custom Project
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
