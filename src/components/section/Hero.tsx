export default function HeroSection() {
  return (
    <>
      <div className="relative h-[90vh] w-full flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
        {/* Background Image - Responsive with conditional positioning */}
        <img
          src="https://res.cloudinary.com/dh626d9by/image/upload/v1751874122/hero_rp8jwi.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover md:object-left object-[12%_center] opacity-80"
        />

        {/* Fade Away Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90 pointer-events-none"></div>

        {/* Top Right Text - Large screens only */}
        <div className="hidden lg:block absolute top-[25vh] right-56 z-20">
          <h2 className="text-2xl text-left font-medium text-[#72BB91] mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            TakeYouForward+
          </h2>
          <p className="text-2xl font-medium text-left text-[#BDBDBD]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Upskill yourself<br />With JustOne SUBSCRIPTION.
          </p>
        </div>
        
        {/* Version and Terminal Text - Large screens (1600px+) */}
        <div className="hidden xl:block absolute top-[45vh] right-5 z-20">
          <h3 className="text-2xl text-left opacity-60" style={{ fontFamily: "JetBrains Mono, monospace" }}>v0.8.4 <br />--------------------------</h3>
          
          {/* Terminal-style subscription text */}
          <div className="text-left mt-20 text-xl font-mono" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            <div className="text-[#72BB91] opacity-100">$ subscribe to tuf</div>
            <div className="text-white mt-1 opacity-90">&gt; Fetching modules...</div>
            <div className="text-white mt-1 opacity-80">&gt; Downloading:                    ███▒▒▒▒▒▒▒▒  30%</div>
            <div className="text-white mt-1 opacity-70">&gt; Loading DSA Modules             [==--------] 20%</div>
            <div className="text-white mt-1 opacity-60">&gt; Compiling System Design         [====------] 40%</div>
            <div className="text-white mt-1 opacity-50">&gt; Installing Quant Practice Set   [========--] 80%</div>
            <div className="text-white mt-1 opacity-40">&gt; Loading CN Concepts             [=======---] 70%</div>
            <div className="text-[#72BB91] mt-1 opacity-30">&gt; Interview Prep Online ✅</div>
          </div>
        </div>

        {/* Version and Terminal Text - Medium screens (1450px-1600px) */}
        <div className="hidden lg:block xl:hidden absolute top-[45vh] right-5 z-20">
          <h3 className="text-lg text-left opacity-60" style={{ fontFamily: "JetBrains Mono, monospace" }}>v0.8.4 <br />--------------------------</h3>
          
          {/* Terminal-style subscription text - smaller */}
          <div className="text-left mt-16 text-sm font-mono" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            <div className="text-[#72BB91] opacity-100">$ subscribe to tuf</div>
            <div className="text-white mt-1 opacity-90">&gt; Fetching modules...</div>
            <div className="text-white mt-1 opacity-80">&gt; Downloading:                    ███▒▒▒▒▒▒▒▒  30%</div>
            <div className="text-white mt-1 opacity-70">&gt; Loading DSA Modules             [==--------] 20%</div>
            <div className="text-white mt-1 opacity-60">&gt; Compiling System Design         [====------] 40%</div>
            <div className="text-white mt-1 opacity-50">&gt; Installing Quant Practice Set   [========--] 80%</div>
            <div className="text-white mt-1 opacity-40">&gt; Loading CN Concepts             [=======---] 70%</div>
            <div className="text-[#72BB91] mt-1 opacity-30">&gt; Interview Prep Online ✅</div>
          </div>
        </div>

        {/* Simplified content for small screens (0-1450px) */}
        <div className="block lg:hidden absolute top-[55vh] left-48 z-20">
          <div className="text-left" style={{ fontFamily: "JetBrains Mono, monospace" }}>
            <h2 className="text-lg font-medium text-[#72BB91] mb-2">
              TakeYouForward+
            </h2>
            <p className="text-lg font-medium text-[#BDBDBD] mb-4">
              Upskill yourself<br />With JustOne SUBSCRIPTION.
            </p>
            <h3 className="text-base opacity-60">v0.8.4 <br />--------------------------</h3>
          </div>
        </div>

        {/* Content Container - Ready for text and CTAs */}
        <div className="absolute top-[55vh] right-40 z-20 text-right">
        {/* <div className=" text-left mt-4 text-2xl " style={{ fontFamily: "JetBrains Mono, monospace" }}>
            <div className="text-[#72BB91]">$ subscribe to tuf</div>
            <div className="text-white mt-1">&gt; Fetching modules...</div>
            <div className="text-white mt-1">&gt; Downloading:                   ███▒▒▒▒▒▒▒▒  30%</div>
          </div> */}
        </div>
        
        {/* CTA Buttons - Responsive positioning */}
        <div className="absolute z-20 flex items-center gap-4 lg:bottom-[10vh] lg:left-48 bottom-[10vh] left-48 sm:left-20 md:left:32">
          {/* Get Started Button */}
          <button 
            className="px-6 py-3 text-white border rounded-3xl border-[#D3D3D3] text-3xl  font-medium hover:bg-white hover:text-black transition-colors duration-300"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Get Started
          </button>
          
          {/* Arrow Button */}
          <button className="w-14 h-14 border border-[#D3D3D3] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
        
      </div>
    </>
  )
}