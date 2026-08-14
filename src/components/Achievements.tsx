import { motion } from 'framer-motion'

const achievements = [
  {
    title: 'National Finalist — Smart India Hackathon',
    detail: 'Developed a vacuum-insulated, pressure-regulated container reducing nitrogen loss by 40% for scalable livestock semen preservation.',
    year: '2024',
  },
  {
    title: '3rd Place — IoT Project Competition',
    detail: 'Built an automated solar tracking system using LDR sensors to improve solar energy efficiency.',
    year: '2023',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-primary tracking-widest uppercase">Recognition</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          ACHIEVEMENTS
        </motion.h2>

        <div className="space-y-0">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-border block-y"
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-3 md:gap-12">
                <div className="md:max-w-3xl">
                  <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-400 mt-3 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                <span className="font-display text-3xl text-primary shrink-0 leading-none">{item.year}</span>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
