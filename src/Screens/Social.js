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
      <div>
        <span className="text-black text-5xl font-extrabold">Trusted by 40K+ Developers</span>
      </div>
      <div className="flex flex-row space-x-3"> 
        {items.map((item)=>(
            <SocialCard key={item.id} name={item.name} username={item.username}/>
        ))}
      </div>
    </div>
  );
};

export default Social;
