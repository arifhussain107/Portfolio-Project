import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const About: React.FC = () => {
  const education = [
    {
      degree: 'BCA (Bachelor of Computer Applications)',
      institution: 'GGSESTC, Bokaro Steel City',
      period: '2023–2026',
      status: 'Ongoing',
      location: 'Bokaro Steel City, Jharkhand'
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'Sohan Lal Arya Inter College',
      period: '2023',
      status: 'Completed',
      location: 'Bokaro Steel City, Jharkhand'
    },
    {
      degree: 'Secondary (10th)',
      institution: 'BRL DAV Public School',
      period: '2021',
      status: 'Completed',
      location: 'Bokaro Steel City, Jharkhand'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know me better and understand my journey in the world of technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm Arif Hussain, a passionate BCA student with a deep love for programming and problem-solving. 
                My journey in technology began with curiosity and has evolved into a dedicated pursuit of software development.
              </p>
              <p>
                I specialize in Python programming and have developed a strong foundation in creating practical applications, 
                from automation scripts to interactive tools. My approach combines technical skills with creative problem-solving 
                to build solutions that make a difference.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with fellow developers. I believe in continuous learning and staying updated with 
                the latest industry trends.
              </p>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Education Journey
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-primary-300 to-primary-100"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <GraduationCap size={20} className="text-primary-600" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {edu.degree}
                        </h4>
                        {edu.status === 'Ongoing' && (
                          <span className="px-2 py-1 text-xs font-medium bg-accent-mint text-green-700 rounded-full">
                            Ongoing
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700 font-medium mb-1">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
