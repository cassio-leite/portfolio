export interface SocialLink {
  label: string;
  url: string;
  icon: 'envelope' | 'whatsapp' | 'linkedin' | 'github';
}

export interface Profile {
  name: string;
  greeting: string;
  role: string;
  bio: string;
  birthDate: string; // ISO-like display string, ex: "16 Dezembro 2001"
  location: string;
  email: string;
  whatsappUrl: string;
  cvUrl: string;
  avatarUrl: string;
  contactFormEndpoint: string;
  socialLinks: SocialLink[];
}

export interface Interest {
  icon: string; // nome do ícone (mapeado na camada de UI, não aqui)
  label: string;
}

export interface EducationItem {
  title: string;
  period: string;
  description: string;
}

export type SkillLevel = 'básico' | 'intermediário' | 'avançado';

export interface Skill {
  name: string;
  level: SkillLevel;
  description: string;
}

export interface Project {
  id: number;
  slug: string; // usado na rota /projetos/$slug
  title: string;
  description: string;
  image: string;
  repoLink: string;
  liveLink: string;
}
