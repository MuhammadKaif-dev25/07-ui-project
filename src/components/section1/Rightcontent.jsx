import React from "react";
import Rightcard from "./Rightcard";

const Rightcontent = (props) => {
  return (
    <div className="h-full w-2/3 flex gap-4 overflow-auto " id="scroll">

    {props.user.map(function(e,idx){
      return <Rightcard key= {idx} id= {idx} img={e.img}/>
    })}
    </div>
  );
};

export default Rightcontent;
