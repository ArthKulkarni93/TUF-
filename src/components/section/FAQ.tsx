// FAQ.jsx
import { useState } from "react";

export default function FAQ() {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);
    const [fifth, setFifth] = useState(false);
    const [sixth, setSixth] = useState(false);
    const [seventh, setSeventh] = useState(false);


    return (
        <div className="mt-16">
            <div className="w-full min-h-screen px-4 md:px-10 bg-black flex flex-col md:flex-row md:items-start md:justify-center md:gap-24 py-12 md:py-24 ">
                {/* Left: FAQ Title */}
                <div className="text-white leading-dense tracking-tight flex flex-col items-center md:items-start md:w-2/3 lg:w-[600px] ">
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl leading-tight tracking-tight">Frequently asked questions</span>
                    <span className="text-[#a3a5ae] mt-2 text-center sm:text-md md:text-lg lg:text-xl md:text-left">Don’t see the answer you’re looking for? Get in touch.</span>
                </div>

                {/* Right: Questions */}
                <div className="flex flex-col mt-10 md:mt-0 gap-6 md:gap-10 text-white md:w-2/3 items-center md:items-start w-full mr-5 ">
                    {/* Question 1 */}
                    <div className="w-full max-w-[700px] sm:mx-auto">
                        <div
                            className="hover:cursor-pointer flex flex-row items-center gap-3 w-full"
                            onClick={() => setFirst(!first)}
                        >
                            <img
                                className="size-6"
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggc3Ryb2tlPSIjRTNFNEU5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjYiIGQ9Im0yMSAxMy02IDUtNi01Ii8+PC9zdmc+"
                                alt=""
                            />
                            <span className="text-base md:text-lg lg:text-xl xl:text-2xl  text-left break-words w-full">
                                What topics are covered in the DSA course?
                            </span>
                        </div>
                        <div className={`${first ? 'block' : 'hidden'} text-[#a3a5ae] w-full text-sm p-2 pt-2 justify-text px-4`}>
                            Our DSA course covers everything from the basics to advanced topics, including hands-on problem-solving. You'll also have access to editorial videos and contests to deepen your understanding.
                        </div>
                        <hr className="h-px bg-gray-700 border-0 w-full mt-2" />
                    </div>

                    {/* Question 2 */}
                    <div className="w-full max-w-[700px] sm:mx-auto">
                        <div
                            className="hover:cursor-pointer flex flex-row items-center gap-3 w-full"
                            onClick={() => setSecond(!second)}
                        >
                            <img
                                className="size-6"
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggc3Ryb2tlPSIjRTNFNEU5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjYiIGQ9Im0yMSAxMy02IDUtNi01Ii8+PC9zdmc+"
                                alt=""
                            />
                            <span className="text-base md:text-lg lg:text-xl xl:text-2xl  text-left break-words w-full">
                                Are there any prerequisites for enrolling in this course?
                            </span>
                        </div>
                        <div className={`${second ? 'block' : 'hidden'} text-[#a3a5ae] w-full text-sm p-2 pt-2  justify-text px-4`}>
                            The only prerequisites are dedication and commitment. We'll take care of the rest, guiding you step by step through the course.
                        </div>
                        <hr className="h-px bg-gray-700 border-0 w-full mt-2" />
                    </div>

                    {/* Question 3 */}
                    <div className="w-full max-w-[700px] sm:mx-auto">
                        <div
                            className="hover:cursor-pointer flex flex-row items-center gap-3 w-full"
                            onClick={() => setThird(!third)}
                        >
                            <img
                                className="size-6"
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggc3Ryb2tlPSIjRTNFNEU5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjYiIGQ9Im0yMSAxMy02IDUtNi01Ii8+PC9zdmc+"
                                alt=""
                            />
                            <span className="text-base md:text-lg lg:text-xl xl:text-2xl  text-left break-words w-full">
                                Is the course content updated regularly?
                            </span>
                        </div>
                        <div className={`${third ? 'block' : 'hidden'} text-[#a3a5ae] w-full text-sm p-2 pt-2 justify-text px-4`}>
                            Yes, we value user feedback immensely, as our customers are our top priority. If there's any issue or improvement needed, we make sure to update the content regularly to provide the best learning experience.
                        </div>
                        <hr className="h-px bg-gray-700 border-0 w-full mt-2" />
                    </div>

                    {/* Question 4 */}
                    <div className="w-full max-w-[700px] sm:mx-auto">
                        <div
                            className="hover:cursor-pointer flex flex-row items-center gap-3 w-full"
                            onClick={() => setFourth(!fourth)}
                        >
                            <img
                                className="size-6"
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggc3Ryb2tlPSIjRTNFNEU5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjYiIGQ9Im0yMSAxMy02IDUtNi01Ii8+PC9zdmc+"
                                alt=""
                            />
                            <span className="text-base md:text-lg lg:text-xl xl:text-2xl  text-left break-words w-full">
                                Does TUF+ include aptitude preparation?
                            </span>
                        </div>
                        <div className={`${fourth ? 'block' : 'hidden'} text-[#a3a5ae] w-full text-sm p-2 pt-2 justify-text px-4`}>
                            Yes, TUF+ includes aptitude mocks and tests tailored for placements. These are available post our V3 launch.
                        </div>
                        <hr className="h-px bg-gray-700 border-0 w-full mt-2" />
                    </div>

                    {/* Question 5 */}
                     <div className="w-full max-w-[700px] sm:mx-auto">
                        <div
                            className="hover:cursor-pointer flex flex-row items-center gap-3 w-full"
                            onClick={() => setFifth(!fifth)}
                        >
                            <img
                                className="size-6"
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggc3Ryb2tlPSIjRTNFNEU5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjYiIGQ9Im0yMSAxMy02IDUtNi01Ii8+PC9zdmc+"
                                alt=""
                            />
                            <span className="text-base md:text-lg lg:text-xl xl:text-2xl  text-left break-words w-full">
                                Can I get a sample lesson before purchasing?
                            </span>
                        </div>
                        <div className={`${fifth ? 'block' : 'hidden'} text-[#a3a5ae] w-full text-sm p-2 pt-2 justify-text px-4`}>
                            You can explore our free platform, which includes a few features to give you a feel of the content. However, the experience is much smoother and more comprehensive when you dive into the premium courses on takeuforward.
                        </div>
                        <hr className="h-px bg-gray-700 border-0 w-full mt-2" />
                    </div>

                    {/* Question 6 */}
                     <div className="w-full max-w-[700px] sm:mx-auto">
                        <div
                            className="hover:cursor-pointer flex flex-row items-center gap-3 w-full"
                            onClick={() => setSixth(!sixth)}
                        >
                            <img
                                className="size-6"
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggc3Ryb2tlPSIjRTNFNEU5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjYiIGQ9Im0yMSAxMy02IDUtNi01Ii8+PC9zdmc+"
                                alt=""
                            />
                            <span className="text-base md:text-lg lg:text-xl xl:text-2xl  text-left break-words w-full">
                                How much time will I need to complete TUF+?
                            </span>
                        </div>
                        <div className={`${sixth ? 'block' : 'hidden'} text-[#a3a5ae] w-full text-sm p-2 pt-2 justify-text px-4`}>
                            We have a personalised roadmap for your requirement. Add your target dates and get a complete roadmap of how many days you have to allot to each topic "daywise". This will not only help you prepare better but also help you keep motivated to maintain your streak!
                        </div>
                        <hr className="h-px bg-gray-700 border-0 w-full mt-2" />
                    </div>


                    {/* Question 7 */}
                     <div className="w-full max-w-[700px] sm:mx-auto">
                        <div
                            className="hover:cursor-pointer flex flex-row items-center gap-3 w-full"
                            onClick={() => setSeventh(!seventh)}
                        >
                            <img
                                className="size-6"
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggc3Ryb2tlPSIjRTNFNEU5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjYiIGQ9Im0yMSAxMy02IDUtNi01Ii8+PC9zdmc+"
                                alt=""
                            />
                            <span className="text-base md:text-lg lg:text-xl xl:text-2xl  text-left break-words w-full">
                                What programming languages does TUF+ support?
                            </span>
                        </div>
                        <div className={`${seventh ? 'block' : 'hidden'} text-[#a3a5ae] w-full text-sm p-2 pt-2 justify-text  px-4`}>
                            TUF+ supports C++, Java, Python, and JavaScript so you can learn in the language of your choice.
                        </div>
                        <hr className="h-px bg-gray-700 border-0 w-full mt-2" />
                    </div>
                </div>
            </div>
        </div>
    );
}
