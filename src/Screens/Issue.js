import React from "react";
import issue from "../info";
import {BsArrowRight} from 'react-icons/bs'

const Issue = () => {
  return (
    <div className="mx-[5%] space-y-4 flex flex-col mt-[5%]">
      <div className="text-5xl font-extrabold text-center">
      Latest Issues
      </div>
      <div className="flex flex-col space-y-4 text-sm">
        {issue.map((item) => (
          <div className="flex flex-row justify-between bg-slate-200 px-3 py-6 rounded ">
            <div className="flex flex-row space-x-2">
              <span className="text-black font-bold">{item.title}</span>
              <span className="text-slate-600">{item.desc}</span>
            </div>
            <span>{item.date}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-end items-center space-x-1">
        <span className="text-black font-bold">Go To The Archive</span>
        <BsArrowRight/>
      </div>
    </div>
  );
};

export default Issue;
