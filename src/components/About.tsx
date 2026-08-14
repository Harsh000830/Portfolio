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
          <span className="text-sm text-primary tracking-widest uppercase">About Harshawardhan</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="order-2 lg:order-1">
            <img
              src={workspaceImg}
              alt="Harshawardhan Kapadnis at his workstation"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full h-auto rounded-2xl border border-border transition-transform duration-700 hover:scale-[1.02]"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              APPLIED RESEARCH → PRODUCTION SYSTEMS
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I'm an AI/ML and full stack developer studying Artificial Intelligence &
              Data Science at K.K. Wagh Institute, Nashik. My interest has always been
              in the part most people skip — taking a model that works in a notebook and
              turning it into something a team can actually run.
            </p>
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div {...fadeInUp} className="mb-24 lg:mb-32">
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            "ROBUST, SCALABLE,<br />
            <span className="text-white underline underline-offset-8">AND ACTUALLY DEPLOYED.</span><br />
            NOT JUST A GOOD<br />
            BENCHMARK SCORE."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            ENGINEERING<br />
            PHILOSOPHY
          </p>
        </motion.div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="flex items-center lg:text-right">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              At Combat Solutions I built P2X Maker — a system that reads industrial
              P&ID engineering drawings with YOLOv8 segmentation and PaddleOCR, maps the
              connectivity in Neo4j, and exports clean DCS diagrams. It replaces weeks of
              manual digitization. Before that, a driver safety system combining blink
              detection, emotion recognition, and heart rate monitoring with real-time
              Twilio alerts.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src={abstractImg}
              alt="Computer vision segmentation visualization"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full h-auto rounded-2xl border border-border transition-transform duration-700 hover:scale-[1.02]"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              COMPUTER VISION AT INDUSTRIAL SCALE
            </p>
          </motion.div>
        </div>

        {/* Third Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src={researchImg}
              alt="Deep learning research and evaluation"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full h-auto rounded-2xl border border-border transition-transform duration-700 hover:scale-[1.02]"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              VISION · NLP · RAG · BLOCKCHAIN
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Outside of internships I build: a CNN deepfake detector at 92% accuracy
              over 10,000+ images, and a blockchain-based employee reward platform on
              Ethereum with smart contract payouts. A National Finalist at Smart India
              Hackathon 2024 and third place at an IoT competition — I like problems
              that end with something working, not a slide deck.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
