import { motion } from 'framer-motion'
import { MapPin, CheckCircle2 } from 'lucide-react'
import { profile } from '#/content/profile'
import { AuroraBackground } from '#/components/ui/aurora-background'
import { Button } from '#/components/ui/button'
import { socialIconMap } from '#/lib/social-icons'

export function Home() {
  return (
    <section id="home">
      <AuroraBackground>
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 pt-28 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <MapPin className="w-3.5 h-3.5" />
              <span>{profile.location}</span>
              <span className="text-primary/50">•</span>
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Disponível</span>
            </div>
            
            <p className="text-primary font-medium mb-2">{profile.greeting}</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {profile.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              {profile.role}
            </h2>
            
            <div className="flex gap-4 mb-8">
              <Button asChild>
                <a href={profile.cvUrl} download>
                  Baixar Currículo
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">Ver Projetos</a>
              </Button>
            </div>

            <div className="flex gap-4">
              {profile.socialLinks.map((link) => {
                const IconComponent = socialIconMap[link.icon as keyof typeof socialIconMap]
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground transition-all duration-300 border border-border rounded-lg hover:bg-primary/10 hover:scale-105 hover:text-primary"
                    aria-label={link.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              loading="eager"
              fetchPriority="high"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </AuroraBackground>
    </section>
  )
}
