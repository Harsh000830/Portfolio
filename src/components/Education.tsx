import { motion } from 'framer-motion'
import campusAsset from '@/assets/kkwagh-campus.jpg.asset.json'
import labImg from '@/assets/edu-lab.jpg'
import hackathonImg from '@/assets/edu-hackathon.jpg'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const coursework = [
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'Natural Language Processing',
  'Data Structures & Algorithms',
  'DBMS',
  'Statistics',
  'Cloud & Deployment',
]

export function Education() {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-8">
          <span className="text-sm text-primary tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-primary mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        <div className="space-y-16 lg:space-y-24">
          {/* B.Tech */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <motion.div {...fadeInUp}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={campusAsset.url}
                  alt="K.K. Wagh Institute of Education and Research campus, Nashik"
                  loading="lazy"
                  width={723}
                  height={278}
                  className="w-full h-auto transition-transform duration-700 hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs text-muted-foreground tracking-widest uppercase">
                NASHIK, MAHARASHTRA — INDIA
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
              <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-2">
                B.Tech, Artificial Intelligence & Data Science
              </h3>
              <p className="text-base text-primary mb-4">
                K.K. Wagh Institute of Education and Research, Nashik
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Four years moving between theory and the build — statistics, deep
                learning and data engineering on one side; hackathons, competitions
                and shipped side projects on the other.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="font-display text-4xl text-primary leading-none">7.80</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">CGPA</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-foreground leading-none">2022—26</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Nov — Jun</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Focus areas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <motion.div {...fadeInUp} className="lg:order-2">
              <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-4">
                Core Coursework
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Computer vision and deep learning coursework grounded the work at
                Combat Solutions — segmentation, OCR pipelines and real-time inference.
                Full-stack and database subjects made the models usable: APIs,
                dashboards and deployable products rather than notebooks.
              </p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs text-muted-foreground border border-border rounded-full hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={labImg}
                  alt="Machine learning lab with students training models"
                  loading="lazy"
                  width={1408}
                  height={1056}
                  className="w-full h-auto transition-transform duration-700 hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs text-muted-foreground tracking-widest uppercase">
                VISION · NLP · GENERATIVE AI
              </p>
            </motion.div>
          </div>

          {/* Beyond the classroom */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <motion.div {...fadeInUp}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={hackathonImg}
                  alt="Hackathon night with teams building prototypes"
                  loading="lazy"
                  width={1408}
                  height={1056}
                  className="w-full h-auto transition-transform duration-700 hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs text-muted-foreground tracking-widest uppercase">
                HACKATHONS · COMPETITIONS · PROTOTYPES
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
              <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-4">
                Beyond the Classroom
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Most of what I know came from 36-hour build sprints: a national finalist
                run at Smart India Hackathon 2024, a third-place IoT solar tracker, and a
                steady stream of side projects that had to actually work by demo time.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
