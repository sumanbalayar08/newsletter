import React from "react";
import SocialCard from "./SocialCard";

const Social = () => {

    const items=[
        {
            name:"Suman Balayar",
            username:"balayar"
        },
        {
            name:"Prabigya Pathak",
            username:"pathakprab"

        },
        {
            name:"Shubham Karn",
            username:"karnshubham"

        }
    ]


  return (
    <div className="flex flex-col mx-[5%] mt-[5%] space-y-6">
        <div className="text-black text-3xl font-extrabold text-center md:text-left">Trusted by 40K+ Developers</div>
      <div className="flex-1 lg:flex space-y-3 lg:space-y-0 lg:space-x-4"> 
        {items.map((item)=>(
            <SocialCard key={item.id} name={item.name} username={item.username}/>
        ))}
      </div>
    </div>
  );
};

export default Social;
