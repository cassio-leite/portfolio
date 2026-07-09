export interface SocialLink {
  label: string
  url: string
  icon: 'envelope' | 'whatsapp' | 'linkedin' | 'github'
}

export interface Profile {
  name: string
  greeting: string
  role: string
  bio: string
  birthDate: string // ISO-like display string, ex: "16 Dezembro 2001"
  location: string
  email: string
  whatsappUrl: string
  cvUrl: string
  avatarUrl: string
  socialLinks: SocialLink[]
}

export interface Interest {
  icon: string // nome do ícone (mapeado na camada de UI, não aqui)
  label: string
}

export interface EducationItem {
  title: string
  period: string
  description: string
}

/**
 * OBS (decisão pendente pra Fase 2): `level` é um número 0-100 herdado do
 * projeto antigo. Vale substituir por uma categoria (ver `SkillLevel`) —
 * porcentagem de skill é um padrão de UX questionável (o número é sempre
 * arbitrário). Mantido aqui só para não perder o dado original.
 */
export type SkillLevel = 'básico' | 'intermediário' | 'avançado'

export interface Skill {
  name: string
  level: number // 0-100, herdado — reavaliar em Fase 2
  description: string
}

export interface Project {
  id: number
  slug: string // usado na rota /projetos/$slug
  title: string
  description: string
  image: string
  repoLink: string
  liveLink: string
}
