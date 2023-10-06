import React from "react";

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-90 mt-[5%]">
      <div className="mx-[5%] pt-[5%] space-y-4">
        <div className="text-6xl font-extrabold text-white">
          <span>
            The <span className="underline">All-In-One</span> Frontend for
            StartUp
          </span>
          <br />
          <span>Founders</span>
        </div>
        <div className="text-slate-300 text-xl">
          <span>
            90% of startups fail. Design a beautiful frontend for your business.{" "}
            <span className="text-white font-bold">
              Join +40,000 other startup founders!
            </span>
          </span>
        </div>

        <div className="flex flex-row space-x-2">
          <input
            className="py-2 px-4 w-3/4 h-fit rounded-md border-solid border-2 border-gray-800 focus:border-gray-900"
            placeholder="Enter the Email Address"
          ></input>
          <button className="bg-white text-black text-md font-bold px-7 rounded-[4px]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="bg-black mt-[5%] text-white">
        <div className=" pt-[5%] flex flex-row justify-around pb-[5%]">
          <div className="flex flex-col space-y-2">
            <span className="text-2xl font-bold">Logo</span>
            <span>
              An all-in-one frontend for startup founders, ruled by one<br/>
              philosophy: there's more to learn from <br/>failures than from
              successes.
            </span>
          </div>
          <div className="flex flex-col space-y-3">
            <span className="text-white text-2xl font-bold">Learn</span>
            <ul className="space-y-2 text-slate-300">
              <li>Interviews</li>
              <li>Blogs</li>
              <li>Tools</li>
              <li>Podcasts</li>
              <li>Products</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-3">
            <span className="text-white text-2xl font-bold">Other</span>
            <ul className="space-y-2 text-slate-300">
              <li>Sponsor Us</li>
              <li>Contribute</li>
              <li>About</li>
              <li>Subscribe</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-3">
            <span className="text-white text-2xl font-bold">Connect</span>
            <ul className="space-y-2 text-slate-300">
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Slack</li>
              <li>WhatsApp</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
