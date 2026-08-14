import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'P2X Maker — P&ID-to-DCS Converter',
    company: 'Gen AI Intern · Combat Solutions',
    location: 'India',
    period: 'Dec 2025 — Jun 2026',
    description:
      'Engineered an automated P&ID to DCS conversion system using YOLOv8 segmentation with patch-based tiling to detect 100+ industrial symbols and pipe connections, eliminating weeks of manual digitization. Built three-method line detection (CLAHE, Canny, adaptive thresholding) for accurate pipe extraction across varying drawing quality, plus a full-stack React + FastAPI platform with an embedded Draw.io editor, PaddleOCR text extraction, Neo4j connectivity mapping, and multi-format export.',
    skills: ['YOLOv8', 'Computer Vision', 'FastAPI', 'React', 'PaddleOCR', 'Neo4j', 'XAML'],
  },
  {
    title: 'Safe Driver Recognition System',
    company: 'Gen AI Intern · Combat Solutions',
    location: 'India',
    period: 'Dec 2025 — Jun 2026',
    description:
      'Implemented blink detection and face tracking for driver drowsiness detection, and integrated the Twilio API for real-time alert notifications. Extended the system with emotion detection and heart rate monitoring to flag potential cardiac events, dispatching emergency alerts in real time. Improved detection accuracy through model tuning and performance optimization.',
    skills: ['Python', 'OpenCV', 'Deep Learning', 'Twilio API', 'Real-time Systems'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-primary tracking-widest uppercase">Career</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          WORK<br />EXPERIENCE
        </motion.h2>

        {/* Experiences */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column - Title & Company */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {exp.location}
                  </p>
                </div>

                {/* Middle Column - Period */}
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 tracking-widest uppercase">
                    {exp.period}
                  </p>
                </div>

                {/* Right Column - Description & Skills */}
                <div className="lg:col-span-5">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {skill}
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
