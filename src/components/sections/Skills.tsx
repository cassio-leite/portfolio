import { motion } from 'framer-motion'
import { skills } from '#/content/skills'
import { Badge } from '#/components/ui/badge'

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col p-6 bg-card border border-border rounded-xl shadow-sm hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="font-medium text-[10px] uppercase tracking-wider px-2 py-0"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
