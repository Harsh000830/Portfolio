import { motion } from 'framer-motion'


const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-primary tracking-widest uppercase">Contact</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Giant Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8"
        >
          Get in touch
        </motion.h2>

        <motion.div {...fadeInUp} className="w-full h-px bg-gray-700 mb-12 lg:mb-16" />

        {/* Informal Text */}
        <motion.div {...fadeInUp} className="mb-12 lg:mb-16 max-w-2xl">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-tight mb-4">
            I'M USUALLY<br />
            DEEP IN A BUILD,<br />
            BUT I READ EVERYTHING
          </h3>
          <p className="text-sm text-gray-500 tracking-widest uppercase">
            FOR ROLES, COLLABORATIONS, OR JUST TO TALK SHOP
          </p>
        </motion.div>

        {/* Direct Contact */}
        <motion.div
          {...fadeInUp}
          className="mt-10 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col sm:flex-row flex-wrap gap-x-10 gap-y-3 items-start sm:items-center">
            <a
              href="mailto:harshawardhankapadnis@gmail.com"
              className="text-lg text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              harshawardhankapadnis@gmail.com
            </a>
            <a
              href="tel:+918010798307"
              className="text-lg text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              +91 80107 98307
            </a>
            <a
              href="https://github.com/Harsh000830"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harshawardhan-kapadnis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          {...fadeInUp}
          className="mt-10 pt-6 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center gap-2"
        >
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Harshawardhan Kapadnis · Nashik, India · Open to remote
          </p>
          <p className="text-xs text-gray-600">
            Built with React & Tailwind
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
