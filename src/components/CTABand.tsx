import { motion } from 'framer-motion'

export function CTABand() {
  return (
    <section className="section-gutter py-[var(--space-xl)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 md:p-14 hero-glow"
      >
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-4">
              Currently available
            </p>
            <h2 className="font-display text-[11vw] md:text-6xl lg:text-7xl leading-none tracking-tight">
              GOT A MODEL THAT<br />NEEDS TO SHIP?
            </h2>
            <p className="mt-5 text-muted-foreground max-w-lg">
              Internships, full-time AI/ML roles, or a build that needs someone who
              can take it from research to running software.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="mailto:harshawardhankapadnis@gmail.com"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Start a conversation
            </a>
            <a
              href="[https://www.linkedin.com/in/harshawardhan-kapadnis-1baaa3256/](https://www.linkedin.com/in/harshawardhan-kapadnis-1baaa3256/)"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
