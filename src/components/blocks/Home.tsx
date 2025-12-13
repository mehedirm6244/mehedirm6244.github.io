import type { ReactNode } from "react"

import AboutMe from "@/components/blocks/AboutMe"
import Hero from "@/components/blocks/Hero"
import Education from "@/components/blocks/Education"
import SkillSet from "@/components/blocks/SkillSet"
import ContactMe from "@/components/blocks/ContactMe"
import Footer from "@/components/blocks/Footer"


function Drawer({children}: {children: ReactNode}) {
  return (
    <div className="sticky bg-slate-750 space-y-8 border-t border-blue-200/30 px-12">
      {children}
    </div>
  )
}

function DummyTrigger() {
  return (
    <div className="flex justify-center">
      <div className="w-12 md:w-16 h-[2px] rounded-full bg-blue-200/70 mt-3" />
    </div>
  )
}

function Home() {
  return (
    <>
      <Hero />
      
      <Drawer>
        <DummyTrigger />
        <AboutMe />
        <div className="sm:mt-10 md:mt-20 flex flex-row flex-wrap gap-6 justify-center">
          <Education />
          <SkillSet />
        </div>
        <ContactMe />
        <Footer />
      </Drawer>
    </>
  )
}

export default Home;
