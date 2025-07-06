import React from "react";

type Testimonial = {
  href: string;
  img: string;
  msg?: string; 
};


function getRandomTestimonials(
  arr: Testimonial[],
  min = 20,
  max = 30
): Testimonial[] {
  const shuffled = arr.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const count = Math.min(
    shuffled.length,
    Math.floor(Math.random() * (max - min + 1)) + min
  );
  return shuffled.slice(0, count);
}

export default function Testimonials() {
  const randomTestimonials = React.useMemo(
    () => getRandomTestimonials(testimonials, 20, 30),
    []
  );

  return (
    <section className="bg-black px-4 py-16 mt-30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white">
          What People Are Saying on Social Media
        </h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {randomTestimonials.map((t: Testimonial, idx: number) => (
            <a
              key={idx}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="break-inside-avoid block rounded-xl overflow-hidden hover:opacity-90 transition duration-300"
            >
              <img
                src={t.img}
                alt={`testimonial-${idx}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


const testimonials: Testimonial[] = [
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image1.585754f0c0062a03812d.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image1.585754f0c0062a03812d.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image2.7df961986a7f027af973.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image3.6dc959fa96feb9a80797.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image4.fa520381fb785ece7d5c.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image5.3447f2eac4fd77386763.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image6.03f1e04c4181edd1c665.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image7.f9ae7699151ecd49bdf4.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image8.422b90702348b27e88d4.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image9.c16ee8e518af51a044df.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image10.0ec62d2ba1e10886d71d.webp"
    },
    {
        "href": "https://x.com/Prathamjava/status/1920144072326737938",
        "img": "https://takeuforward.org/static/media/tweet-1920144072326737938.24f34c3f19eb0c848955.webp"
    },
    {
        "href": "https://x.com/Oppbhai20/status/1920138268936634713",
        "img": "https://takeuforward.org/static/media/tweet-1920138268936634713.fedd44bbd8e4888a6c62.webp"
    },
    {
        "href": "https://x.com/Goss_Gowtham/status/1920128636176494895",
        "img": "https://takeuforward.org/static/media/tweet-1920128636176494895.eb7b0ed2c46cca0e8ebb.webp"
    },
    {
        "href": "https://x.com/abhaypande64436/status/1920127183147642925",
        "img": "https://takeuforward.org/static/media/tweet-1920127183147642925.c45dd2fa27a5477866cb.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image11.8059be0d2d8b11da5e49.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image12.b4417b7634837c3b4aff.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image13.4eb95e6b111337b1a825.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image14.62282bb7ed8f395a7b0b.webp"
    },
    {
        "href": "https://x.com/TheSDELad/status/1920115409753141523",
        "img": "https://takeuforward.org/static/media/tweet-1920115409753141523.22abf3b02b2ece71b40c.webp"
    },
    {
        "href": "https://x.com/nikhil_2200/status/1920110702729080942",
        "img": "https://takeuforward.org/static/media/tweet-1920110702729080942.60ba3348c45d4f493172.webp"
    },
    {
        "href": "https://x.com/RizonKumar/status/1920111531305423241",
        "img": "https://takeuforward.org/static/media/tweet-1920111531305423241.aa1761027367ef56c043.webp"
    },
    {
        "href": "https://x.com/riti2409/status/1920109458325438649",
        "img": "https://takeuforward.org/static/media/tweet-1920109458325438649.28f1000acd383a730262.webp"
    },
    {
        "href": "https://x.com/annanya01S/status/1920108994728747190",
        "img": "https://takeuforward.org/static/media/tweet-1920108994728747190.a05ec53de1bbb7f409c6.webp"
    },
    {
        "href": "https://x.com/Abhishe54522361/status/1920108655166607431",
        "img": "https://takeuforward.org/static/media/tweet-1920108655166607431.1bb75d64141474886304.webp"
    },
    {
        "href": "https://x.com/sniperdotdev/status/1920107393083666702",
        "img": "https://takeuforward.org/static/media/tweet-1920107393083666702.2370f8f1a45b159f5207.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image15.f97087ef18512aa23422.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image16.12702d77f3745c056bf8.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image17.79eefa09f041c023e785.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image18.7fde2c37574970db8d09.webp"
    },
    {
        "href": "https://x.com/EngineerS90050/status/1920144867264454689",
        "img": "https://takeuforward.org/static/media/tweet-1920144867264454689.69392ef9aa22201afe1a.webp"
    },
    {
        "href": "https://x.com/cns_varun/status/1920124998536290618",
        "msg": "Loving the new upgrade! The UI is super clean now, the old one felt bit congested.   Progress tracking  and category wise separation is 🔥. Coolest part for me?  DSA filtering by company! Total game changer.  BTW, any update on HLD content? 👀",
        "img": "https://takeuforward.org/static/media/tweet-1920124998536290618.128f160ce632e5717e19.webp"
    },
    {
        "href": "https://x.com/Meghana99228121/status/1920124762199867565",
        "img": "https://takeuforward.org/static/media/tweet-1920124762199867565.4c5508246b82af955d6f.webp"
    },
    {
        "href": "https://x.com/hprasathoff/status/1920119224430723569",
        "img": "https://takeuforward.org/static/media/tweet-1920119224430723569.fae382b17efc9dd4158b.webp"
    },
    {
        "href": "https://x.com/Shivani78280334/status/1920118598984667332",
        "msg": "A big shoutout to TUF+ platform! 🚀 Premium UI with a structured learning content. The best part is it includes all the content now - DSA, OOPS, DBMS, Verbal Ability, Logical Reasoning, Low Level Design, Operation System. All under one stop 💫 ",
        "img": "https://takeuforward.org/static/media/tweet-1920118598984667332.40516682ca95174089c4.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image19.fe2d637aeae09729eceb.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image20.60822084d65e6752d17b.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image21.3c89230fa19b55962177.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image22.89d7611c935c01271b9d.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image23.04cd1cc6ed27c405b56b.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image24.5aae3268da973e06f29d.webp"
    },
    {
        "href": "https://x.com/Adarsh2028/status/1920101427243880545",
        "img": "https://takeuforward.org/static/media/tweet-1920101427243880545.1a3d7472498948377157.webp"
    },
    {
        "href": "https://x.com/sameerlove4u2/status/1920101001454878728",
        "img": "https://takeuforward.org/static/media/tweet-1920101001454878728.ce6659e99e9c7d29cda3.webp"
    },
    {
        "href": "https://x.com/PixelNiladri/status/1920101098821738589",
        "img": "https://takeuforward.org/static/media/tweet-1920101098821738589.292297ad7ab15f7ec74c.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image25.3923b3c5d11ccbbeba15.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image26.475137ab4090cc884c27.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image27.457e2bae6aa93f0f6799.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image1.585754f0c0062a03812d.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image2.7df961986a7f027af973.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image3.6dc959fa96feb9a80797.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image4.fa520381fb785ece7d5c.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image5.3447f2eac4fd77386763.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image6.03f1e04c4181edd1c665.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image7.f9ae7699151ecd49bdf4.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image8.422b90702348b27e88d4.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image9.c16ee8e518af51a044df.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image10.0ec62d2ba1e10886d71d.webp"
    },
    {
        "href": "https://x.com/Prathamjava/status/1920144072326737938",
        "img": "https://takeuforward.org/static/media/tweet-1920144072326737938.24f34c3f19eb0c848955.webp"
    },
    {
        "href": "https://x.com/Oppbhai20/status/1920138268936634713",
        "img": "https://takeuforward.org/static/media/tweet-1920138268936634713.fedd44bbd8e4888a6c62.webp"
    },
    {
        "href": "https://x.com/Goss_Gowtham/status/1920128636176494895",
        "img": "https://takeuforward.org/static/media/tweet-1920128636176494895.eb7b0ed2c46cca0e8ebb.webp"
    },
    {
        "href": "https://x.com/abhaypande64436/status/1920127183147642925",
        "img": "https://takeuforward.org/static/media/tweet-1920127183147642925.c45dd2fa27a5477866cb.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image11.8059be0d2d8b11da5e49.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image12.b4417b7634837c3b4aff.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image13.4eb95e6b111337b1a825.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image14.62282bb7ed8f395a7b0b.webp"
    },
    {
        "href": "https://x.com/TheSDELad/status/1920115409753141523",
        "img": "https://takeuforward.org/static/media/tweet-1920115409753141523.22abf3b02b2ece71b40c.webp"
    },
    {
        "href": "https://x.com/nikhil_2200/status/1920110702729080942",
        "img": "https://takeuforward.org/static/media/tweet-1920110702729080942.60ba3348c45d4f493172.webp"
    },
    {
        "href": "https://x.com/RizonKumar/status/1920111531305423241",
        "img": "https://takeuforward.org/static/media/tweet-1920111531305423241.aa1761027367ef56c043.webp"
    },
    {
        "href": "https://x.com/riti2409/status/1920109458325438649",
        "img": "https://takeuforward.org/static/media/tweet-1920109458325438649.28f1000acd383a730262.webp"
    },
    {
        "href": "https://x.com/annanya01S/status/1920108994728747190",
        "img": "https://takeuforward.org/static/media/tweet-1920108994728747190.a05ec53de1bbb7f409c6.webp"
    },
    {
        "href": "https://x.com/Abhishe54522361/status/1920108655166607431",
        "img": "https://takeuforward.org/static/media/tweet-1920108655166607431.1bb75d64141474886304.webp"
    },
    {
        "href": "https://x.com/sniperdotdev/status/1920107393083666702",
        "img": "https://takeuforward.org/static/media/tweet-1920107393083666702.2370f8f1a45b159f5207.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image15.f97087ef18512aa23422.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image16.12702d77f3745c056bf8.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image17.79eefa09f041c023e785.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image18.7fde2c37574970db8d09.webp"
    },
    {
        "href": "https://x.com/EngineerS90050/status/1920144867264454689",
        "img": "https://takeuforward.org/static/media/tweet-1920144867264454689.69392ef9aa22201afe1a.webp"
    },
    {
        "href": "https://x.com/cns_varun/status/1920124998536290618",
        "img": "https://takeuforward.org/static/media/tweet-1920124998536290618.128f160ce632e5717e19.webp"
    },
    {
        "href": "https://x.com/Meghana99228121/status/1920124762199867565",
        "img": "https://takeuforward.org/static/media/tweet-1920124762199867565.4c5508246b82af955d6f.webp"
    },
    {
        "href": "https://x.com/hprasathoff/status/1920119224430723569",
        "img": "https://takeuforward.org/static/media/tweet-1920119224430723569.fae382b17efc9dd4158b.webp"
    },
    {
        "href": "https://x.com/Shivani78280334/status/1920118598984667332",
        "img": "https://takeuforward.org/static/media/tweet-1920118598984667332.40516682ca95174089c4.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image19.fe2d637aeae09729eceb.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image20.60822084d65e6752d17b.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image21.3c89230fa19b55962177.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image22.89d7611c935c01271b9d.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image23.04cd1cc6ed27c405b56b.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image24.5aae3268da973e06f29d.webp"
    },
    {
        "href": "https://x.com/Adarsh2028/status/1920101427243880545",
        "img": "https://takeuforward.org/static/media/tweet-1920101427243880545.1a3d7472498948377157.webp"
    },
    {
        "href": "https://x.com/sameerlove4u2/status/1920101001454878728",
        "img": "https://takeuforward.org/static/media/tweet-1920101001454878728.ce6659e99e9c7d29cda3.webp"
    },
    {
        "href": "https://x.com/PixelNiladri/status/1920101098821738589",
        "img": "https://takeuforward.org/static/media/tweet-1920101098821738589.292297ad7ab15f7ec74c.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image25.3923b3c5d11ccbbeba15.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image26.475137ab4090cc884c27.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image27.457e2bae6aa93f0f6799.webp"
    },
    {
        "href": "https://x.com/whatkashish/status/1918670122866340101",
        "img": "https://takeuforward.org/static/media/tweet-1918670122866340101.b352c5ccb16954b0e926.webp"
    },
    {
        "href": "https://x.com/sigmadev234/status/1918365851155116533",
        "img": "https://takeuforward.org/static/media/tweet-1918365851155116533.92871de7b85c1a3bb7a0.webp"
    },
    {
        "href": "https://x.com/FafdaJalebie/status/1918360255983231416",
        "img": "https://takeuforward.org/static/media/tweet-1918360255983231416.1f43c59edf6af4cac1f3.webp"
    },
    {
        "href": "https://x.com/ankushdharkar/status/1918379372635144399",
        "img": "https://takeuforward.org/static/media/tweet-1918379372635144399.83cdbdab922947233e50.webp"
    },
    {
        "href": "https://x.com/drummatick/status/1918365819823854007",
        "img": "https://takeuforward.org/static/media/tweet-1918365819823854007.7ef1fac3385b28a1a7b5.webp"
    },
    {
        "href": "https://x.com/riti2409/status/1918638695806275982",
        "img": "https://takeuforward.org/static/media/tweet-1918638695806275982.d5bf956ca485053c468a.webp"
    },
    {
        "href": "https://x.com/archiexzzz/status/1918364066168402145",
        "img": "https://takeuforward.org/static/media/tweet-1918364066168402145.82f6ffe6ac8ac474498a.webp"
    },
    {
        "href": "https://x.com/vjsinsights/status/1918610644409958602",
        "img": "https://takeuforward.org/static/media/tweet-1918610644409958602.1322494a8cec17d7b767.webp"
    },
    {
        "href": "https://x.com/kapilyadav2210/status/1918385990835593361",
        "img": "https://takeuforward.org/static/media/tweet-1918385990835593361.58dd2255b2634db0b4e3.webp"
    },
    {
        "href": "https://x.com/theashishshahh/status/1920181059561664898",
        "img": "https://takeuforward.org/static/media/tweet-1920181059561664898.c55fad37e1ad9946621e.webp"
    },
    {
        "href": "https://x.com/Riyaaaa265/status/1920175026105455052",
        "img": "https://takeuforward.org/static/media/tweet-1920175026105455052.332ef65ae6245e741b61.webp"
    },
    {
        "href": "https://x.com/yashvardhandho3/status/1920163375884964121",
        "img": "https://takeuforward.org/static/media/tweet-1920163375884964121.0a7aced0f059014708ea.webp"
    },
    {
        "href": "https://x.com/deveshsainii/status/1920169766091731379",
        "img": "https://takeuforward.org/static/media/tweet-1920169766091731379.cd5e8296513ebc2523a3.webp"
    },
    {
        "href": "https://x.com/gstark99/status/1920169655798272101",
        "img": "https://takeuforward.org/static/media/tweet-1920169655798272101.f2725d3e480ddcbad9c9.webp"
    },
    {
        "href": "https://x.com/rahulguptaa29/status/1920151211795226932",
        "img": "https://takeuforward.org/static/media/tweet-1920151211795226932.9c9ef6317b8c65196ad5.webp"
    },
    {
        "href": "https://x.com/basak_b81016/status/1920118218540130357",
        "img": "https://takeuforward.org/static/media/tweet-1920118218540130357.7f32f0dd9472e57849b2.webp"
    },
    {
        "href": "https://x.com/Jethalal_69/status/1920118097014600141",
        "img": "https://takeuforward.org/static/media/tweet-1920118097014600141.0b9c06f2fadf11c85a1c.webp"
    },
    {
        "href": "https://x.com/ragz1330/status/1920114785959735603",
        "img": "https://takeuforward.org/static/media/tweet-1920114785959735603.6129dc9a8becc06c76dc.webp"
    },
    {
        "href": "https://x.com/soumxyz05/status/1920115392992678363",
        "img": "https://takeuforward.org/static/media/tweet-1920115392992678363.76007dda84accd6cbe5e.webp"
    },
    {
        "href": "https://x.com/amitbh6/status/1920115396893684183",
        "img": "https://takeuforward.org/static/media/tweet-1920115396893684183.24fbedea210eb5be09c7.webp"
    },
    {
        "href": "https://x.com/elvinrdrigues_/status/1920106037329191289",
        "img": "https://takeuforward.org/static/media/tweet-1920106037329191289.18f7bda1fe1cdd372341.webp"
    },
    {
        "href": "https://x.com/Priynshuchouhn/status/1920102730108186652",
        "img": "https://takeuforward.org/static/media/tweet-1920102730108186652.034f7754651efbe6658a.webp"
    },
    {
        "href": "https://x.com/raghu_cpp/status/1920103053543227733",
        "img": "https://takeuforward.org/static/media/tweet-1920103053543227733.7b95c685330e7ebe3cb9.webp"
    },
    {
        "href": "https://x.com/sarakasaraansh/status/1920102976993030341",
        "img": "https://takeuforward.org/static/media/tweet-1920102976993030341.aec4365f14a203edc440.webp"
    },
    {
        "href": "https://x.com/adml003/status/1920103011096932526",
        "img": "https://takeuforward.org/static/media/tweet-1920103011096932526.ff8b90157b6ed901fecb.webp"
    },
    {
        "href": "https://x.com/0madmax/status/1920102287856591299",
        "img": "https://takeuforward.org/static/media/tweet-1920102287856591299.5c7ee2b01b6bc9dab0e6.webp"
    },
    {
        "href": "https://x.com/arpitranjan010/status/1920101777829232859",
        "img": "https://takeuforward.org/static/media/tweet-1920101777829232859.7557ff5ab656d71c01d4.webp"
    },
    {
        "href": "https://x.com/Aaditya1_6/status/1920100512810127608",
        "img": "https://takeuforward.org/static/media/tweet-1920100512810127608.24095d1d2c5dbd990d0d.webp"
    },
    {
        "href": "https://x.com/punyakrit_22/status/1920099424853799283",
        "img": "https://takeuforward.org/static/media/tweet-1920099424853799283.60f67156398228eaefcc.webp"
    },
    {
        "href": "https://x.com/prayagtushar/status/1920096891523469705",
        "img": "https://takeuforward.org/static/media/tweet-1920096891523469705.63947a917d7fafc114cc.webp"
    },
    {
        "href": "https://x.com/piyushk1302/status/1920094504507367725",
        "img": "https://takeuforward.org/static/media/tweet-1920094504507367725.0704e6d836da952c4cb8.webp"
    },
    {
        "href": "https://x.com/heyy_aryann/status/1920185034939445587",
        "img": "https://takeuforward.org/static/media/tweet-1920185034939445587.9703e00579df5e9543df.webp"
    },
    {
        "href": "https://x.com/whatkashish/status/1918670122866340101",
        "img": "https://takeuforward.org/static/media/tweet-1918670122866340101.b352c5ccb16954b0e926.webp"
    },
    {
        "href": "https://x.com/sigmadev234/status/1918365851155116533",
        "img": "https://takeuforward.org/static/media/tweet-1918365851155116533.92871de7b85c1a3bb7a0.webp"
    },
    {
        "href": "https://x.com/FafdaJalebie/status/1918360255983231416",
        "img": "https://takeuforward.org/static/media/tweet-1918360255983231416.1f43c59edf6af4cac1f3.webp"
    },
    {
        "href": "https://x.com/ankushdharkar/status/1918379372635144399",
        "img": "https://takeuforward.org/static/media/tweet-1918379372635144399.83cdbdab922947233e50.webp"
    },
    {
        "href": "https://x.com/drummatick/status/1918365819823854007",
        "img": "https://takeuforward.org/static/media/tweet-1918365819823854007.7ef1fac3385b28a1a7b5.webp"
    },
    {
        "href": "https://x.com/riti2409/status/1918638695806275982",
        "img": "https://takeuforward.org/static/media/tweet-1918638695806275982.d5bf956ca485053c468a.webp"
    },
    {
        "href": "https://x.com/archiexzzz/status/1918364066168402145",
        "img": "https://takeuforward.org/static/media/tweet-1918364066168402145.82f6ffe6ac8ac474498a.webp"
    },
    {
        "href": "https://x.com/vjsinsights/status/1918610644409958602",
        "img": "https://takeuforward.org/static/media/tweet-1918610644409958602.1322494a8cec17d7b767.webp"
    },
    {
        "href": "https://x.com/kapilyadav2210/status/1918385990835593361",
        "img": "https://takeuforward.org/static/media/tweet-1918385990835593361.58dd2255b2634db0b4e3.webp"
    },
    {
        "href": "https://x.com/theashishshahh/status/1920181059561664898",
        "img": "https://takeuforward.org/static/media/tweet-1920181059561664898.c55fad37e1ad9946621e.webp"
    },
    {
        "href": "https://x.com/Riyaaaa265/status/1920175026105455052",
        "img": "https://takeuforward.org/static/media/tweet-1920175026105455052.332ef65ae6245e741b61.webp"
    },
    {
        "href": "https://x.com/yashvardhandho3/status/1920163375884964121",
        "img": "https://takeuforward.org/static/media/tweet-1920163375884964121.0a7aced0f059014708ea.webp"
    },
    {
        "href": "https://x.com/deveshsainii/status/1920169766091731379",
        "img": "https://takeuforward.org/static/media/tweet-1920169766091731379.cd5e8296513ebc2523a3.webp"
    },
    {
        "href": "https://x.com/gstark99/status/1920169655798272101",
        "img": "https://takeuforward.org/static/media/tweet-1920169655798272101.f2725d3e480ddcbad9c9.webp"
    },
    {
        "href": "https://x.com/rahulguptaa29/status/1920151211795226932",
        "img": "https://takeuforward.org/static/media/tweet-1920151211795226932.9c9ef6317b8c65196ad5.webp"
    },
    {
        "href": "https://x.com/basak_b81016/status/1920118218540130357",
        "img": "https://takeuforward.org/static/media/tweet-1920118218540130357.7f32f0dd9472e57849b2.webp"
    },
    {
        "href": "https://x.com/Jethalal_69/status/1920118097014600141",
        "img": "https://takeuforward.org/static/media/tweet-1920118097014600141.0b9c06f2fadf11c85a1c.webp"
    },
    {
        "href": "https://x.com/ragz1330/status/1920114785959735603",
        "img": "https://takeuforward.org/static/media/tweet-1920114785959735603.6129dc9a8becc06c76dc.webp"
    },
    {
        "href": "https://x.com/soumxyz05/status/1920115392992678363",
        "img": "https://takeuforward.org/static/media/tweet-1920115392992678363.76007dda84accd6cbe5e.webp"
    },
    {
        "href": "https://x.com/amitbh6/status/1920115396893684183",
        "img": "https://takeuforward.org/static/media/tweet-1920115396893684183.24fbedea210eb5be09c7.webp"
    },
    {
        "href": "https://x.com/elvinrdrigues_/status/1920106037329191289",
        "img": "https://takeuforward.org/static/media/tweet-1920106037329191289.18f7bda1fe1cdd372341.webp"
    },
    {
        "href": "https://x.com/Priynshuchouhn/status/1920102730108186652",
        "img": "https://takeuforward.org/static/media/tweet-1920102730108186652.034f7754651efbe6658a.webp"
    },
    {
        "href": "https://x.com/raghu_cpp/status/1920103053543227733",
        "img": "https://takeuforward.org/static/media/tweet-1920103053543227733.7b95c685330e7ebe3cb9.webp"
    },
    {
        "href": "https://x.com/sarakasaraansh/status/1920102976993030341",
        "img": "https://takeuforward.org/static/media/tweet-1920102976993030341.aec4365f14a203edc440.webp"
    },
    {
        "href": "https://x.com/adml003/status/1920103011096932526",
        "img": "https://takeuforward.org/static/media/tweet-1920103011096932526.ff8b90157b6ed901fecb.webp"
    },
    {
        "href": "https://x.com/0madmax/status/1920102287856591299",
        "img": "https://takeuforward.org/static/media/tweet-1920102287856591299.5c7ee2b01b6bc9dab0e6.webp"
    },
    {
        "href": "https://x.com/arpitranjan010/status/1920101777829232859",
        "img": "https://takeuforward.org/static/media/tweet-1920101777829232859.7557ff5ab656d71c01d4.webp"
    },
    {
        "href": "https://x.com/Aaditya1_6/status/1920100512810127608",
        "img": "https://takeuforward.org/static/media/tweet-1920100512810127608.24095d1d2c5dbd990d0d.webp"
    },
    {
        "href": "https://x.com/punyakrit_22/status/1920099424853799283",
        "img": "https://takeuforward.org/static/media/tweet-1920099424853799283.60f67156398228eaefcc.webp"
    },
    {
        "href": "https://x.com/prayagtushar/status/1920096891523469705",
        "img": "https://takeuforward.org/static/media/tweet-1920096891523469705.63947a917d7fafc114cc.webp"
    },
    {
        "href": "https://x.com/piyushk1302/status/1920094504507367725",
        "img": "https://takeuforward.org/static/media/tweet-1920094504507367725.0704e6d836da952c4cb8.webp"
    },
    {
        "href": "https://x.com/heyy_aryann/status/1920185034939445587",
        "img": "https://takeuforward.org/static/media/tweet-1920185034939445587.9703e00579df5e9543df.webp"
    },
    {
        "href": "https://x.com/prayagtushar/status/1920096891523469705",
        "img": "https://takeuforward.org/static/media/tweet-1920096891523469705.63947a917d7fafc114cc.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image1.585754f0c0062a03812d.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image2.7df961986a7f027af973.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image3.6dc959fa96feb9a80797.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image4.fa520381fb785ece7d5c.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image5.3447f2eac4fd77386763.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image6.03f1e04c4181edd1c665.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image7.f9ae7699151ecd49bdf4.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image8.422b90702348b27e88d4.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image9.c16ee8e518af51a044df.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image10.0ec62d2ba1e10886d71d.webp"
    },
    {
        "href": "https://x.com/Prathamjava/status/1920144072326737938",
        "img": "https://takeuforward.org/static/media/tweet-1920144072326737938.24f34c3f19eb0c848955.webp"
    },
    {
        "href": "https://x.com/Oppbhai20/status/1920138268936634713",
        "img": "https://takeuforward.org/static/media/tweet-1920138268936634713.fedd44bbd8e4888a6c62.webp"
    },
    {
        "href": "https://x.com/Goss_Gowtham/status/1920128636176494895",
        "img": "https://takeuforward.org/static/media/tweet-1920128636176494895.eb7b0ed2c46cca0e8ebb.webp"
    },
    {
        "href": "https://x.com/abhaypande64436/status/1920127183147642925",
        "img": "https://takeuforward.org/static/media/tweet-1920127183147642925.c45dd2fa27a5477866cb.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image11.8059be0d2d8b11da5e49.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image12.b4417b7634837c3b4aff.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image13.4eb95e6b111337b1a825.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/ravikumar-k-p-80b7a628b_tuf-takeuforward-tuf-ugcPost-7325882549946241025-kZ1C?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image2.29e7f370d41e5b6432ee.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image14.62282bb7ed8f395a7b0b.webp"
    },
    {
        "href": "https://x.com/TheSDELad/status/1920115409753141523",
        "img": "https://takeuforward.org/static/media/tweet-1920115409753141523.22abf3b02b2ece71b40c.webp"
    },
    {
        "href": "https://x.com/nikhil_2200/status/1920110702729080942",
        "img": "https://takeuforward.org/static/media/tweet-1920110702729080942.60ba3348c45d4f493172.webp"
    },
    {
        "href": "https://x.com/RizonKumar/status/1920111531305423241",
        "img": "https://takeuforward.org/static/media/tweet-1920111531305423241.aa1761027367ef56c043.webp"
    },
    {
        "href": "https://x.com/riti2409/status/1920109458325438649",
        "img": "https://takeuforward.org/static/media/tweet-1920109458325438649.28f1000acd383a730262.webp"
    },
    {
        "href": "https://x.com/annanya01S/status/1920108994728747190",
        "img": "https://takeuforward.org/static/media/tweet-1920108994728747190.a05ec53de1bbb7f409c6.webp"
    },
    {
        "href": "https://x.com/Abhishe54522361/status/1920108655166607431",
        "img": "https://takeuforward.org/static/media/tweet-1920108655166607431.1bb75d64141474886304.webp"
    },
    {
        "href": "https://x.com/sniperdotdev/status/1920107393083666702",
        "img": "https://takeuforward.org/static/media/tweet-1920107393083666702.2370f8f1a45b159f5207.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image15.f97087ef18512aa23422.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image16.12702d77f3745c056bf8.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image17.79eefa09f041c023e785.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image18.7fde2c37574970db8d09.webp"
    },
    {
        "href": "https://x.com/EngineerS90050/status/1920144867264454689",
        "img": "https://takeuforward.org/static/media/tweet-1920144867264454689.69392ef9aa22201afe1a.webp"
    },
    {
        "href": "https://x.com/cns_varun/status/1920124998536290618",
        "img": "https://takeuforward.org/static/media/tweet-1920124998536290618.128f160ce632e5717e19.webp"
    },
    {
        "href": "https://x.com/Meghana99228121/status/1920124762199867565",
        "img": "https://takeuforward.org/static/media/tweet-1920124762199867565.4c5508246b82af955d6f.webp"
    },
    {
        "href": "https://x.com/hprasathoff/status/1920119224430723569",
        "img": "https://takeuforward.org/static/media/tweet-1920119224430723569.fae382b17efc9dd4158b.webp"
    },
    {
        "href": "https://x.com/Shivani78280334/status/1920118598984667332",
        "img": "https://takeuforward.org/static/media/tweet-1920118598984667332.40516682ca95174089c4.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image19.fe2d637aeae09729eceb.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image20.60822084d65e6752d17b.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image21.3c89230fa19b55962177.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image22.89d7611c935c01271b9d.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image23.04cd1cc6ed27c405b56b.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image24.5aae3268da973e06f29d.webp"
    },
    {
        "href": "https://x.com/Adarsh2028/status/1920101427243880545",
        "img": "https://takeuforward.org/static/media/tweet-1920101427243880545.1a3d7472498948377157.webp"
    },
    {
        "href": "https://x.com/riti2409/status/1918638695806275982",
        "img": "https://takeuforward.org/static/media/tweet-1918638695806275982.d5bf956ca485053c468a.webp"
    },
    {
        "href": "https://x.com/deveshsainii/status/1920169766091731379",
        "img": "https://takeuforward.org/static/media/tweet-1920169766091731379.cd5e8296513ebc2523a3.webp"
    },
    {
        "href": "https://x.com/sameerlove4u2/status/1920101001454878728",
        "img": "https://takeuforward.org/static/media/tweet-1920101001454878728.ce6659e99e9c7d29cda3.webp"
    },
    {
        "href": "https://x.com/PixelNiladri/status/1920101098821738589",
        "img": "https://takeuforward.org/static/media/tweet-1920101098821738589.292297ad7ab15f7ec74c.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image25.3923b3c5d11ccbbeba15.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image26.475137ab4090cc884c27.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image27.457e2bae6aa93f0f6799.webp"
    },
    {
        "href": "https://x.com/raghu_cpp/status/1920103053543227733",
        "img": "https://takeuforward.org/static/media/tweet-1920103053543227733.7b95c685330e7ebe3cb9.webp"
    },
    {
        "href": "https://x.com/elvinrdrigues_/status/1920106037329191289",
        "img": "https://takeuforward.org/static/media/tweet-1920106037329191289.18f7bda1fe1cdd372341.webp"
    },
    {
        "href": "https://x.com/kapilyadav2210/status/1918385990835593361",
        "img": "https://takeuforward.org/static/media/tweet-1918385990835593361.58dd2255b2634db0b4e3.webp"
    },
    {
        "href": "https://x.com/soumxyz05/status/1920115392992678363",
        "img": "https://takeuforward.org/static/media/tweet-1920115392992678363.76007dda84accd6cbe5e.webp"
    },
    {
        "href": "https://x.com/heyy_aryann/status/1920185034939445587",
        "img": "https://takeuforward.org/static/media/tweet-1920185034939445587.9703e00579df5e9543df.webp"
    },
    {
        "href": "https://x.com/ankushdharkar/status/1918379372635144399",
        "img": "https://takeuforward.org/static/media/tweet-1918379372635144399.83cdbdab922947233e50.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/gaurav-raj-091215310_tuf-v3-is-here-amazed-raj-vikramaditya-activity-7325886791889145858-gRo_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image16.702328e92372d094e25c.webp"
    },
    {
        "href": "https://x.com/punyakrit_22/status/1920099424853799283",
        "img": "https://takeuforward.org/static/media/tweet-1920099424853799283.60f67156398228eaefcc.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/kartik-kaushik-00084415a_tufplus-striver-rajvikramaditya-activity-7326147374307778560-9WNq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image3.3c6a00c782580369ae0a.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/kaviya-arunagiri_tufv3-takeuforward-dsa-activity-7325890879708155904-QfkD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image.b9543cdb9bde63b5c7e3.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/simran-savita_tufv3-striver-takeuforward-activity-7326114898264940544-FDf7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image5.352195e8f298c1127c86.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/theashishshahh_dope-uiand-one-stop-for-everything-loved-activity-7325950196939419648-6wTh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image10.811078424268889660ee.webp"
    },
    {
        "href": "https://x.com/yashvardhandho3/status/1920163375884964121",
        "img": "https://takeuforward.org/static/media/tweet-1920163375884964121.0a7aced0f059014708ea.webp"
    },
    {
        "href": "https://x.com/0madmax/status/1920102287856591299",
        "img": "https://takeuforward.org/static/media/tweet-1920102287856591299.5c7ee2b01b6bc9dab0e6.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/swayamshree-mohanty-a241b31a0_just-received-the-takeuforward-v3-update-activity-7325896693541982208-g1ZY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image14.107f99c432ec44a7ee8b.webp"
    },
    {
        "href": "https://x.com/Riyaaaa265/status/1920175026105455052",
        "img": "https://takeuforward.org/static/media/tweet-1920175026105455052.332ef65ae6245e741b61.webp"
    },
    {
        "href": "https://x.com/ragz1330/status/1920114785959735603",
        "img": "https://takeuforward.org/static/media/tweet-1920114785959735603.6129dc9a8becc06c76dc.webp"
    },
    {
        "href": "https://x.com/basak_b81016/status/1920118218540130357",
        "img": "https://takeuforward.org/static/media/tweet-1920118218540130357.7f32f0dd9472e57849b2.webp"
    },
    {
        "href": "https://x.com/piyushk1302/status/1920094504507367725",
        "img": "https://takeuforward.org/static/media/tweet-1920094504507367725.0704e6d836da952c4cb8.webp"
    },
    {
        "href": "https://x.com/Aaditya1_6/status/1920100512810127608",
        "img": "https://takeuforward.org/static/media/tweet-1920100512810127608.24095d1d2c5dbd990d0d.webp"
    },
    {
        "href": "https://x.com/gstark99/status/1920169655798272101",
        "img": "https://takeuforward.org/static/media/tweet-1920169655798272101.f2725d3e480ddcbad9c9.webp"
    },
    {
        "href": "https://x.com/theashishshahh/status/1920181059561664898",
        "img": "https://takeuforward.org/static/media/tweet-1920181059561664898.c55fad37e1ad9946621e.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/ankit-orion_takeuforward-v3-is-finally-out-and-it-activity-7325885585384968192-y97k?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image1.4d51e6035bc0b35913f4.webp"
    },
    {
        "href": "https://x.com/arpitranjan010/status/1920101777829232859",
        "img": "https://takeuforward.org/static/media/tweet-1920101777829232859.7557ff5ab656d71c01d4.webp"
    },
    {
        "href": "https://x.com/whatkashish/status/1918670122866340101",
        "img": "https://takeuforward.org/static/media/tweet-1918670122866340101.b352c5ccb16954b0e926.webp"
    },
    {
        "href": "https://x.com/amitbh6/status/1920115396893684183",
        "img": "https://takeuforward.org/static/media/tweet-1920115396893684183.24fbedea210eb5be09c7.webp"
    },
    {
        "href": "https://x.com/Jethalal_69/status/1920118097014600141",
        "img": "https://takeuforward.org/static/media/tweet-1920118097014600141.0b9c06f2fadf11c85a1c.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/rishi-panchal-309368252_tufplus-takeuforward-rajvikramaditya-activity-7325967232302219266-BkIs?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image8.8cefba103bec5f3e754b.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/aditya-katoch-23b94526b_tuf-v3-is-here-and-its-a-game-changer-activity-7325953033127768067-Yyro?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image9.31688fc31e769fde14a0.webp"
    },
    {
        "href": "https://x.com/sigmadev234/status/1918365851155116533",
        "img": "https://takeuforward.org/static/media/tweet-1918365851155116533.92871de7b85c1a3bb7a0.webp"
    },
    {
        "href": "https://x.com/drummatick/status/1918365819823854007",
        "img": "https://takeuforward.org/static/media/tweet-1918365819823854007.7ef1fac3385b28a1a7b5.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/hemanth-anuginti_dsa-systemdesign-machinelearning-activity-7326114229005029376-vDvg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image6.0d31b4ad0bc8eecf91d3.webp"
    },
    {
        "href": "https://x.com/sarakasaraansh/status/1920102976993030341",
        "img": "https://takeuforward.org/static/media/tweet-1920102976993030341.aec4365f14a203edc440.webp"
    },
    {
        "href": "https://x.com/Priynshuchouhn/status/1920102730108186652",
        "img": "https://takeuforward.org/static/media/tweet-1920102730108186652.034f7754651efbe6658a.webp"
    },
    {
        "href": "https://x.com/FafdaJalebie/status/1918360255983231416",
        "img": "https://takeuforward.org/static/media/tweet-1918360255983231416.1f43c59edf6af4cac1f3.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/suman-mula18_striver-lld-systemdesign-activity-7326111802868563969-RoVQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image7.45032f132ec979320314.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/roger-barreto-a8081a156_striver-tuf-dsa-activity-7326115196811276291-U2al?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image4.69a83a1f072ed062b471.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/vijaycham_tufv3-striver-takeuforward-activity-7325902570068070400-YBmr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image13.a213f78254fc80254c2b.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/prafulkatare_tuf-tufplus-striver-activity-7325937950465097728-ltqL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image11.37938829bdfc5bb238af.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/rokhit-r-a40aa0189_dsa-striver-takeuforward-activity-7325907811261911040-roXE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image12.7efc7e61e125e921296d.webp"
    },
    {
        "href": "https://x.com/vjsinsights/status/1918610644409958602",
        "img": "https://takeuforward.org/static/media/tweet-1918610644409958602.1322494a8cec17d7b767.webp"
    },
    {
        "href": "https://x.com/adml003/status/1920103011096932526",
        "img": "https://takeuforward.org/static/media/tweet-1920103011096932526.ff8b90157b6ed901fecb.webp"
    },
    {
        "href": "https://x.com/archiexzzz/status/1918364066168402145",
        "img": "https://takeuforward.org/static/media/tweet-1918364066168402145.82f6ffe6ac8ac474498a.webp"
    },
    {
        "href": "https://x.com/rahulguptaa29/status/1920151211795226932",
        "img": "https://takeuforward.org/static/media/tweet-1920151211795226932.9c9ef6317b8c65196ad5.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/avinagupta-programmer_tuf-dsarevolution-codingprep-activity-7325892505625866240-qfH7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image15.cd18b7044669ec74763c.webp"
    },
    {
        "href": "https://x.com/prayagtushar/status/1920096891523469705",
        "img": "https://takeuforward.org/static/media/tweet-1920096891523469705.63947a917d7fafc114cc.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image1.585754f0c0062a03812d.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image2.7df961986a7f027af973.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image3.6dc959fa96feb9a80797.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image4.fa520381fb785ece7d5c.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image5.3447f2eac4fd77386763.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image6.03f1e04c4181edd1c665.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image7.f9ae7699151ecd49bdf4.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image8.422b90702348b27e88d4.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image9.c16ee8e518af51a044df.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image10.0ec62d2ba1e10886d71d.webp"
    },
    {
        "href": "https://x.com/Prathamjava/status/1920144072326737938",
        "img": "https://takeuforward.org/static/media/tweet-1920144072326737938.24f34c3f19eb0c848955.webp"
    },
    {
        "href": "https://x.com/Oppbhai20/status/1920138268936634713",
        "img": "https://takeuforward.org/static/media/tweet-1920138268936634713.fedd44bbd8e4888a6c62.webp"
    },
    {
        "href": "https://x.com/Goss_Gowtham/status/1920128636176494895",
        "img": "https://takeuforward.org/static/media/tweet-1920128636176494895.eb7b0ed2c46cca0e8ebb.webp"
    },
    {
        "href": "https://x.com/abhaypande64436/status/1920127183147642925",
        "img": "https://takeuforward.org/static/media/tweet-1920127183147642925.c45dd2fa27a5477866cb.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image11.8059be0d2d8b11da5e49.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image12.b4417b7634837c3b4aff.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image13.4eb95e6b111337b1a825.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/ravikumar-k-p-80b7a628b_tuf-takeuforward-tuf-ugcPost-7325882549946241025-kZ1C?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image2.29e7f370d41e5b6432ee.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image14.62282bb7ed8f395a7b0b.webp"
    },
    {
        "href": "https://x.com/TheSDELad/status/1920115409753141523",
        "img": "https://takeuforward.org/static/media/tweet-1920115409753141523.22abf3b02b2ece71b40c.webp"
    },
    {
        "href": "https://x.com/nikhil_2200/status/1920110702729080942",
        "img": "https://takeuforward.org/static/media/tweet-1920110702729080942.60ba3348c45d4f493172.webp"
    },
    {
        "href": "https://x.com/RizonKumar/status/1920111531305423241",
        "img": "https://takeuforward.org/static/media/tweet-1920111531305423241.aa1761027367ef56c043.webp"
    },
    {
        "href": "https://x.com/riti2409/status/1920109458325438649",
        "img": "https://takeuforward.org/static/media/tweet-1920109458325438649.28f1000acd383a730262.webp"
    },
    {
        "href": "https://x.com/annanya01S/status/1920108994728747190",
        "img": "https://takeuforward.org/static/media/tweet-1920108994728747190.a05ec53de1bbb7f409c6.webp"
    },
    {
        "href": "https://x.com/Abhishe54522361/status/1920108655166607431",
        "img": "https://takeuforward.org/static/media/tweet-1920108655166607431.1bb75d64141474886304.webp"
    },
    {
        "href": "https://x.com/sniperdotdev/status/1920107393083666702",
        "img": "https://takeuforward.org/static/media/tweet-1920107393083666702.2370f8f1a45b159f5207.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image15.f97087ef18512aa23422.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image16.12702d77f3745c056bf8.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image17.79eefa09f041c023e785.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image18.7fde2c37574970db8d09.webp"
    },
    {
        "href": "https://x.com/EngineerS90050/status/1920144867264454689",
        "img": "https://takeuforward.org/static/media/tweet-1920144867264454689.69392ef9aa22201afe1a.webp"
    },
    {
        "href": "https://x.com/cns_varun/status/1920124998536290618",
        "img": "https://takeuforward.org/static/media/tweet-1920124998536290618.128f160ce632e5717e19.webp"
    },
    {
        "href": "https://x.com/Meghana99228121/status/1920124762199867565",
        "img": "https://takeuforward.org/static/media/tweet-1920124762199867565.4c5508246b82af955d6f.webp"
    },
    {
        "href": "https://x.com/hprasathoff/status/1920119224430723569",
        "img": "https://takeuforward.org/static/media/tweet-1920119224430723569.fae382b17efc9dd4158b.webp"
    },
    {
        "href": "https://x.com/Shivani78280334/status/1920118598984667332",
        "img": "https://takeuforward.org/static/media/tweet-1920118598984667332.40516682ca95174089c4.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image19.fe2d637aeae09729eceb.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image20.60822084d65e6752d17b.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image21.3c89230fa19b55962177.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image22.89d7611c935c01271b9d.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image23.04cd1cc6ed27c405b56b.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image24.5aae3268da973e06f29d.webp"
    },
    {
        "href": "https://x.com/Adarsh2028/status/1920101427243880545",
        "img": "https://takeuforward.org/static/media/tweet-1920101427243880545.1a3d7472498948377157.webp"
    },
    {
        "href": "https://x.com/riti2409/status/1918638695806275982",
        "img": "https://takeuforward.org/static/media/tweet-1918638695806275982.d5bf956ca485053c468a.webp"
    },
    {
        "href": "https://x.com/deveshsainii/status/1920169766091731379",
        "img": "https://takeuforward.org/static/media/tweet-1920169766091731379.cd5e8296513ebc2523a3.webp"
    },
    {
        "href": "https://x.com/sameerlove4u2/status/1920101001454878728",
        "img": "https://takeuforward.org/static/media/tweet-1920101001454878728.ce6659e99e9c7d29cda3.webp"
    },
    {
        "href": "https://x.com/PixelNiladri/status/1920101098821738589",
        "img": "https://takeuforward.org/static/media/tweet-1920101098821738589.292297ad7ab15f7ec74c.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image25.3923b3c5d11ccbbeba15.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image26.475137ab4090cc884c27.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image27.457e2bae6aa93f0f6799.webp"
    },
    {
        "href": "https://x.com/raghu_cpp/status/1920103053543227733",
        "img": "https://takeuforward.org/static/media/tweet-1920103053543227733.7b95c685330e7ebe3cb9.webp"
    },
    {
        "href": "https://x.com/elvinrdrigues_/status/1920106037329191289",
        "img": "https://takeuforward.org/static/media/tweet-1920106037329191289.18f7bda1fe1cdd372341.webp"
    },
    {
        "href": "https://x.com/kapilyadav2210/status/1918385990835593361",
        "img": "https://takeuforward.org/static/media/tweet-1918385990835593361.58dd2255b2634db0b4e3.webp"
    },
    {
        "href": "https://x.com/soumxyz05/status/1920115392992678363",
        "img": "https://takeuforward.org/static/media/tweet-1920115392992678363.76007dda84accd6cbe5e.webp"
    },
    {
        "href": "https://x.com/heyy_aryann/status/1920185034939445587",
        "img": "https://takeuforward.org/static/media/tweet-1920185034939445587.9703e00579df5e9543df.webp"
    },
    {
        "href": "https://x.com/ankushdharkar/status/1918379372635144399",
        "img": "https://takeuforward.org/static/media/tweet-1918379372635144399.83cdbdab922947233e50.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/gaurav-raj-091215310_tuf-v3-is-here-amazed-raj-vikramaditya-activity-7325886791889145858-gRo_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image16.702328e92372d094e25c.webp"
    },
    {
        "href": "https://x.com/punyakrit_22/status/1920099424853799283",
        "img": "https://takeuforward.org/static/media/tweet-1920099424853799283.60f67156398228eaefcc.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/kartik-kaushik-00084415a_tufplus-striver-rajvikramaditya-activity-7326147374307778560-9WNq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image3.3c6a00c782580369ae0a.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/kaviya-arunagiri_tufv3-takeuforward-dsa-activity-7325890879708155904-QfkD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image.b9543cdb9bde63b5c7e3.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/simran-savita_tufv3-striver-takeuforward-activity-7326114898264940544-FDf7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image5.352195e8f298c1127c86.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/theashishshahh_dope-uiand-one-stop-for-everything-loved-activity-7325950196939419648-6wTh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image10.811078424268889660ee.webp"
    },
    {
        "href": "https://x.com/yashvardhandho3/status/1920163375884964121",
        "img": "https://takeuforward.org/static/media/tweet-1920163375884964121.0a7aced0f059014708ea.webp"
    },
    {
        "href": "https://x.com/0madmax/status/1920102287856591299",
        "img": "https://takeuforward.org/static/media/tweet-1920102287856591299.5c7ee2b01b6bc9dab0e6.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/swayamshree-mohanty-a241b31a0_just-received-the-takeuforward-v3-update-activity-7325896693541982208-g1ZY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image14.107f99c432ec44a7ee8b.webp"
    },
    {
        "href": "https://x.com/Riyaaaa265/status/1920175026105455052",
        "img": "https://takeuforward.org/static/media/tweet-1920175026105455052.332ef65ae6245e741b61.webp"
    },
    {
        "href": "https://x.com/ragz1330/status/1920114785959735603",
        "img": "https://takeuforward.org/static/media/tweet-1920114785959735603.6129dc9a8becc06c76dc.webp"
    },
    {
        "href": "https://x.com/basak_b81016/status/1920118218540130357",
        "img": "https://takeuforward.org/static/media/tweet-1920118218540130357.7f32f0dd9472e57849b2.webp"
    },
    {
        "href": "https://x.com/piyushk1302/status/1920094504507367725",
        "img": "https://takeuforward.org/static/media/tweet-1920094504507367725.0704e6d836da952c4cb8.webp"
    },
    {
        "href": "https://x.com/Aaditya1_6/status/1920100512810127608",
        "img": "https://takeuforward.org/static/media/tweet-1920100512810127608.24095d1d2c5dbd990d0d.webp"
    },
    {
        "href": "https://x.com/gstark99/status/1920169655798272101",
        "img": "https://takeuforward.org/static/media/tweet-1920169655798272101.f2725d3e480ddcbad9c9.webp"
    },
    {
        "href": "https://x.com/theashishshahh/status/1920181059561664898",
        "img": "https://takeuforward.org/static/media/tweet-1920181059561664898.c55fad37e1ad9946621e.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/ankit-orion_takeuforward-v3-is-finally-out-and-it-activity-7325885585384968192-y97k?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image1.4d51e6035bc0b35913f4.webp"
    },
    {
        "href": "https://x.com/arpitranjan010/status/1920101777829232859",
        "img": "https://takeuforward.org/static/media/tweet-1920101777829232859.7557ff5ab656d71c01d4.webp"
    },
    {
        "href": "https://x.com/whatkashish/status/1918670122866340101",
        "img": "https://takeuforward.org/static/media/tweet-1918670122866340101.b352c5ccb16954b0e926.webp"
    },
    {
        "href": "https://x.com/amitbh6/status/1920115396893684183",
        "img": "https://takeuforward.org/static/media/tweet-1920115396893684183.24fbedea210eb5be09c7.webp"
    },
    {
        "href": "https://x.com/Jethalal_69/status/1920118097014600141",
        "img": "https://takeuforward.org/static/media/tweet-1920118097014600141.0b9c06f2fadf11c85a1c.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/rishi-panchal-309368252_tufplus-takeuforward-rajvikramaditya-activity-7325967232302219266-BkIs?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image8.8cefba103bec5f3e754b.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/aditya-katoch-23b94526b_tuf-v3-is-here-and-its-a-game-changer-activity-7325953033127768067-Yyro?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image9.31688fc31e769fde14a0.webp"
    },
    {
        "href": "https://x.com/sigmadev234/status/1918365851155116533",
        "img": "https://takeuforward.org/static/media/tweet-1918365851155116533.92871de7b85c1a3bb7a0.webp"
    },
    {
        "href": "https://x.com/drummatick/status/1918365819823854007",
        "img": "https://takeuforward.org/static/media/tweet-1918365819823854007.7ef1fac3385b28a1a7b5.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/hemanth-anuginti_dsa-systemdesign-machinelearning-activity-7326114229005029376-vDvg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image6.0d31b4ad0bc8eecf91d3.webp"
    },
    {
        "href": "https://x.com/sarakasaraansh/status/1920102976993030341",
        "img": "https://takeuforward.org/static/media/tweet-1920102976993030341.aec4365f14a203edc440.webp"
    },
    {
        "href": "https://x.com/Priynshuchouhn/status/1920102730108186652",
        "img": "https://takeuforward.org/static/media/tweet-1920102730108186652.034f7754651efbe6658a.webp"
    },
    {
        "href": "https://x.com/FafdaJalebie/status/1918360255983231416",
        "img": "https://takeuforward.org/static/media/tweet-1918360255983231416.1f43c59edf6af4cac1f3.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/suman-mula18_striver-lld-systemdesign-activity-7326111802868563969-RoVQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image7.45032f132ec979320314.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/roger-barreto-a8081a156_striver-tuf-dsa-activity-7326115196811276291-U2al?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image4.69a83a1f072ed062b471.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/vijaycham_tufv3-striver-takeuforward-activity-7325902570068070400-YBmr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image13.a213f78254fc80254c2b.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/prafulkatare_tuf-tufplus-striver-activity-7325937950465097728-ltqL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image11.37938829bdfc5bb238af.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/rokhit-r-a40aa0189_dsa-striver-takeuforward-activity-7325907811261911040-roXE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image12.7efc7e61e125e921296d.webp"
    },
    {
        "href": "https://x.com/vjsinsights/status/1918610644409958602",
        "img": "https://takeuforward.org/static/media/tweet-1918610644409958602.1322494a8cec17d7b767.webp"
    },
    {
        "href": "https://x.com/adml003/status/1920103011096932526",
        "img": "https://takeuforward.org/static/media/tweet-1920103011096932526.ff8b90157b6ed901fecb.webp"
    },
    {
        "href": "https://x.com/archiexzzz/status/1918364066168402145",
        "img": "https://takeuforward.org/static/media/tweet-1918364066168402145.82f6ffe6ac8ac474498a.webp"
    },
    {
        "href": "https://x.com/rahulguptaa29/status/1920151211795226932",
        "img": "https://takeuforward.org/static/media/tweet-1920151211795226932.9c9ef6317b8c65196ad5.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/avinagupta-programmer_tuf-dsarevolution-codingprep-activity-7325892505625866240-qfH7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image15.cd18b7044669ec74763c.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/ankit-orion_takeuforward-v3-is-finally-out-and-it-activity-7325885585384968192-y97k?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image1.4d51e6035bc0b35913f4.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/ravikumar-k-p-80b7a628b_tuf-takeuforward-tuf-ugcPost-7325882549946241025-kZ1C?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image2.29e7f370d41e5b6432ee.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/kartik-kaushik-00084415a_tufplus-striver-rajvikramaditya-activity-7326147374307778560-9WNq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image3.3c6a00c782580369ae0a.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/roger-barreto-a8081a156_striver-tuf-dsa-activity-7326115196811276291-U2al?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image4.69a83a1f072ed062b471.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/simran-savita_tufv3-striver-takeuforward-activity-7326114898264940544-FDf7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image5.352195e8f298c1127c86.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/hemanth-anuginti_dsa-systemdesign-machinelearning-activity-7326114229005029376-vDvg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image6.0d31b4ad0bc8eecf91d3.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/suman-mula18_striver-lld-systemdesign-activity-7326111802868563969-RoVQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image7.45032f132ec979320314.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/rishi-panchal-309368252_tufplus-takeuforward-rajvikramaditya-activity-7325967232302219266-BkIs?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image8.8cefba103bec5f3e754b.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/aditya-katoch-23b94526b_tuf-v3-is-here-and-its-a-game-changer-activity-7325953033127768067-Yyro?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image9.31688fc31e769fde14a0.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/theashishshahh_dope-uiand-one-stop-for-everything-loved-activity-7325950196939419648-6wTh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image10.811078424268889660ee.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/prafulkatare_tuf-tufplus-striver-activity-7325937950465097728-ltqL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image11.37938829bdfc5bb238af.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/rokhit-r-a40aa0189_dsa-striver-takeuforward-activity-7325907811261911040-roXE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image12.7efc7e61e125e921296d.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/vijaycham_tufv3-striver-takeuforward-activity-7325902570068070400-YBmr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image13.a213f78254fc80254c2b.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/swayamshree-mohanty-a241b31a0_just-received-the-takeuforward-v3-update-activity-7325896693541982208-g1ZY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image14.107f99c432ec44a7ee8b.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/avinagupta-programmer_tuf-dsarevolution-codingprep-activity-7325892505625866240-qfH7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image15.cd18b7044669ec74763c.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/kaviya-arunagiri_tufv3-takeuforward-dsa-activity-7325890879708155904-QfkD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image.b9543cdb9bde63b5c7e3.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/gaurav-raj-091215310_tuf-v3-is-here-amazed-raj-vikramaditya-activity-7325886791889145858-gRo_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image16.702328e92372d094e25c.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/ankit-orion_takeuforward-v3-is-finally-out-and-it-activity-7325885585384968192-y97k?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image1.4d51e6035bc0b35913f4.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/ravikumar-k-p-80b7a628b_tuf-takeuforward-tuf-ugcPost-7325882549946241025-kZ1C?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image2.29e7f370d41e5b6432ee.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/kartik-kaushik-00084415a_tufplus-striver-rajvikramaditya-activity-7326147374307778560-9WNq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image3.3c6a00c782580369ae0a.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/roger-barreto-a8081a156_striver-tuf-dsa-activity-7326115196811276291-U2al?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image4.69a83a1f072ed062b471.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/simran-savita_tufv3-striver-takeuforward-activity-7326114898264940544-FDf7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image5.352195e8f298c1127c86.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/hemanth-anuginti_dsa-systemdesign-machinelearning-activity-7326114229005029376-vDvg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image6.0d31b4ad0bc8eecf91d3.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/suman-mula18_striver-lld-systemdesign-activity-7326111802868563969-RoVQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image7.45032f132ec979320314.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/rishi-panchal-309368252_tufplus-takeuforward-rajvikramaditya-activity-7325967232302219266-BkIs?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image8.8cefba103bec5f3e754b.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/aditya-katoch-23b94526b_tuf-v3-is-here-and-its-a-game-changer-activity-7325953033127768067-Yyro?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image9.31688fc31e769fde14a0.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/theashishshahh_dope-uiand-one-stop-for-everything-loved-activity-7325950196939419648-6wTh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image10.811078424268889660ee.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/prafulkatare_tuf-tufplus-striver-activity-7325937950465097728-ltqL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image11.37938829bdfc5bb238af.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/rokhit-r-a40aa0189_dsa-striver-takeuforward-activity-7325907811261911040-roXE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image12.7efc7e61e125e921296d.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/vijaycham_tufv3-striver-takeuforward-activity-7325902570068070400-YBmr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image13.a213f78254fc80254c2b.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/swayamshree-mohanty-a241b31a0_just-received-the-takeuforward-v3-update-activity-7325896693541982208-g1ZY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image14.107f99c432ec44a7ee8b.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/avinagupta-programmer_tuf-dsarevolution-codingprep-activity-7325892505625866240-qfH7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image15.cd18b7044669ec74763c.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/kaviya-arunagiri_tufv3-takeuforward-dsa-activity-7325890879708155904-QfkD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image.b9543cdb9bde63b5c7e3.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/gaurav-raj-091215310_tuf-v3-is-here-amazed-raj-vikramaditya-activity-7325886791889145858-gRo_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image16.702328e92372d094e25c.webp"
    },
    {
        "href": "https://x.com/Prathamjava/status/1920144072326737938",
        "img": "https://takeuforward.org/static/media/tweet-1920144072326737938.24f34c3f19eb0c848955.webp"
    },
    {
        "href": "https://x.com/FafdaJalebie/status/1918360255983231416",
        "img": "https://takeuforward.org/static/media/tweet-1918360255983231416.1f43c59edf6af4cac1f3.webp"
    },
    {
        "href": "https://x.com/TheSDELad/status/1920115409753141523",
        "img": "https://takeuforward.org/static/media/tweet-1920115409753141523.22abf3b02b2ece71b40c.webp"
    },
    {
        "href": "https://x.com/gstark99/status/1920169655798272101",
        "img": "https://takeuforward.org/static/media/tweet-1920169655798272101.f2725d3e480ddcbad9c9.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image5.3447f2eac4fd77386763.webp"
    },
    {
        "href": "https://x.com/riti2409/status/1918638695806275982",
        "img": "https://takeuforward.org/static/media/tweet-1918638695806275982.d5bf956ca485053c468a.webp"
    },
    {
        "href": "https://x.com/riti2409/status/1920109458325438649",
        "img": "https://takeuforward.org/static/media/tweet-1920109458325438649.28f1000acd383a730262.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/rishi-panchal-309368252_tufplus-takeuforward-rajvikramaditya-activity-7325967232302219266-BkIs?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image8.8cefba103bec5f3e754b.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/ravikumar-k-p-80b7a628b_tuf-takeuforward-tuf-ugcPost-7325882549946241025-kZ1C?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image2.29e7f370d41e5b6432ee.webp"
    },
    {
        "href": "https://x.com/arpitranjan010/status/1920101777829232859",
        "img": "https://takeuforward.org/static/media/tweet-1920101777829232859.7557ff5ab656d71c01d4.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image4.fa520381fb785ece7d5c.webp"
    },
    {
        "href": "https://x.com/hprasathoff/status/1920119224430723569",
        "img": "https://takeuforward.org/static/media/tweet-1920119224430723569.fae382b17efc9dd4158b.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image23.04cd1cc6ed27c405b56b.webp"
    },
    {
        "href": "https://x.com/prayagtushar/status/1920096891523469705",
        "img": "https://takeuforward.org/static/media/tweet-1920096891523469705.63947a917d7fafc114cc.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image25.3923b3c5d11ccbbeba15.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image14.62282bb7ed8f395a7b0b.webp"
    },
    {
        "href": "https://x.com/Adarsh2028/status/1920101427243880545",
        "img": "https://takeuforward.org/static/media/tweet-1920101427243880545.1a3d7472498948377157.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image3.6dc959fa96feb9a80797.webp"
    },
    {
        "href": "https://x.com/Jethalal_69/status/1920118097014600141",
        "img": "https://takeuforward.org/static/media/tweet-1920118097014600141.0b9c06f2fadf11c85a1c.webp"
    },
    {
        "href": "https://x.com/Goss_Gowtham/status/1920128636176494895",
        "img": "https://takeuforward.org/static/media/tweet-1920128636176494895.eb7b0ed2c46cca0e8ebb.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image20.60822084d65e6752d17b.webp"
    },
    {
        "href": "https://x.com/kapilyadav2210/status/1918385990835593361",
        "img": "https://takeuforward.org/static/media/tweet-1918385990835593361.58dd2255b2634db0b4e3.webp"
    },
    {
        "href": "https://x.com/elvinrdrigues_/status/1920106037329191289",
        "img": "https://takeuforward.org/static/media/tweet-1920106037329191289.18f7bda1fe1cdd372341.webp"
    },
    {
        "href": "https://x.com/abhaypande64436/status/1920127183147642925",
        "img": "https://takeuforward.org/static/media/tweet-1920127183147642925.c45dd2fa27a5477866cb.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image22.89d7611c935c01271b9d.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/suman-mula18_striver-lld-systemdesign-activity-7326111802868563969-RoVQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image7.45032f132ec979320314.webp"
    },
    {
        "href": "https://x.com/theashishshahh/status/1920181059561664898",
        "img": "https://takeuforward.org/static/media/tweet-1920181059561664898.c55fad37e1ad9946621e.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image9.c16ee8e518af51a044df.webp"
    },
    {
        "href": "https://x.com/sarakasaraansh/status/1920102976993030341",
        "img": "https://takeuforward.org/static/media/tweet-1920102976993030341.aec4365f14a203edc440.webp"
    },
    {
        "href": "https://x.com/soumxyz05/status/1920115392992678363",
        "img": "https://takeuforward.org/static/media/tweet-1920115392992678363.76007dda84accd6cbe5e.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/kaviya-arunagiri_tufv3-takeuforward-dsa-activity-7325890879708155904-QfkD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image.b9543cdb9bde63b5c7e3.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image26.475137ab4090cc884c27.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image17.79eefa09f041c023e785.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/aditya-katoch-23b94526b_tuf-v3-is-here-and-its-a-game-changer-activity-7325953033127768067-Yyro?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image9.31688fc31e769fde14a0.webp"
    },
    {
        "href": "https://x.com/piyushk1302/status/1920094504507367725",
        "img": "https://takeuforward.org/static/media/tweet-1920094504507367725.0704e6d836da952c4cb8.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image2.7df961986a7f027af973.webp"
    },
    {
        "href": "https://x.com/Shivani78280334/status/1920118598984667332",
        "img": "https://takeuforward.org/static/media/tweet-1920118598984667332.40516682ca95174089c4.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image19.fe2d637aeae09729eceb.webp"
    },
    {
        "href": "https://x.com/sameerlove4u2/status/1920101001454878728",
        "img": "https://takeuforward.org/static/media/tweet-1920101001454878728.ce6659e99e9c7d29cda3.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image21.3c89230fa19b55962177.webp"
    },
    {
        "href": "https://x.com/nikhil_2200/status/1920110702729080942",
        "img": "https://takeuforward.org/static/media/tweet-1920110702729080942.60ba3348c45d4f493172.webp"
    },
    {
        "href": "https://x.com/cns_varun/status/1920124998536290618",
        "img": "https://takeuforward.org/static/media/tweet-1920124998536290618.128f160ce632e5717e19.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image18.7fde2c37574970db8d09.webp"
    },
    {
        "href": "https://x.com/archiexzzz/status/1918364066168402145",
        "img": "https://takeuforward.org/static/media/tweet-1918364066168402145.82f6ffe6ac8ac474498a.webp"
    },
    {
        "href": "https://x.com/Meghana99228121/status/1920124762199867565",
        "img": "https://takeuforward.org/static/media/tweet-1920124762199867565.4c5508246b82af955d6f.webp"
    },
    {
        "href": "https://x.com/ankushdharkar/status/1918379372635144399",
        "img": "https://takeuforward.org/static/media/tweet-1918379372635144399.83cdbdab922947233e50.webp"
    },
    {
        "href": "https://x.com/basak_b81016/status/1920118218540130357",
        "img": "https://takeuforward.org/static/media/tweet-1920118218540130357.7f32f0dd9472e57849b2.webp"
    },
    {
        "href": "https://x.com/heyy_aryann/status/1920185034939445587",
        "img": "https://takeuforward.org/static/media/tweet-1920185034939445587.9703e00579df5e9543df.webp"
    },
    {
        "href": "https://x.com/0madmax/status/1920102287856591299",
        "img": "https://takeuforward.org/static/media/tweet-1920102287856591299.5c7ee2b01b6bc9dab0e6.webp"
    },
    {
        "href": "https://x.com/Priynshuchouhn/status/1920102730108186652",
        "img": "https://takeuforward.org/static/media/tweet-1920102730108186652.034f7754651efbe6658a.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/rokhit-r-a40aa0189_dsa-striver-takeuforward-activity-7325907811261911040-roXE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image12.7efc7e61e125e921296d.webp"
    },
    {
        "href": "https://x.com/sniperdotdev/status/1920107393083666702",
        "img": "https://takeuforward.org/static/media/tweet-1920107393083666702.2370f8f1a45b159f5207.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image11.8059be0d2d8b11da5e49.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/theashishshahh_dope-uiand-one-stop-for-everything-loved-activity-7325950196939419648-6wTh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image10.811078424268889660ee.webp"
    },
    {
        "href": "https://x.com/PixelNiladri/status/1920101098821738589",
        "img": "https://takeuforward.org/static/media/tweet-1920101098821738589.292297ad7ab15f7ec74c.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image15.f97087ef18512aa23422.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image24.5aae3268da973e06f29d.webp"
    },
    {
        "href": "https://x.com/Oppbhai20/status/1920138268936634713",
        "img": "https://takeuforward.org/static/media/tweet-1920138268936634713.fedd44bbd8e4888a6c62.webp"
    },
    {
        "href": "https://x.com/adml003/status/1920103011096932526",
        "img": "https://takeuforward.org/static/media/tweet-1920103011096932526.ff8b90157b6ed901fecb.webp"
    },
    {
        "href": "https://x.com/Abhishe54522361/status/1920108655166607431",
        "img": "https://takeuforward.org/static/media/tweet-1920108655166607431.1bb75d64141474886304.webp"
    },
    {
        "href": "https://x.com/ragz1330/status/1920114785959735603",
        "img": "https://takeuforward.org/static/media/tweet-1920114785959735603.6129dc9a8becc06c76dc.webp"
    },
    {
        "href": "https://x.com/drummatick/status/1918365819823854007",
        "img": "https://takeuforward.org/static/media/tweet-1918365819823854007.7ef1fac3385b28a1a7b5.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/gaurav-raj-091215310_tuf-v3-is-here-amazed-raj-vikramaditya-activity-7325886791889145858-gRo_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image16.702328e92372d094e25c.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/vijaycham_tufv3-striver-takeuforward-activity-7325902570068070400-YBmr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image13.a213f78254fc80254c2b.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/simran-savita_tufv3-striver-takeuforward-activity-7326114898264940544-FDf7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image5.352195e8f298c1127c86.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/avinagupta-programmer_tuf-dsarevolution-codingprep-activity-7325892505625866240-qfH7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image15.cd18b7044669ec74763c.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image16.12702d77f3745c056bf8.webp"
    },
    {
        "href": "https://x.com/amitbh6/status/1920115396893684183",
        "img": "https://takeuforward.org/static/media/tweet-1920115396893684183.24fbedea210eb5be09c7.webp"
    },
    {
        "href": "https://x.com/raghu_cpp/status/1920103053543227733",
        "img": "https://takeuforward.org/static/media/tweet-1920103053543227733.7b95c685330e7ebe3cb9.webp"
    },
    {
        "href": "https://x.com/vjsinsights/status/1918610644409958602",
        "img": "https://takeuforward.org/static/media/tweet-1918610644409958602.1322494a8cec17d7b767.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image10.0ec62d2ba1e10886d71d.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/prafulkatare_tuf-tufplus-striver-activity-7325937950465097728-ltqL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image11.37938829bdfc5bb238af.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/swayamshree-mohanty-a241b31a0_just-received-the-takeuforward-v3-update-activity-7325896693541982208-g1ZY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image14.107f99c432ec44a7ee8b.webp"
    },
    {
        "href": "https://x.com/RizonKumar/status/1920111531305423241",
        "img": "https://takeuforward.org/static/media/tweet-1920111531305423241.aa1761027367ef56c043.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image27.457e2bae6aa93f0f6799.webp"
    },
    {
        "href": "https://x.com/yashvardhandho3/status/1920163375884964121",
        "img": "https://takeuforward.org/static/media/tweet-1920163375884964121.0a7aced0f059014708ea.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image13.4eb95e6b111337b1a825.webp"
    },
    {
        "href": "https://x.com/sigmadev234/status/1918365851155116533",
        "img": "https://takeuforward.org/static/media/tweet-1918365851155116533.92871de7b85c1a3bb7a0.webp"
    },
    {
        "href": "https://x.com/rahulguptaa29/status/1920151211795226932",
        "img": "https://takeuforward.org/static/media/tweet-1920151211795226932.9c9ef6317b8c65196ad5.webp"
    },
    {
        "href": "https://x.com/EngineerS90050/status/1920144867264454689",
        "img": "https://takeuforward.org/static/media/tweet-1920144867264454689.69392ef9aa22201afe1a.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/kartik-kaushik-00084415a_tufplus-striver-rajvikramaditya-activity-7326147374307778560-9WNq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image3.3c6a00c782580369ae0a.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/hemanth-anuginti_dsa-systemdesign-machinelearning-activity-7326114229005029376-vDvg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image6.0d31b4ad0bc8eecf91d3.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image1.585754f0c0062a03812d.webp"
    },
    {
        "href": "https://x.com/punyakrit_22/status/1920099424853799283",
        "img": "https://takeuforward.org/static/media/tweet-1920099424853799283.60f67156398228eaefcc.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image8.422b90702348b27e88d4.webp"
    },
    {
        "href": "https://x.com/whatkashish/status/1918670122866340101",
        "img": "https://takeuforward.org/static/media/tweet-1918670122866340101.b352c5ccb16954b0e926.webp"
    },
    {
        "href": "https://x.com/Riyaaaa265/status/1920175026105455052",
        "img": "https://takeuforward.org/static/media/tweet-1920175026105455052.332ef65ae6245e741b61.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image7.f9ae7699151ecd49bdf4.webp"
    },
    {
        "href": "https://x.com/annanya01S/status/1920108994728747190",
        "img": "https://takeuforward.org/static/media/tweet-1920108994728747190.a05ec53de1bbb7f409c6.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/ankit-orion_takeuforward-v3-is-finally-out-and-it-activity-7325885585384968192-y97k?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image1.4d51e6035bc0b35913f4.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image12.b4417b7634837c3b4aff.webp"
    },
    {
        "href": "https://x.com/deveshsainii/status/1920169766091731379",
        "img": "https://takeuforward.org/static/media/tweet-1920169766091731379.cd5e8296513ebc2523a3.webp"
    },
    {
        "href": "https://discord.com/invite/bsU2PGNrHC",
        "img": "https://takeuforward.org/static/media/image6.03f1e04c4181edd1c665.webp"
    },
    {
        "href": "https://www.linkedin.com/posts/roger-barreto-a8081a156_striver-tuf-dsa-activity-7326115196811276291-U2al?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACYCutsB7Uf57za9c17xJ3UjaOAqMRba4ds",
        "img": "https://takeuforward.org/static/media/image4.69a83a1f072ed062b471.webp"
    },
    {
        "href": "https://x.com/Aaditya1_6/status/1920100512810127608",
        "img": "https://takeuforward.org/static/media/tweet-1920100512810127608.24095d1d2c5dbd990d0d.webp"
    },
    {
        "href": "https://takeuforward.org/",
        "img": "https://takeuforward.org/static/media/Tuf%20Logo%20B.a2ce02c035734f237b8a.png"
    }
]