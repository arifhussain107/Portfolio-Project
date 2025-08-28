import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'

const Experience: React.FC = () => {
  const experience = [
    {
      title: 'Python Programming Internship',
      company: 'Udemy (Online)',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Comprehensive Python programming internship covering fundamentals to intermediate concepts',
      responsibilities: [
        'Mastered Python basics to intermediate level programming',
        'Developed practical projects to reinforce learning',
        'Enhanced problem-solving skills through coding challenges',
        'Gained hands-on experience with real-world applications',
        'Learned best practices and coding standards'
      ],
      skills: ['Python', 'Problem Solving', 'Project Development', 'Coding Best Practices']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-accent-blue/20">
      <div className="container-custom">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey in the professional world of software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8 mb-8"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-mint text-green-700">
                    <CheckCircle size={14} className="mr-1" />
                    Active
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Responsibilities & Achievements
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                      <span className="text-gray-600">{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Skills Developed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Future Goals */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg border border-primary-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Looking Forward
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                I'm actively seeking opportunities to apply my Python skills in real-world projects, 
                contribute to innovative solutions, and continue growing as a software developer. 
                I'm excited to collaborate with teams and take on new challenges.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
