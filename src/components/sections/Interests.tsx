import { motion } from 'framer-motion'
import { interests } from '#/content/interests'
import { Trophy, BookOpen, Music, Coffee, Rocket, Film } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  futbol: Trophy,
  book: BookOpen,
  music: Music,
  'mug-saucer': Coffee,
  rocket: Rocket,
  film: Film,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Interests() {
  return (
    <section id="interests" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary">
            Interesses
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto justify-items-center"
        >
          {interests.map((interest) => {
            const IconComponent = iconMap[interest.icon]
            return (
              <motion.div
                key={interest.label}
                variants={itemVariants}
                className="group/item flex flex-col items-center gap-3"
              >
                <div className="relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-primary bg-background transition-all duration-300 group-hover/item:-translate-y-2 group-hover/item:bg-gradient-to-br group-hover/item:from-primary group-hover/item:to-cyan-400 group-hover/item:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]">
                  {IconComponent && (
                    <IconComponent className="w-10 h-10 text-primary transition-colors duration-300 group-hover/item:text-primary-foreground" />
                  )}
                </div>
                <span className="text-sm font-medium text-foreground opacity-100 md:opacity-0 md:group-hover/item:opacity-100 transition-opacity duration-300">
                  {interest.label}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
