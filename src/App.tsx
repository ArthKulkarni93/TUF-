// import { Button } from "@/components/ui/button"
import Services from "./components/section/Services"
import FAQ from "./components/section/FAQ"
import Plan from "./components/section/Plans" 
import Footer from "./components/section/Footer"
// import Testimonials from "./components/section/Testimonial"
import RiveButton from "./components/section/Rive"

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
      <RiveButton/>
      <hr className="bg-white"/>
      <Plan/>
      <hr className="bg-white"/>
      <FAQ/>
      <hr className="bg-white"/>
      <Footer/>
      <hr className="bg-white"/>
      {/* <Testimonials/> */}
      {/* <hr className="bg-white"/> */}
    </div>
  )
}

export default App
//testimonial section
// hero section
// bento
//Footer section. --> done

// change the color of plan cards
// change font everywhere
// increase the size of services cards to enforce scrolling to right