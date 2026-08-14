import { motion } from 'framer-motion'
import campusImg from '@/assets/edu-campus.jpg'
import labImg from '@/assets/edu-lab.jpg'
import libraryImg from '@/assets/edu-library.jpg'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        {/* Education Items */}
        <div className="space-y-16 lg:space-y-24">
          {/* B.Tech */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src={campusImg}
                alt="University campus"
                loading="lazy"
                width={1200}
                height={900}
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                COMPUTER SCIENCE — INDIA
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  B.Tech, Computer Science
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  The foundation — algorithms, systems, and the first taste of machine
                  learning. A degree that taught Harshawardhan how to think about
                  problems at scale and how to learn fast when the field moves faster
                  than the syllabus.
                </p>
                <p className="text-sm text-gray-500">2013 — 2017</p>
              </div>
            </motion.div>
          </div>

          {/* M.S. */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div
              {...fadeInUp}
              className="flex items-center lg:order-2"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  M.S., Machine Learning
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  A deep dive into statistical learning, optimization, and neural
                  architectures. Where the engineering mindset met research rigor — and
                  where shipping a model that actually generalizes became the obsession.
                </p>
                <p className="text-sm text-gray-500">2017 — 2019</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <img
                src={labImg}
                alt="Machine learning research lab"
                loading="lazy"
                width={1200}
                height={900}
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                GRADUATE RESEARCH — ML LAB
              </p>
            </motion.div>
          </div>

          {/* Specialization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src={libraryImg}
                alt="Deep learning specialization"
                loading="lazy"
                width={1200}
                height={900}
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                DEEP LEARNING SPECIALIZATION
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  Deep Learning Specialization
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Structured study of modern deep learning — from the math of
                  backpropagation to building and training neural networks for vision
                  and language. The bridge from coursework to the practical craft of
                  building AI systems.
                </p>
                <p className="text-sm text-gray-500">2019</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
