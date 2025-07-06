export default function Companies() {
  const logos = [
    { name: "Google", img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Microsoft", img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Uber", img: "https://cdn.mos.cms.futurecdn.net/M4hbiWhoo8n3bQQ2hKg5s3-1172-80.jpg.webp" },
    { name: "CRED", img: "https://upload.wikimedia.org/wikipedia/en/7/7c/CRED_%28FinTech_company%29_logo.png" },
    { name: "Zomato", img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" },
    { name: "Meta", img: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png" },
    { name: "Apple", img: "https://substackcdn.com/image/fetch/$s_!G1lk!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg" },
    { name: "Netflix", img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Swiggy", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Swiggy_Logo_2024.webp/1143px-Swiggy_Logo_2024.webp.png?20240823184156" },
    { name: "Deutsche Bank", img: "https://images.seeklogo.com/logo-png/30/1/deutsche-bank-logo-png_seeklogo-304243.png" },
    { name: "NICE", img: "https://www.brightcontact.eu/wp-content/uploads/2021/07/NICE-inContact-CXone-Delivers-Best-In-Class-Contact-Center-Capabilities-to-Ergon-Energy-Retail_406x339_acf_cropped-1.jpg" },
    { name: "Siemens", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqAD8ceHK7Qtc0_R0k1utOTL2RZoc_3fnqpg&s" },
    { name: "Ola", img: "https://cdn.olaelectric.com/sites/evdp/pages/news_room/white_ola_logo.webp" }
  ];

  return (
    <div className="bg-black py-8 overflow-hidden">
      <div className="relative w-full">
        <div className="flex whitespace-nowrap animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="mx-8 flex-shrink-0">
              <img
                src={logo.img}
                alt={logo.name}
                className="h-10 w-auto grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: inline-flex;
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </div>
  );
}
