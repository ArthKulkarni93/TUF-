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
      bg: "bg-[#181818]",
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
      bg: "bg-[#101010]",
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
      bg: "bg-[#181818]",
      highlight: false,
    },
  ];

  return (
    <div className="w-full bg-black py-20 px-4">
      <div className="text-white w-full mx-auto text-center px-4">
        <div className="mx-auto text-3xl md:text-4xl lg:text-5xl font-bold leading-snug max-w-[90%] sm:max-w-[450px] md:max-w-[650px] lg:max-w-full">
          <span>The right price for you, </span>
          <span className="text-green-300">with maximum value</span>
        </div>
        <div className="text-[#a3a5ae] text-center text-base md:text-lg max-w-[90%] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[700px] mx-auto mt-4">
          Simple pricing that makes sense for maximum grasping
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16 px-4">
        {features.map((plan, index) => (
          <div
            key={index}
            className={`text-white border border-[#2c2c2c] rounded-3xl ${plan.bg} w-full max-w-[340px] mx-auto p-6 flex flex-col justify-between ${
              plan.highlight ? "md:scale-105 shadow-2xl md:relative md:top-[-20px]" : "md:scale-95"
            } transition-transform duration-500`}
          >
            <div>
              <div className="text-green-300 text-md font-semibold mb-4">
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
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill={feature.included ? "#7bf1a8" : "#ff6b6b"}
                      className="shrink-0 w-6 h-6 mt-1"
                    >
                      <path
                        d={
                          feature.included
                            ? "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            : "M12 10.586l4.95-4.95a1 1 0 1 1 1.414 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L10.586 12l-4.95-4.95A1 1 0 1 1 7.05 5.636L12 10.586z"
                        }
                      />
                    </svg>
                    <span className="text-sm md:text-base text-[#a3a5ae]">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <button className="mt-8 text-green-300 text-center border border-[#2c2c2c] rounded-lg p-4 w-full font-semibold hover:bg-green-300 hover:text-black transition-colors duration-200">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
