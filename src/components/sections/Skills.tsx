import { motion } from 'framer-motion'
import { skills } from '#/content/skills'

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

const getBadgeStyle = (level: string) => {
  switch (level) {
    case 'avançado':
      return 'bg-primary text-primary-foreground'
    case 'intermediário':
      return 'bg-primary/20 text-primary'
    case 'básico':
    default:
      return 'bg-muted text-muted-foreground'
  }
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary">
            Habilidades
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-card border border-border rounded-xl shadow-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">{skill.name}</h3>
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full capitalize ${getBadgeStyle(
                    skill.level
                  )}`}
                >
                  {skill.level}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
