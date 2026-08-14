import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Blockchain Based Employee Reward Management System',
    stack: 'MERN Stack · Solidity · Ethereum · Web3.js',
    year: '2025',
    points: [
      'Automated performance evaluation with smart contract-based reward allocation.',
      'Tamper-proof on-chain reward tracking that removes manual HR effort and bias.',
      'Admin and employee dashboards for tasks, redemption, and record verification.',
    ],
  },
  {
    title: 'Deepfake Detection System — Media Authenticator',
    stack: 'TensorFlow · OpenCV · Python · CNN · Computer Vision',
    year: '2025',
    points: [
      'CNN-based detection reaching 92% accuracy across 10,000+ images.',
      'Preprocessing pipeline handling 500+ images/min for real-time verification.',
      'Reduced false detections by 15% across multiple datasets.',
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Selected Builds</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          PROJECTS
        </motion.h2>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600">{project.year}</p>
                </div>
                <div className="lg:col-span-7">
                  <ul className="space-y-3 mb-6">
                    {project.points.map((point) => (
                      <li key={point} className="text-gray-400 leading-relaxed text-sm lg:text-base pl-5 relative">
                        <span className="absolute left-0 top-[0.6em] w-2 h-px bg-gray-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.split(' · ').map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
