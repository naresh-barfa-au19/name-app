import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
    };
  }

  render() {
    return (
      <>
        {this.state.userData ? (
          <li className="list-group-item">
            {this.state.userData.name.toUpperCase()} <br />
          </li>
        ) : (
          "No record"
        )}
      </>
    );
  }
}
export default User;
