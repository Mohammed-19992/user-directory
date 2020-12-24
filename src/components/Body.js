import React from "react";

function Body(props) {
  return <div className={`Box${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Body;
