// import { Button } from "@/components/ui/button"
import Services from "./components/section/Services"
import FAQ from "./components/section/FAQ"
import Plan from "./components/section/Plans" 

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="h-[100vh] w-full flex items-center justify-center text-white text-4xl font-bold">
        hero section
      </div>
      <hr className="bg-white"/>
      <Services />
      <hr className="bg-white"/>
      <Plan/>
      <hr className="bg-white"/>
      <FAQ/>
      
    </div>
  )
}

export default App
//testimonial section
// hero section
// bento