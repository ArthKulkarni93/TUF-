import { InstagramIcon } from "../ui/instagram";
import { LinkedinIcon } from "../ui/linkedin";
import { TwitterIcon } from "../ui/twitter";
import { YoutubeIcon } from "../ui/youtube";

export default function Footer() {
    return (
        <div className="bg-black text-white px-4 md:px-10 pt-12 pb-16">
            {/* Top: Logo, Copyright, Socials */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-y-6 md:gap-y-0 mb-12">
                {/* Logo */}
                <a href="https://takeuforward.org/plus">
                    <img
                        className="w-24"
                        src="https://takeuforward.org/static/media/TufLogoWhite.55c3498a0dd7701d258e.png"
                        alt="TUF Logo"
                    />
                </a>

                {/* Copyright */}
                <div className="text-[#a3a5ae] text-sm text-center md:text-left">
                    © 2025 takeuforward | All rights reserved
                </div>

                {/* Socials */}
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/company/takeuforward/">
                        <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a href="https://www.x.com/takeuforward_">
                        <TwitterIcon className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/striver_79/">
                        <InstagramIcon className="w-5 h-5" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCJskGeByzRRSvmOyZOz61ig">
                        <YoutubeIcon className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Bottom: Links Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {/* Column 1 */}
                <div>
                    <h4 className="font-semibold text-sm mb-4">Company</h4>
                    {[
                        "About Us",
                        "Contact Us",
                        "Pricing",
                        "Privacy Policy",
                        "Terms and Conditions",
                        "Cancellation / Refund Policy",
                    ].map((item) => (
                        <div
                            key={item}
                            className="text-[#a3a5ae] text-sm hover:text-white cursor-pointer mb-2"
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* Column 2 */}
                <div>
                    <h4 className="font-semibold text-sm mb-4">Quick Access</h4>
                    {[
                        "Striver's DSA Sheet",
                        "Technical Blogs",
                        "CS Subjects",
                        "Striver's CP Sheet",
                    ].map((item) => (
                        <div
                            key={item}
                            className="text-[#a3a5ae] text-sm hover:text-white cursor-pointer mb-2"
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* Column 3 */}
                <div>
                    <h4 className="font-semibold text-sm mb-4">DSA Sheets</h4>
                    {[
                        "Striver's SDE Sheet",
                        "A2Z DSA Playlist",
                        "SDE Core Sheet",
                        "Striver's CP Sheet",
                    ].map((item) => (
                        <div
                            key={item}
                            className="text-[#a3a5ae] text-sm hover:text-white cursor-pointer mb-2"
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* Column 4 */}
                <div>
                    <h4 className="font-semibold text-sm mb-4">DSA Playlists</h4>
                    {[
                        "Array Series",
                        "Graph Series",
                        "DP Series",
                        "LinkedList Series",
                    ].map((item) => (
                        <div
                            key={item}
                            className="text-[#a3a5ae] text-sm hover:text-white cursor-pointer mb-2"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
