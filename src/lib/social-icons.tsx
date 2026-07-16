import { Mail, MessageCircle, Linkedin, Github } from 'lucide-react'

export const socialIconMap = {
  envelope: Mail,
  whatsapp: MessageCircle,
  linkedin: Linkedin,
  github: Github,
} as const

export type SocialIconType = keyof typeof socialIconMap
