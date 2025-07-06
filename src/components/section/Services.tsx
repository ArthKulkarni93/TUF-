export default function Services() {
  const cards = [
    {
      img: "https://res.cloudinary.com/dh626d9by/image/upload/v1751728709/DSA1_mmxh1m.png",
      title: "Data Structures & Algo",
      description:
        "Master problem-solving techniques and optimize code efficiency.",
    },
    {
      img: "https://res.cloudinary.com/dh626d9by/image/upload/v1751745319/System_Design_gxsj2h.png",
      title: "System Design",
      description:
        "Architect scalable solutions and design robust systems using our systematic approach.",
    },
    {
      img: "https://res.cloudinary.com/dh626d9by/image/upload/v1751728685/premium1_jjz5ib.png",
      title: "Premium",
      description: "",
    },
    {
      img: "https://res.cloudinary.com/dh626d9by/image/upload/v1751728723/core_kyaeol.png",
      title: "Core Subjects",
      description:
        "Strengthen technical foundations with our curated core subject modules for knowledge building.",
    },
    {
      img: "https://res.cloudinary.com/dh626d9by/image/upload/v1751745324/Apti_adcjlt.png",
      title: "Aptitude",
      description:
        "Enhance logical reasoning and quantitative skills through our structured development program.",
    },
  ];

  return (
    <div className="w-full min-h-screen justify-end px-4 md:px-10 bg-black mb-20 overflow-x-hidden">
      {/* Text Heading Section */}
      <div>
        <div className="text-white text-2xl w-[300px] ml-7 mt-24 sm:w-[350px] sm:text-3xl md:text-4xl sm:ml-20 md:w-[400px] md:mt-24 lg:text-5xl lg:w-[550px] xl:text-6xl xl:w-[650px] leading-tight tracking-tight">
          <span>Building strong foundations</span>
          <span> for real-world tech</span>
        </div>
        <div className="text-[#a3a5ae] w-[400px] ml-7 mt-1 sm:w-[550px] sm:ml-20 sm:text-md sm:pr-10 md:text-lg md:w-[620px] lg:w-[700px] lg:text-xl xl:w-[750px] leading-tight tracking-tight">
          More than a million people trust these resources to learn what matters, build real skills, and move ahead—no shortcuts, just results that last.
        </div>
      </div>

      {/* Scrollable Cards Section */}
      <div className="flex mt-7 gap-6 md:gap-10 overflow-x-auto pr-8 md:pr-32 pt-8 pb-8 scrollbar-hide">
        <style>
          {`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}
        </style>

        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`relative h-96 w-80 flex-shrink-0 ${idx === 0 ? "ml-4 md:ml-10" : ""
              } ${idx === cards.length - 1 ? "-mr-10 md:-mr-32 opacity-80" : ""} group hover:-translate-y-8 transition-transform duration-300 z-20`}
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-full w-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-85"
            />
            <span className="absolute p-6 inset-0 flex text-white text-18 leading-tight tracking-tight drop-shadow-lg font-bold">
              {card.title}
            </span>
            {card.description && (
              <span className="absolute hidden md:block inset-y-14 inset-x-6 flex text-[#a3a5ae] text-15 tracking-tight leading-snug drop-shadow-lg">
                {card.description}
              </span>
            )}

            {/* 👇 Updated border here */}
            <div className="absolute top-0 right-0 h-7 w-7 border-t-[1.5px] border-r-[1.5px] border-[#1a1a1a] rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

        ))}
      </div>

      {/* Stats Section */}
      <div className="text-white ml-7 gap-y-4 2xl:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 sm:w-[500px] lg:w-[900px] lg:gap-x-22 sm:ml-20 md:gap-x-38 leading-tight tracking-tight">
        <div>
          <span className="text-2xl sm:text-3xl text-4xl font-semibold">1.05M+</span><br />
          <span className="text-md text-[#a3a5ae]">Learners</span>
        </div>
        <div>
          <span className="text-2xl sm:text-3xl text-4xl font-semibold">858k+</span><br />
          <span className="text-md text-[#a3a5ae]">YouTube subs</span>
        </div>
        <div>
          <span className="text-2xl sm:text-3xl text-4xl font-semibold">750k+</span><br />
          <span className="text-md text-[#a3a5ae]">LinkedIn</span>
        </div>
        <div>
          <span className="text-2xl sm:text-3xl text-4xl font-semibold">160k+</span><br />
          <span className="text-md text-[#a3a5ae]">Twitter</span>
        </div>
      </div>
    </div>
  );
}
