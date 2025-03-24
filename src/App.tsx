import { Header, Main, BackToTop } from "./components"
import Overlay from "./components/common/Overlay"
import { useContext } from "react"
import { RemContext, RemContextType } from "./types/context"


function App() {
    const {selectedSkip} = useContext(RemContext) as RemContextType;

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 font-urbanist">
       <Overlay selectedSkip={selectedSkip} />
       <Header />
       <Main />
       <BackToTop />
    </div>
  )
}

export default App
