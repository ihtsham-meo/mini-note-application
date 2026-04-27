import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="flex h-100 w-75 rounded-3xl p-7 flex-col justify-between bg-white ">
      <div className="flex justify-between items-center">
        <img
          className="h-10 rounded-full flex border-2 border-solid border-gray-500"
          src={props.logo}
          alt=""
        />
        <button
          className="bg-gray-300 px-3 py-1 rounded-2xl flex items-center hover:bg-black hover:text-white"
        >
          Save <Bookmark size={16} strokeWidth={1.25} />
        </button>
      </div>
      <div className="flex flex-col pb-19 gap-1">
        <h2 className="text-xl font-semibold ">
          {props.company}{" "}
          <span className="text-[12px] font-light text-gray-500">
            {" "}  
            {props.post}
          </span>{" "}
        </h2>
        <h1 className="text-lg font-semibold flex">{props.position}</h1>
        <div className="flex gap-2">
          <h4 className="bg-gray-200 px-2 py-0.5 rounded-md font-light text-sm">
            {props.tag1}
          </h4>
          <h4 className="bg-gray-200 px-2 py-0.5 rounded-md font-light text-sm">
            {props.tag2}
          </h4>
        </div>
      </div>
      <div className="bottom">
        <div className="pay">
          <h3>{props.wages}</h3>
          <p>{props.location}</p>
        </div>
        <button className="transition-all duration-200 hover:bg-gray-800 hover:scale-105 active:scale-95 cursor-pointer">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Card;
