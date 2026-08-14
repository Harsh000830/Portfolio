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
    title: 'RAG Knowledge Assistant',
    period: '2025',
    tag: 'Generative AI',
    description:
      'A retrieval-augmented chat assistant over private document sets: chunking and embedding pipeline, vector search for grounded context, and an LLM answer layer with inline source citations to keep responses verifiable.',
    stack: ['Python', 'LangChain', 'Vector DB', 'LLMs', 'FastAPI'],
  },
  {
    title: 'Document Intelligence & OCR Pipeline',
    period: '2025',
    tag: 'Computer Vision',
    description:
      'An end-to-end pipeline that turns scanned documents into structured data — layout detection, PaddleOCR text extraction, field parsing and validation, exposed through an API with a review dashboard for corrections.',
    stack: ['PaddleOCR', 'OpenCV', 'Python', 'FastAPI', 'React'],
  },
  {
    title: 'Personal Portfolio Platform',
    period: '2026',
    tag: 'Full Stack',
    description:
      'This site — a motion-driven React portfolio with a custom design system, fluid spacing scale, inertial smooth scrolling and fully responsive editorial layouts built from scratch.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
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
          Builds spanning computer vision, generative AI, Web3 and full-stack
          engineering — each one shipped, demoed or judged.
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
