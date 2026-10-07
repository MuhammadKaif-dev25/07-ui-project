import React from "react";
import LeftText from "./LeftText";
import Arrow from "./Arrow";

const LeftContent = () => {
  return (
    <div  className="h-full w-1/3 flex flex-col justify-between ">
        <LeftText />
        <Arrow />
    </div>
  );
};

export default LeftContent;
