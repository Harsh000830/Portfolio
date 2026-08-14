import { motion } from 'framer-motion'
import campusImg from '@/assets/edu-campus.jpg'
import labImg from '@/assets/edu-lab.jpg'

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

        <div className="space-y-16 lg:space-y-24">
          {/* B.Tech */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src={campusImg}
                alt="K.K. Wagh Institute of Education and Research campus"
                loading="lazy"
                width={1200}
                height={900}
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                NASHIK, MAHARASHTRA — INDIA
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-2">
                  B.Tech, Artificial Intelligence & Data Science
                </h3>
                <p className="text-base text-gray-400 mb-4">
                  K.K. Wagh Institute of Education and Research, Nashik
                </p>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Four years spent moving between the theory and the build — statistics,
                  deep learning, and data engineering on one side, and hackathons,
                  competitions, and shipped side projects on the other.
                </p>
                <p className="text-sm text-gray-500">Nov 2022 — Jun 2026 · CGPA 7.80</p>
              </div>
            </motion.div>
          </div>

          {/* Focus areas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div
              {...fadeInUp}
              className="flex items-center lg:order-2"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  Focus Areas
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Computer vision and deep learning coursework grounded the work at
                  Combat Solutions — segmentation, OCR pipelines, and real-time
                  inference. Alongside it, full-stack and database work made the models
                  usable: APIs, dashboards, and deployable products rather than notebooks.
                </p>
                <p className="text-sm text-gray-500">Computer Vision · NLP · Generative AI · Full Stack</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <img
                src={labImg}
                alt="Machine learning lab work"
                loading="lazy"
                width={1200}
                height={900}
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                VISION · NLP · GENERATIVE AI
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
