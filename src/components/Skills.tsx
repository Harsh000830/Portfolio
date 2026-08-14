import { motion } from 'framer-motion'

const skillGroups = [
  {
    label: 'Programming & Web',
    items: ['Python', 'JavaScript', 'React.js', 'Node.js', 'REST APIs', 'Backend Engineering'],
  },
  {
    label: 'AI / ML & Generative AI',
    items: ['TensorFlow', 'OpenCV', 'Computer Vision', 'CNNs', 'NLP', 'RAG', 'Generative AI', 'n8n Automation'],
  },
  {
    label: 'Databases & Tools',
    items: ['SQL', 'PostgreSQL', 'MongoDB', 'Neo4j', 'Git & GitHub', 'Postman', 'VS Code'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-primary tracking-widest uppercase">Expertise</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20"
        >
          SKILLS
        </motion.h2>

        {/* Skill Groups */}
        <div className="space-y-12 lg:space-y-16">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 border-t border-gray-800 pt-8"
            >
              <p className="lg:col-span-4 text-sm text-gray-500 tracking-widest uppercase">
                {group.label}
              </p>
              <div className="lg:col-span-8 flex flex-wrap gap-x-8 gap-y-3">
                {group.items.map((item) => (
                  <span key={item} className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light transition-colors hover:text-primary cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
