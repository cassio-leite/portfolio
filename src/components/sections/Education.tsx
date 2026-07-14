import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '#/content/education'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary">
            Educação
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border" />
              )}
              
              {/* Marker */}
              <div className="absolute left-0 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-3">{item.period}</p>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
