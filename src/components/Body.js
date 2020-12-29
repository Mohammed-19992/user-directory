// Importing react
import React from "react";

function Body(props) {
  return <div className={`Box${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

// exporting the body
export default Body;
