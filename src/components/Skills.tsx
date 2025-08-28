import React from 'react'
import { motion } from 'framer-motion'
import { Code, Users, Lightbulb, Zap, Database, Globe, Target, Settings, Palette } from 'lucide-react'

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'Python Scripting & Automation', icon: Code, level: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'API Integration', icon: Database, level: 75, color: 'from-green-500 to-green-600' },
    { name: 'Small App Development', icon: Zap, level: 80, color: 'from-purple-500 to-purple-600' },
    { name: 'Beginner Web Development', icon: Globe, level: 70, color: 'from-orange-500 to-orange-600' },
    { name: 'Code Optimization', icon: Settings, level: 75, color: 'from-red-500 to-red-600' },
    { name: 'Technical Consultation', icon: Palette, level: 80, color: 'from-indigo-500 to-indigo-600' }
  ]

  const softSkills = [
    { name: 'Problem-solving', description: 'Analytical thinking and creative solutions', icon: Lightbulb },
    { name: 'Teamwork', description: 'Collaborative approach and communication', icon: Users },
    { name: 'Adaptability', description: 'Quick learner and flexible mindset', icon: Zap },
    { name: 'Communication', description: 'Clear and effective expression', icon: Users },
    { name: 'Time Management', description: 'Efficient project organization', icon: Target },
    { name: 'Continuous Learning', description: 'Always eager to learn new technologies', icon: Lightbulb }
  ]

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A combination of technical proficiency and essential soft skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <Code className="text-primary-600" size={28} />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-white`}>
                        <skill.icon size={20} />
                      </div>
                      <span className="font-medium text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <Users className="text-primary-600" size={28} />
              Soft Skills
            </h3>
            <div className="grid gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="card p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <skill.icon size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {skill.name}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-accent-blue/30 to-accent-mint/30 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              I'm constantly expanding my skill set and exploring new technologies. 
              Currently focusing on web development frameworks, database management, 
              and advanced Python concepts to become a more versatile developer.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Node.js', 'MongoDB', 'Git', 'Docker', 'AWS'].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
