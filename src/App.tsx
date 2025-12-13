import Lenis from "lenis/react"

import Home from "@/components/blocks/Home"
import TopScrollbar from "@/components/blocks/TopScrollbar"


function App() {
  return (
    <Lenis
      root
      options={{
        smoothWheel: true,
        lerp: 0.2,
        syncTouch: false,
      }}
    >
      <TopScrollbar />
      <Home />
    </Lenis>
  )
}

export default App;
