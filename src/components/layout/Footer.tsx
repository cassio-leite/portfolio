import { profile } from '#/content/profile'
import { socialIconMap } from '#/lib/social-icons'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="font-bold text-lg tracking-tight">{profile.name}</span>
          </div>

          <div className="flex items-center gap-4">
            {profile.socialLinks.map((link) => {
              const IconComponent = socialIconMap[link.icon as keyof typeof socialIconMap]
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={link.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>&copy; {currentYear} {profile.name}. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
