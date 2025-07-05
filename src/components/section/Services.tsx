export default function Services() {
    return (
        <div className="w-full h-screen justify-end px-4 md:px-10 bg-black mb-20">
            <div>
                <div className="text-white text-2xl w-[300px] ml-7 mt-24 sm:w-[350px] sm:text-3xl md:text-4xl sm:ml-20 md:w-[400px] md:mt-24 lg:text-5xl lg:w-[500px] xl:text-6xl xl:w-[650px] leading-tight tracking-tight">
                    <span>Empowering developers</span>
                    <span> through open source</span>
                </div>
                <div className="text-[#a3a5ae] w-[400px] ml-7 mt-1 sm:w-[550px] sm:ml-20 sm:text-md sm:pr-10 md:text-lg md:w-[620px] lg:w-[700px] lg:text-xl xl:w-[750px] leading-tight tracking-tight">
                    Our open-source software improves the developer experience for developers in 175 countries, empowering them to build better applications.
                </div>
            </div>

            <div
                className="flex mt-7 gap-6 md:gap-10 overflow-x-auto pr-8 md:pr-20 relative"
                style={{
                    maxWidth: '100vw',
                    overflowY: 'visible',
                    overflowX: 'auto',
                    paddingTop: '2rem',
                    paddingBottom: '2rem',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none'
                }}
            >
                <style>
                    {`
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}
                </style>

                {/* Cards */}
                <div className="relative h-90 md:h-96 w-70 md:w-72 flex-shrink-0 ml-16 md:ml-20 hover:-translate-y-8 transition-transform duration-300 z-20">
                    <img className="h-full w-full object-cover rounded-lg" src="src/assets/DSA.png" alt="Core Subject" />
                    <span className="absolute p-6 inset-0 flex text-white text-18 leading-tight tracking-tight drop-shadow-lg">Data Structures & Algo</span>
                    <span className="absolute hidden md:block inset-y-14 inset-x-6 flex text-[#a3a5ae] text-15 tracking-tight leading-snug justify-text drop-shadow-lg">Master problem-solving techniques and optimize code efficiency.</span>
                </div>

                <div className="relative h-90 md:h-96 w-70 md:w-72 flex-shrink-0 hover:-translate-y-8 transition-transform duration-300 z-20">
                    <img className="h-full w-full object-cover rounded-lg" src="src/assets/Core Subject.png" alt="DSA" />
                    <span className="absolute p-6 inset-0 flex text-white text-18 leading-tight tracking-tight drop-shadow-lg">Core Subjects</span>
                    <span className="absolute hidden md:block inset-y-14 inset-x-6 flex text-[#a3a5ae] text-15 tracking-tight leading-snug justify-text drop-shadow-lg">Strengthen technical foundations with our curated core subject modules for knowledge building.</span>
                </div>

                <div className="relative h-90 md:h-96 w-70 md:w-72 flex-shrink-0 hover:-translate-y-8 transition-transform duration-300 z-20">
                    <img className="h-full w-full object-cover rounded-lg" src="src/assets/premium.png" alt="Core Subject 2" />
                    <span className="absolute p-6 inset-0 flex text-white text-18 leading-tight tracking-tight drop-shadow-lg">Premium</span>
                    <span className="absolute hidden md:block inset-y-14 inset-x-6 flex text-[#a3a5ae] text-15 tracking-tight leading-snug justify-text drop-shadow-lg"></span>
                </div>

                <div className="relative h-90 md:h-96 w-70 md:w-72 flex-shrink-0 hover:-translate-y-8 transition-transform duration-300 z-20">
                    <img className="h-full w-full object-cover rounded-lg" src="src/assets/DSA.png" alt="DSA 2" />
                    <span className="absolute p-6 inset-0 flex text-white text-18 leading-tight tracking-tight drop-shadow-lg">System Design</span>
                    <span className="absolute hidden md:block inset-y-14 inset-x-6 flex text-[#a3a5ae] text-15 tracking-tight leading-snug justify-text drop-shadow-lg">Architect scalable solutions and design robust systems using our systematic approach.</span>
                </div>

                <div className="relative h-90 md:h-96 w-70 md:w-72 flex-shrink-0 opacity-80 -mr-10 md:-mr-20 hover:-translate-y-8 transition-transform duration-300 z-20">
                    <img className="h-full w-full object-cover rounded-lg" src="src/assets/Core Subject.png" alt="Core Subject 3" />
                    <span className="absolute p-6 inset-0 flex text-white text-18 leading-tight tracking-tight drop-shadow-lg">Aptitude</span>
                    <span className="absolute hidden md:block inset-y-14 inset-x-6 flex text-[#a3a5ae] text-15 tracking-tight leading-snug justify-text drop-shadow-lg">Enhance logical reasoning and quantitative skills through our structured development program.</span>
                </div>
            </div>

            <div className="text-white ml-7 gap-y-4 2xl:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 sm:w-[500px] lg:w-[900px] lg:gap-x-22 sm:ml-20 md:gap-x-38 leading-tight tracking-tight">
                <div>
                    <span className="text-2xl sm:text-3xl text-4xl font-semibold">90 million</span><br />
                    <span className="text-md text-[#a3a5ae]">Monthly downloads</span>
                </div>
                <div>
                    <span className="text-2xl sm:text-3xl text-4xl font-semibold">33.3k</span><br />
                    <span className="text-md text-[#a3a5ae]">GitHub Stars</span>
                </div>
                <div>
                    <span className="text-2xl sm:text-3xl text-4xl font-semibold">4.7k</span><br />
                    <span className="text-md text-[#a3a5ae]">Discord members</span>
                </div>
                <div>
                    <span className="text-2xl sm:text-3xl text-4xl font-semibold">2.5k</span><br />
                    <span className="text-md text-[#a3a5ae]">Code contributors</span>
                </div>
            </div>
        </div>
    );
}
