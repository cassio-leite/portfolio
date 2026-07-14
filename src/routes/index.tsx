import { createFileRoute } from '@tanstack/react-router'
import { Header } from '#/components/layout/Header'
import { Home as HomeSection } from '#/components/sections/Home'
import { About as AboutSection } from '#/components/sections/About'
import { Interests as InterestsSection } from '#/components/sections/Interests'
import { Education as EducationSection } from '#/components/sections/Education'

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
      </main>
    </>
  )
}
