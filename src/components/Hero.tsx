import { motion } from 'framer-motion'
import heroImage from '@/assets/hero.jpg'
import portraitAsset from '@/assets/harsh-portrait.png.asset.json'

const stats = [
  { value: '2+', label: 'Years building AI' },
  { value: '92%', label: 'Deepfake model accuracy' },
  { value: '100+', label: 'P&ID symbols detected' },
  { value: 'SIH', label: 'National finalist 2024' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden hero-glow">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImage}
          alt="Harshawardhan Kapadnis — AI Engineer at work"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-[70%_center] sm:object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end section-gutter pb-[var(--space-xl)] pt-32">
        <div className="w-full max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_380px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs tracking-widest uppercase text-primary">
                Open to AI / ML roles · 2026
              </span>
            </div>

            <h1 className="font-display leading-none tracking-tighter text-[13vw] sm:text-[11vw] md:text-hero">
              <span className="block text-foreground">HARSHAWARDHAN</span>
              <span className="block text-foreground">KAPADNIS</span>
              <span className="block text-gradient">AI ENGINEER</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              I turn models into products — computer vision, generative AI and
              blockchain systems that leave the notebook and run in production.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] glow-ring"
              >
                See my work
              </a>
              <a
                href="mailto:harshawardhankapadnis@gmail.com"
                className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Hire me
              </a>
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-[190px] sm:max-w-[230px] lg:max-w-none order-first lg:order-none"
          >
            <div className="absolute inset-x-4 bottom-0 top-8 rounded-t-full bg-primary opacity-20 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-2xl border border-border bg-secondary/60 backdrop-blur-sm">
              <img
                src={portraitAsset.url}
                alt="Portrait of Harshawardhan Kapadnis, AI Engineer"
                width={760}
                height={950}
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover object-[center_18%] scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>

          </div>


          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8 max-w-4xl"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-4xl md:text-5xl text-primary leading-none">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}
