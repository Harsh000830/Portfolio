import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Blockchain Based Employee Reward Management System',
    period: 'Jan 2025 — Apr 2025',
    tag: 'Web3',
    description:
      'A decentralized reward platform on Ethereum with Solidity smart contracts for transparent, tamper-proof performance payouts. Full stack in React, Node.js and Web3.js, MetaMask wallet transactions, and an admin dashboard tracking performance metrics and reward distribution history.',
    stack: ['Solidity', 'Ethereum', 'React.js', 'Node.js', 'Web3.js', 'MetaMask'],
  },
  {
    title: 'Deepfake Detection System',
    period: 'Aug 2024 — Nov 2024',
    tag: 'Deep Learning',
    description:
      'A CNN classifier reaching 92% accuracy across 10,000+ real and manipulated images. Transfer learning with pre-trained architectures plus augmentation for generalization, deployed behind a Flask interface for real-time upload and analysis.',
    stack: ['Python', 'TensorFlow', 'CNN', 'Transfer Learning', 'OpenCV', 'Flask'],
  },
  {
    title: 'P2X Maker — P&ID to DCS Converter',
    period: 'Dec 2025 — Present',
    tag: 'Computer Vision',
    description:
      'Automated conversion of industrial P&ID drawings into DCS diagrams: YOLOv8 segmentation with patch-based tiling for 100+ symbols, three-method line detection, PaddleOCR text extraction, Neo4j connectivity graph, and a React + FastAPI platform with an embedded Draw.io editor.',
    stack: ['YOLOv8', 'FastAPI', 'PaddleOCR', 'Neo4j', 'React'],
  },
  {
    title: 'Safe Driver Recognition System',
    period: '2025',
    tag: 'Real-time AI',
    description:
      'Driver drowsiness detection through blink tracking and face landmarks, extended with emotion recognition and heart-rate monitoring to flag potential cardiac events. Twilio API dispatches emergency alerts in real time.',
    stack: ['Python', 'OpenCV', 'Deep Learning', 'Twilio API'],
  },
  {
    title: 'Cryo-Preservation Smart Container — SIH 2024',
    period: '2024',
    tag: 'Hardware + IoT',
    description:
      'A vacuum-insulated, pressure-regulated container for livestock semen preservation that cut nitrogen loss by 40%, built for the Smart India Hackathon and taken to the national finals.',
    stack: ['IoT', 'Sensors', 'Thermal Design', 'Prototyping'],
  },
  {
    title: 'Automated Solar Tracking System',
    period: '2023',
    tag: 'IoT',
    description:
      'An LDR-sensor driven dual-axis solar tracker that follows the sun through the day to maximise panel yield. Placed third at the institute IoT project competition.',
    stack: ['Arduino', 'LDR Sensors', 'Embedded C', 'Automation'],
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
        <motion.div {...fadeInUp} className="mb-8">
          <span className="text-sm text-primary tracking-widest uppercase">Selected Builds</span>
          <div className="w-6 h-px bg-primary mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-6"
        >
          PROJECTS
        </motion.h2>
        <motion.p {...fadeInUp} className="text-muted-foreground max-w-xl mb-16 lg:mb-20">
          Six builds spanning computer vision, generative AI, Web3 and hardware —
          each one shipped, demoed or judged.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: (index % 2) * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card p-6 lg:p-8 transition-all duration-500 hover:border-primary/60 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <span className="text-xs uppercase tracking-widest text-primary border border-primary/40 rounded-full px-3 py-1">
                  {project.tag}
                </span>
                <span className="font-display text-3xl text-muted-foreground/40 leading-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-xl lg:text-2xl font-light text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground/70 mb-4">{project.period}</p>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs text-muted-foreground border border-border rounded-full transition-colors group-hover:border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
