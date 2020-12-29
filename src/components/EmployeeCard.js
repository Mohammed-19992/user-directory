// Importing libraries
import React, { Component } from "react";
import Body from "./Body";
import Row from "./Row";
import Col from "./Col";
import Navigation from "./Navigation";
import UserDetails from "./UserDetails";
import Directory from "../data/directory.json";

class EmployeeCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: Directory,
      search: "",
    }
    this.sortBy = this.sortBy.bind(this);
  }
  sortBy = (key) => {
    this.setState({
      results: Directory.sort((a, b) => (a[key] > b[key]) ? 1 : -1)
    })
  }

  // React Search Users First
  searchUsersFirst = () => {
    let searchQuery = this.state.search.trim();
    let searchResultsFirst = Directory.filter((user) => user.first === searchQuery);
    this.setState({ "result": searchResultsFirst });
  };

 // React handle from sumbit
 handleFormSubmit = event => {
  event.preventDefault();
  this.searchUsersFirst();
};

  // React Component Did Mount
  componentDidMount() {
    this.searchUsersFirst();
  }

  // React handle Input Change
  handleInputChange = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Body>
        <Row>
          <Col size="md-12">
            <Navigation
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <UserDetails
              search={this.state.search}
              sortBy={this.sortBy}
            />
          </Col>
        </Row>
      </Body >
    );
  }
}

export default EmployeeCard;
