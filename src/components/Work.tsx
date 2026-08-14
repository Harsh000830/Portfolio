import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Senior AI Engineer',
    company: 'Applied AI Startup',
    location: 'Remote',
    period: '2023 — Present',
    description: 'Lead the design and delivery of LLM-powered features — retrieval pipelines, evaluation harnesses, and agent workflows. Own model selection, fine-tuning, and the production stack that keeps latency, cost, and quality in check.',
    skills: ['LLMs', 'RAG', 'Evaluation', 'AI Agents', 'MLOps'],
  },
  {
    title: 'Machine Learning Engineer',
    company: 'Enterprise SaaS',
    location: 'Remote',
    period: '2021 — 2023',
    description: 'Built and deployed ML models for search, ranking, and recommendation. Established experiment tracking, CI for models, and monitoring that caught regressions before users did.',
    skills: ['Recommender Systems', 'MLOps', 'Experimentation', 'Python', 'Kubernetes'],
  },
  {
    title: 'Data Scientist',
    company: 'FinTech',
    location: 'Bengaluru, India',
    period: '2019 — 2021',
    description: 'Prototyped and productionized predictive models, partnering with product to ship data-driven features. Introduced the team\u2019s first feature store and model registry.',
    skills: ['Predictive Modeling', 'Feature Engineering', 'SQL', 'Python', 'A/B Testing'],
  },
  {
    title: 'Software Engineer (ML)',
    company: 'HealthTech',
    location: 'Pune, India',
    period: '2017 — 2019',
    description: 'Built data pipelines and model-serving infrastructure. First exposure to training and deploying deep learning models at scale, and to the gap between a working notebook and a live system.',
    skills: ['Data Pipelines', 'Model Serving', 'Deep Learning', 'AWS', 'Docker'],
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
          <span className="text-sm text-gray-500 tracking-widest uppercase">Career</span>
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
              key={exp.company + exp.period}
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
