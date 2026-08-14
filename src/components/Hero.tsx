import { motion } from 'framer-motion'
import heroImage from '@/assets/hero.jpg'

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Responsive */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImage}
          alt="Harshawardhan Kapadnis — AI Engineer at work"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:items-center pb-32 md:pb-0 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-5xl">
          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-display leading-none tracking-tighter text-[13vw] sm:text-[11vw] md:text-hero">
              <span className="block text-white">HARSHAWARDHAN</span>
              <span className="block text-white">KAPADNIS</span>
              <span className="block text-white/90">AI ENGINEER</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 md:mt-8 text-sm sm:text-base text-white/80 max-w-sm md:max-w-md leading-relaxed"
            >
              AI/ML and full stack developer building computer vision, generative AI
              and blockchain systems that make it out of the notebook and into
              production.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
