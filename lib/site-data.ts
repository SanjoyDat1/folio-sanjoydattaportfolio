/**
 * Single source of truth for every piece of content on this site.
 *
 * To change your bio, add a new project, or swap the CTA — edit this
 * file. Save, commit, push — Netlify handles the rest.
 *
 * Design tokens (colors, fonts, spacing) live in `styles/globals.css`.
 */

export type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  impact?: string
  mediaUrl?: string | null
}

export type Stat = { label: string; value: string }

export type SkillGroup = { category: string; items: string[] }

export type SocialLink = { label: string; href: string }

export type GalleryItem = { url: string; alt: string; caption?: string | null }

export type EducationEntry = {
  school: string
  degree?: string | null
  field?: string | null
  dates?: string | null
}

export type CredentialEntry = {
  kind: 'certification' | 'publication'
  name: string
  issuer?: string | null
  year?: string | null
}

export type SiteData = {
  persona: { name: string; firstName: string; slug: string; tone?: string | null }
  role: string
  ctaHref: string
  palette: string
  typography: string
  hero: string
  motif: string
  animation: string
  content: {
    headline: string
    subheadline: string
    bio: string
    ctaText: string
    ctaEmail: string | null
    /**
     * Base64-encoded, +7-char-shifted ctaEmail used by the ContactModal
     * so the plain address never appears in static HTML. Decoded client-
     * side after the user clicks the CTA. Kept optional so older sites
     * regenerated before this field existed still type-check.
     */
    ctaEmailEnc?: string | null
    avatarUrl: string
    location: string | null
    availability: string | null
    stats: Stat[]
    heroMediaUrl?: string | null
    gallery?: GalleryItem[]
    projects: Project[]
    skills: SkillGroup[]
    socialLinks: SocialLink[]
    education?: EducationEntry[]
    credentials?: CredentialEntry[]
    footerTagline: string
    metaTitle: string
    metaDescription: string
    sectionCopy?: {
      workEyebrow?: string
      workTitle?: string
      aboutEyebrow?: string
      aboutTitle?: string
      statsEyebrow?: string
      statsTitle?: string
      galleryEyebrow?: string
      galleryTitle?: string
      ctaHeadline?: string
      ctaSubline?: string
    }
  }
}

export const siteData: SiteData = {
  persona: {
    name: "Sanjoy Datta",
    firstName: "Sanjoy",
    slug: "sanjoydattaportfolio",
    tone: null,
  },
  role: "iOS founder",
  ctaHref: "#contact",
  palette: "duotone-photo",
  typography: "space-grotesk-geist",
  hero: "editorial-serif",
  motif: "hand-underline",
  animation: "cinematic",
  content: {
    ctaEmail: null,
    socialLinks: [
      {
        label: "GitHub",
        href: "https://github.com/SanjoyDat1/",
      },
      {
        label: "Website",
        href: "https://www.sanjoydat.com",
      },
      {
        label: "Email",
        href: "mailto:sanjoy1.datta1@gmail.com",
      },
    ],
    projects: [
      {
        title: "EzParkk",
        description: "Peer-to-peer parking app that hit 50k impressions in 3 weeks and trended #1 on the UCI subreddit after spreading organically. Shipped from concept to Play Store in under 20 weeks with 99.9% uptime.",
        tags: [
          "Android",
          "Kotlin",
          "Product",
        ],
        mediaUrl: null,
      },
      {
        title: "SunnyD NoteTaker",
        description: "AI-powered notes with a proactive writing assistant that reads, thinks, and improves your notes as you write. The hardest challenge was making it helpful without interrupting the user and keeping it promptless.",
        tags: [
          "JavaScript",
          "AI",
          "Product",
        ],
        mediaUrl: "https://socialify.git.ci/SanjoyDat1/SunnyD_NoteTaker/image?theme=Light&pattern=Plus&font=Inter&description=1&owner=1",
      },
      {
        title: "MLBotTrader",
        description: "Stock trading bot using Python and machine learning through the Alpaca API. Detects market sentiment through ML models to buy, sell, and short SPY. Beat the S&P 500 by 300% over an 8-year period.",
        tags: [
          "Python",
          "Machine Learning",
          "Trading",
        ],
        mediaUrl: "https://socialify.git.ci/SanjoyDat1/MLBotTrader/image?theme=Light&pattern=Plus&font=Inter&description=1&owner=1",
      },
      {
        title: "Lights Out 1",
        description: "Mobile escape room game published across app stores. Reached 150+ downloads across 22 countries with organic growth and word-of-mouth distribution.",
        tags: [
          "Android",
          "Kotlin",
          "Game",
        ],
        mediaUrl: null,
      },
      {
        title: "DepthDiver",
        description: "Dive into any photo you take with AI-generated renderings for depth. Explores creative applications of AI for visual depth perception and image manipulation.",
        tags: [
          "Python",
          "AI",
          "Computer Vision",
        ],
        mediaUrl: "https://socialify.git.ci/SanjoyDat1/DepthDiver/image?theme=Light&pattern=Plus&font=Inter&description=1&owner=1",
      },
      {
        title: "Opennote Android",
        description: "An Android prototype for Opennote, the notebook that thinks with you. Early exploration of agentic AI for note-taking on mobile platforms.",
        tags: [
          "Kotlin",
          "Android",
          "AI",
        ],
        mediaUrl: null,
      },
    ],
    ctaText: "Follow my work",
    avatarUrl: "https://avatars.githubusercontent.com/u/77421859?v=4",
    bio: "I'm an Android founder and student who builds products that solve real inefficiencies. I shipped EzParkk from concept to Play Store in under 20 weeks—it hit 50k impressions in 3 weeks and trended #1 on the UCI subreddit after spreading organically through a post I didn't even make. I focus on Android-first experiences and AI that feels proactive without interrupting you, like SunnyD NoteTaker, where the hardest challenge was making it helpful without being annoying.\n\nI learn in public, iterate fast, and don't wait for permission. I've published apps across 22 countries, built trading bots that beat SPY by 300% over 8 years, and I'm always working on the next thing. If it solves a real problem and I can ship it, I'm in.",
    heroMediaUrl: null,
    availability: "Shipping products · Learning in public",
    metaDescription: "iOS founder and student who ships fast, learns in public, and builds mobile-first products that spread organically.",
    skills: [
      {
        category: "Stack",
        items: [
          "Kotlin",
          "Python",
          "JavaScript",
          "TypeScript",
          "Android",
          "React",
        ],
      },
      {
        category: "What I do well",
        items: [
          "Shipping fast",
          "Learning in public",
          "Agentic AI",
          "Mobile-first design",
          "Problem solving",
          "Systems thinking",
        ],
      },
      {
        category: "Tools",
        items: [
          "Android Studio",
          "Git",
          "Alpaca API",
          "ML frameworks",
          "Play Console",
        ],
      },
    ],
    footerTagline: "Shipping products that solve real problems",
    stats: [
      {
        label: "GITHUB REPOS",
        value: "25",
      },
      {
        label: "COUNTRIES",
        value: "22",
      },
      {
        label: "APP IMPRESSIONS",
        value: "50k",
      },
      {
        label: "UPTIME",
        value: "99.9%",
      },
    ],
    metaTitle: "Sanjoy Datta — iOS founder",
    location: null,
    subheadline: "Building Android-first products that spread organically and AI tools that stay out of your way.",
    gallery: [],
    headline: "android builder & founder",
    ctaEmailEnc: "emh1cXaAODVraHt7aDhHbnRocHM1anZ0",
  },
}

export function projectSlugs(projects: Project[]): string[] {
  const seen = new Set<string>()
  return projects.map((p) => {
    let base = p.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 40) || 'project'
    let slug = base
    let i = 2
    while (seen.has(slug)) slug = `${base}-${i++}`
    seen.add(slug)
    return slug
  })
}
