
// import { useEffect, useState } from "react"

// Animated Counter Component
// function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     let startTime: number
//     let animationFrame: number

//     const animate = (currentTime: number) => {
//       if (!startTime) startTime = currentTime
//       const progress = Math.min((currentTime - startTime) / duration, 1)

//       setCount(Math.floor(progress * end))

//       if (progress < 1) {
//         animationFrame = requestAnimationFrame(animate)
//       }
//     }

//     animationFrame = requestAnimationFrame(animate)
//     return () => cancelAnimationFrame(animationFrame)
//   }, [end, duration])

//   const formatNumber = (num: number) => {
//     if (num >= 1000000) {
//       return (num / 1000000).toFixed(1) + "M"
//     }
//     if (num >= 1000) {
//       return (num / 1000).toFixed(1) + "K"
//     }
//     return num.toString()
//   }

//   return (
//     <span>
//       {formatNumber(count)}
//       {suffix}
//     </span>
//   )
// }

// // Floating Card Component
// function FloatingCard({
//   delay = 0,
//   children,
//   className = "",
// }: { delay?: number; children: React.ReactNode; className?: string }) {
//   return (
//     <div
//       className={`absolute bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-800/70 ${className}`}
//       style={{
//         animation: `float 6s ease-in-out infinite ${delay}s`,
//       }}
//     >
//       {children}
//     </div>
//   )
// }

// // Animated Background Shapes
// function BackgroundShapes() {
//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {/* Gradient Orbs */}
//       <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
//       <div
//         className="absolute bottom-32 right-32 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"
//         style={{ animationDelay: "1s" }}
//       ></div>
//       <div
//         className="absolute top-1/2 right-10 w-16 h-16 bg-green-500/20 rounded-full blur-xl animate-pulse"
//         style={{ animationDelay: "2s" }}
//       ></div>

//       {/* Animated Lines */}
//       <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
//             <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.1" />
//           </linearGradient>
//         </defs>
//         <path
//           d="M100,200 Q300,100 500,300 T900,200"
//           stroke="url(#line-gradient)"
//           strokeWidth="2"
//           fill="none"
//           className="animate-pulse"
//         />
//         <path
//           d="M200,400 Q400,300 600,500 T1000,400"
//           stroke="url(#line-gradient)"
//           strokeWidth="1"
//           fill="none"
//           className="animate-pulse"
//           style={{ animationDelay: "1s" }}
//         />
//       </svg>
//     </div>
//   )
// }

// // Navbar Component
// function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="text-xl font-bold text-white">TUF</div>
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#" className="text-gray-300 hover:text-white transition-colors">
//               About
//             </a>
//             <a href="#" className="text-gray-300 hover:text-white transition-colors">
//               Courses
//             </a>
//             <a href="#" className="text-gray-300 hover:text-white transition-colors">
//               Community
//             </a>
//             <a href="#" className="text-gray-300 hover:text-white transition-colors">
//               Contact
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">Take You Forward</h1>
        <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          Master data structures, algorithms, and system design with our comprehensive learning platform
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-medium transition-all duration-200 min-w-[160px]">
            Start Learning
          </button>
          <button className="border border-gray-600 text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-medium transition-all duration-200 min-w-[160px]">
            View Courses
          </button>
          <button className="text-gray-400 hover:text-white hover:bg-gray-900 px-8 py-4 text-lg font-medium transition-all duration-200 min-w-[160px]">
            Join Community
          </button>
        </div>
      </div>
    </div>
  )
}