import { Navigation } from '@/components/Navigation'
import { GrainOverlay } from '@/components/GrainOverlay'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'
import { Projects } from '@/components/Projects'
import { Achievements } from '@/components/Achievements'
import { Education } from '@/components/Education'
import { CTABand } from '@/components/CTABand'
import { Contact } from '@/components/Contact'

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GrainOverlay />
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Achievements />
        <Education />
        <CTABand />
        <Contact />
      </main>
    </div>
  )
}
