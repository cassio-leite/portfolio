import { motion } from 'framer-motion'
import { profile } from '#/content/profile'
import { Mail, MessageCircle, MapPin, Calendar } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 pt-15">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-6">
            Sobre mim
          </h2>
          
          <div className="prose prose-slate dark:prose-invert mb-10">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {profile.bio}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Nascido em: {profile.birthDate}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-4 h-4 text-primary" />
              <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
