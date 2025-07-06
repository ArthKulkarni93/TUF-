import { InstagramIcon } from "../ui/instagram";
import { LinkedinIcon } from "../ui/linkedin";
import { TwitterIcon } from "../ui/twitter";
import { YoutubeIcon } from "../ui/youtube";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 sm:px-10 pt-12 pb-16">
      <div className="max-w-screen-xl mx-auto w-full">
        {/* Top: Logo */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-6 md:gap-y-0 mb-12">
          <a href="https://takeuforward.org/plus" className="flex-shrink-0">
            <img
              className="w-24"
              src="https://takeuforward.org/static/media/TufPlusLight.041fc694d612b3fbaaa0.png"
              alt="TUF Logo"
            />
          </a>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Dynamic Columns */}
          {[
            {
              title: "Company",
              items: [
                "About Us",
                "Contact Us",
                "Pricing",
                "Privacy Policy",
                "Terms & Conditions",
                "Refund Policy",
              ],
            },
            {
              title: "Quick Access",
              items: [
                "Striver's DSA Sheet",
                "Technical Blogs",
                "CS Subjects",
                "Striver's CP Sheet",
              ],
            },
            {
              title: "DSA Sheets",
              items: [
                "SDE Sheet",
                "A2Z DSA Playlist",
                "SDE Core Sheet",
                "CP Sheet",
              ],
            },
            {
              title: "DSA Playlists",
              items: [
                "Array Series",
                "Graph Series",
                "DP Series",
                "Linked List Series",
              ],
            },
          ].map(({ title, items }) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4">{title}</h4>
              {items.map((text) => (
                <a
                  key={text}
                  href="#"
                  className="block text-[#a3a5ae] text-sm hover:text-white mb-2 transition-colors"
                >
                  {text}
                </a>
              ))}
            </div>
          ))}

          {/* Social Column */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Social</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/company/takeuforward/"
                className="flex items-center gap-2 text-[#a3a5ae] hover:text-white"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://www.x.com/takeuforward_"
                className="flex items-center gap-2 text-[#a3a5ae] hover:text-white"
              >
                <TwitterIcon className="w-5 h-5" />
                <span className="text-sm">Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/striver_79/"
                className="flex items-center gap-2 text-[#a3a5ae] hover:text-white"
              >
                <InstagramIcon className="w-5 h-5" />
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/channel/UCJskGeByzRRSvmOyZOz61ig"
                className="flex items-center gap-2 text-[#a3a5ae] hover:text-white"
              >
                <YoutubeIcon className="w-5 h-5" />
                <span className="text-sm">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="text-[#a3a5ae] text-sm mt-12">
          © 2025 takeuforward | All rights reserved
        </div>
      </div>
    </footer>
  );
}
