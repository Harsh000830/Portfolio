import { motion } from 'framer-motion'
import workspaceImg from '@/assets/workspace.jpg'
import abstractImg from '@/assets/abstract.jpg'
import researchImg from '@/assets/research.jpg'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About Harshawardhan</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src={workspaceImg}
              alt="Harshawardhan at his workstation"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              FROM ALGORITHMS TO MODELS
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              It started with algorithms. Harshawardhan studied computer science and
              quickly gravitated toward machine learning — drawn less to writing
              software that follows rules, and more to building systems that learn
              them. That curiosity grew into a career engineering intelligent systems
              that hold up under real-world load.
            </p>
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div
          {...fadeInUp}
          className="mb-24 lg:mb-32"
        >
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            "USEFUL, HONEST,<br />
            <span className="text-white underline underline-offset-8">AND ACTUALLY SHIPPED.</span><br />
            THE ONLY KIND OF AI<br />
            WORTH BUILDING."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            ENGINEERING<br />
            PHILOSOPHY
          </p>
        </motion.div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex items-center lg:text-right"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              After early work in applied ML, Harshawardhan moved into building and
              operating ML platforms at scale — the unglamorous engineering that turns
              a notebook into a reliable, monitored, cost-aware service. Along the way
              he has partnered with product, data, and design teams to ship features used
              by real people.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src={abstractImg}
              alt="Abstract neural network visualization"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              BUILDING ML PLATFORMS AT SCALE
            </p>
          </motion.div>
        </div>

        {/* Third Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src={researchImg}
              alt="Research and evaluation tooling"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              LLMS · AGENTS · EVALUATION
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Today Harshawardhan focuses on large language models and AI agents —
              retrieval systems, fine-tuning, evaluation, and the orchestration that
              makes them dependable. He works independently with select teams, and
              writes and speaks about what he learns along the way.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
