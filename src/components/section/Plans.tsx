export default function Plans() {
  const features = [
    {
      name: "Sprint Plan",
      price: "₹ 6599 / year",
      features: [
        { label: "All features", included: true },
        { label: "Only DSA, Core & Aptitude", included: true },
        { label: "AI Doubt Support", included: false },
        { label: "Biweekly Sessions", included: false },
        { label: "Code Review", included: false },
      ],
      bg: "bg-black",
      highlight: false,
    },
    {
      name: "Pinnacle Plan",
      price: "₹ 9120 lifetime",
      features: [
        { label: "All features", included: true },
        { label: "Only DSA, Core & Aptitude", included: true },
        { label: "AI Doubt Support", included: true },
        { label: "Biweekly Sessions", included: true },
        { label: "Code Review", included: true },
      ],
      bg: "bg-gradient-to-br from-black to-[#071857]",
      highlight: true,
    },
    {
      name: "Enterprise Plan",
      price: "Contact Us",
      features: [
        { label: "All features of Pinnacle", included: true },
        { label: "Performance Dashboard", included: true },
        { label: "Centralized Billing & Licensing", included: true },
        { label: "Custom Curriculum", included: true },
        { label: "Exclusive Webinars & Industry Events", included: true },
        { label: "Batch Enrollment & Role Access", included: true },
      ],
      bg: "bg-black",
      highlight: false,
    },
  ];

  return (
    <div className="w-full bg-black py-20 px-4">
      <div className="text-white w-full mx-auto text-center px-4">
        <div className="mx-auto text-3xl md:text-4xl lg:text-5xl font-bold leading-snug max-w-[90%] sm:max-w-[450px] md:max-w-[650px] lg:max-w-full">
          <span>The right price for you, </span>
          <span className="bg-gradient-to-br from-white to-[#071857] bg-clip-text text-transparent">
            with maximum value
          </span>

        </div>
        <div className="text-[#a3a5ae] text-center text-base md:text-lg max-w-[90%] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[700px] mx-auto mt-4">
          Simple pricing that makes sense for maximum grasping
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16 px-4">
        {features.map((plan, index) => (
          <div
            key={index}
            className={`text-white border border-[#2c2c2c] rounded-3xl ${plan.bg} w-full max-w-[340px] mx-auto p-6 flex flex-col justify-between ${plan.highlight ? "md:scale-105 shadow-2xl md:relative md:top-[-20px]" : "md:scale-95"
              } transition-transform duration-500`}
          >
            <div>
              <div className="text-[#a3a5ae] text-md font-semibold mb-4">
                {plan.name}
              </div>
              <div className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-6">
                {plan.price}
              </div>
              <div className="text-[#a3a5ae] text-sm md:text-base leading-7 mb-6">
                {plan.name === "Sprint Plan"
                  ? "This course introduces DSA and problem solving from the ground up. You’ll learn core concepts through simple, direct lessons."
                  : plan.name === "Pinnacle Plan"
                    ? "Get lifetime access to all course content and updates. Priority support and expert guidance are included whenever you need help."
                    : "Perfect for a group of people (minimum 30) who are looking for an extra discount."}
              </div>
              <div className="flex flex-col gap-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={feature.included ? "white" : "#ff6b6b"}
                      className="shrink-0 w-6 h-6 mt-1"
                    >
                      <path
                        d={
                          feature.included
                            ? "M9 16.2l-4.2-4.2L3.5 13.3 9 18.8l12-12L19.6 5.4z" // ✔ tick
                            : "M18.3 5.71L12 12l6.3 6.29-1.41 1.42L12 13.41l-6.29 6.3-1.42-1.42L10.59 12 4.29 5.71 5.71 4.29 12 10.59l6.29-6.3z" // ✖ cross
                        }
                      />
                    </svg>

                    <span className="text-sm md:text-base text-[#ffffff]">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <button
              className={`mt-8 text-center border border-[#2c2c2c] rounded-lg p-4 w-full font-semibold transition-colors duration-200 
    ${plan.name === "Pinnacle Plan"
                  ? "bg-[#6700ff] text-white hover:opacity-90"
                  : "text-white hover:bg-[#333333] hover:text-white"
                }`}
            >
              Buy Now
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}
