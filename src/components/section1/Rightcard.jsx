import React from "react";
import RightCardContent from "./RightCardContent";

const Rightcard = (props) => {
  return (
    <div className="h-full w-80 rounded-4xl overflow-hidden shrink-0 relative">
      <img className="h-full w-full object-cover" src={props.img} alt="" />

      <RightCardContent  id= {props.id} />

    </div>

  );
};

export default Rightcard;
