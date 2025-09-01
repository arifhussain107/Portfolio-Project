import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Zap, Award } from 'lucide-react'

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    const resumeUrl = '/Arif Hussain.pdf'
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Arif_Hussain_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const certificates = [
    { label: 'Udemy', path: '/udemy-certificate.pdf', filename: 'Arif_Hussain_Udemy_Certificate.pdf' }
  ]

  const [selectedCertificateIndex, setSelectedCertificateIndex] = useState(0)

  const downloadCertificate = () => {
    const selected = certificates[selectedCertificateIndex]
    const link = document.createElement('a')
    link.href = selected.path
    link.download = selected.filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="section-padding pt-28 pb-10 bg-gradient-to-br from-accent-blue/30 via-white to-accent-mint/30">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-lg border-4 border-white"
          >
            <img
              src="/e7163ed6-83db-4d5e-9838-f9d0e276e770.jfif"
              alt="Arif Hussain - Software Developer"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            Arif Hussain
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-600 mb-6"
          >
            Aspiring Software Developer | Python Enthusiast
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about coding, problem-solving, and building smart applications.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="btn-primary flex items-center gap-2"
            >
              <Code size={20} />
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
              className="btn-secondary flex items-center gap-2"
            >
              <Zap size={20} />
              Download CV
            </motion.button>

            {/* Certificate selector */}
            <div className="flex items-center gap-2">
              <label htmlFor="certificateSelect" className="text-sm text-gray-700">Certificate</label>
              <select
                id="certificateSelect"
                className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={selectedCertificateIndex}
                onChange={(e) => setSelectedCertificateIndex(parseInt(e.target.value))}
              >
                {certificates.map((c, idx) => (
                  <option key={c.label} value={idx}>{c.label}</option>
                ))}
              </select>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCertificate}
              className="btn-secondary flex items-center gap-2"
            >
              <Award size={20} />
              Download Certificate
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
