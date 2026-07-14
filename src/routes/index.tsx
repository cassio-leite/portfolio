import { createFileRoute } from '@tanstack/react-router'
import { Header } from '#/components/layout/Header'
import { Home as HomeSection } from '#/components/sections/Home'
import { About as AboutSection } from '#/components/sections/About'

export const Route = createFileRoute('/')({ component: RouteComponent })

function RouteComponent() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
      </main>
    </>
  )
}
