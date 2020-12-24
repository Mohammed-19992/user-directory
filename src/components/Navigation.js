import React from "react";
import "./style.css";
function Navigation(props) {
  return (
    <div id="container" className="container" style={{width: "600px"}}>
      <br></br>
      <div  className="card text-center">
        <div  className="form-group" style={{ padding: "40px", boarder: "50px"}}>
          <label htmlFor="search">{props.searchtype} User Search</label>
          <input onChange={props.handleInputChange} value={props.value} searchtype={props.searchtype}
            name="search" type="text" className="form-control" placeholder="User First or Last Name"/>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
