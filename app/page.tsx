import { siteData } from '@/lib/site-data'
import { Hero, type HeroVariant } from '@/components/sections/hero'
import { Philosophy, type PhilosophyVariant } from '@/components/sections/philosophy'
import { Stats, type StatsVariant } from '@/components/sections/stats'
import { Projects, type ProjectsVariant } from '@/components/sections/projects'
import { Skills, type SkillsVariant } from '@/components/sections/skills'
import { CtaBanner, type CtaBannerVariant } from '@/components/sections/cta-banner'

export default function HomePage() {
  return (
    <>
          <div className="folio-reveal" style={{ animationDelay: '0ms' }}>
            <Hero data={siteData} variant="editorial-serif" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '75ms' }}>
            <Philosophy data={siteData} variant="pull-quote" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '150ms' }}>
            <Stats data={siteData} variant="row" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '225ms' }}>
            <Projects data={siteData} variant="masonry" limit={4} />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '300ms' }}>
            <Skills data={siteData} variant="chip-cloud" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '375ms' }}>
            <CtaBanner data={siteData} variant="fullbleed" />
          </div>
        </>
  )
}
