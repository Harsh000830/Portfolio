import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Blockchain Based Employee Reward Management System',
    period: 'Jan 2025 — Apr 2025',
    description:
      'A decentralized reward platform on Ethereum with Solidity smart contracts for transparent, tamper-proof performance payouts. Built the full stack with React, Node.js and Web3.js, integrated MetaMask for secure wallet transactions, and designed an admin dashboard for tracking employee performance metrics and reward distribution history.',
    stack: ['Solidity', 'Ethereum', 'React.js', 'Node.js', 'Web3.js', 'MetaMask'],
  },
  {
    title: 'Deepfake Detection System',
    period: 'Aug 2024 — Nov 2024',
    description:
      'A CNN-based classifier reaching 92% accuracy across a dataset of 10,000+ real and manipulated images. Applied transfer learning with pre-trained architectures and image augmentation to improve generalization, then deployed it behind a Flask web interface for real-time upload and analysis.',
    stack: ['Python', 'TensorFlow', 'CNN', 'Transfer Learning', 'OpenCV', 'Flask'],
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
                  <p className="text-sm text-gray-600">{project.period}</p>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
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
