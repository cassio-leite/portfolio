import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { projects } from '#/content/projects'
import { ExternalLink, Github, ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/projetos/$slug')({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug)
    if (!project) {
      throw notFound()
    }
    return project
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.title} | Cássio Leite` },
      { name: 'description', content: loaderData.description.slice(0, 160) },
    ],
  }),
  component: ProjectDetail,
})

function ProjectDetail() {
  const project = Route.useLoaderData()

  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        to="/#projects"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para projetos
      </Link>

      <article className="max-w-4xl mx-auto">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full aspect-video object-cover rounded-2xl shadow-lg mb-8"
        />

        <h1 className="text-4xl font-extrabold text-foreground mb-4">
          {project.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex gap-4">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-card border border-border rounded-lg hover:bg-muted transition-colors font-semibold"
          >
            <Github className="w-5 h-5 mr-2" />
            Repositório
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Ver ao vivo
          </a>
        </div>
      </article>
    </div>
  )
}
