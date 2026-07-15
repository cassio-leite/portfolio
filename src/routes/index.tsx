import { createFileRoute } from '@tanstack/react-router'
import { Header } from '#/components/layout/Header'
import { Home as HomeSection } from '#/components/sections/Home'
import { About as AboutSection } from '#/components/sections/About'
import { Interests as InterestsSection } from '#/components/sections/Interests'
import { Education as EducationSection } from '#/components/sections/Education'
import { Skills as SkillsSection } from '#/components/sections/Skills'
import { Projects as ProjectsSection } from '#/components/sections/Projects'

export const Route = createFileRoute('/')({ component: RouteComponent })

function RouteComponent() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <InterestsSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
    </>
  )
}

