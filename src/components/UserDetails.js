// Importing libraries
import React from "react";
import Directory from "../data/directory.json";
import "./style.css";

function UserDetails(props) {
  console.log(props)

  const resultsFirst = Directory.filter(user => user.first.toLowerCase().includes(props.search.toLowerCase()));

  return (
    <div>
      <h2 id="title" className="text-center table-title">Joe Biden Staff Members Directory</h2>
      {resultsFirst.length > 0 ? (
        <table className="table table-bordered table-sm" id="table">
          <thead>
            <tr>
              <th scope="col" onClick={() => props.sortBy("first")}> Name of the Staff Member <i class="fa fa-sort" aria-hidden="true"></i></th>
              <th scope="col" onClick={() => props.sortBy("last")}> Position in the White House <i class="fa fa-sort" aria-hidden="true"></i></th>
              <th scope="col" >Email Address </th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Cell Phone</th>
              <th scope="col" >Personal Photo</th>

            </tr>
          </thead>
          <tbody>
            {resultsFirst.map(result => (
              <tr key={result.id}>
                <td><b>{result.first}</b></td>
                <td>{result.position}</td>
                <td>{result.email}</td>
                <td>{result.birth}</td>
                <td>{result.cell}</td>
                <td>
                    <img width="80px" height="70px" alt="pic" src={result.pic}></img>
                  </td>

              </tr>
            ))}
          </tbody>
        </table >
      ) : (
          <h2>No Results Found</h2>
        )}
    </div>
  );
}

export default UserDetails;
