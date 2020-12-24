import React from "react";
function TheCard(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

// Rendering the card here
export default TheCard;
