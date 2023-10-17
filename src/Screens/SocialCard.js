import React from "react";
import image2 from "../image/profile.jpeg";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const SocialCard = (props) => {
  return (
    <div className="w-full md:w-[30%] h-[400px] rounded-md shadow-xl border-2 border-opacity-50 border-gray-300 px-4 py-2 flex flex-col justify-between">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row space-x-3">
            <img src={image2} alt="MY Profile" className="rounded w-16" />
            <div className="flex flex-col">
              <span>{props.name}</span>
              <span>@{props.username}</span>
            </div>
          </div>
          <BsTwitter />
        </div>
        <div className="flex flex-col space-y-3">
          <span>1. Frontend Design</span>
          <span>
            Design a beautiful frontend for your business for successful
            startups. Learn from their wins and their mistakes and become a
            better founder.
          </span>
        </div>
      </div>
      <div className="flex flex-row space-x-3 ">
        <AiOutlineHeart />
        <span>1Feb 2023 </span>
      </div>
    </div>
  );
};

export default SocialCard;
