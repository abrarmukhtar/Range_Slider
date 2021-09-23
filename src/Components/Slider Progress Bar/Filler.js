import React from "react";

export default function Filler(props) {
  // console.log(props.percentage)

  return (
    <div
      className="filler"
      style={{ width: `${props.percentage}%` }}
      
    ></div>
  );
}
