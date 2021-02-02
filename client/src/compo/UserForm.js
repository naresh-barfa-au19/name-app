import React, { Component } from "react";
import axios from "axios";
import User from "./User";

export default class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      allUser: "",
      msg: "",
    };
  }
  componentDidMount = () => {
    axios.get("http://localhost:4000/formData").then((response) => {
      console.log(response.data);
      this.setState({ allUser: response.data });
    });
  };
  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/formData", {
        name: this.state.name,
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.dataPost);
        this.setState({
          msg: response.data.errMsg,
        });
      });
  };
  render() {
    return (
      <React.Fragment>
        <h5>Enter Name</h5>
        <form method="POST" onClick={this.submitHandler}>
          <input
            name="name"
            required="true"
            min="3"
            type="text"
            value={this.state.name}
            onChange={this.inputHandler}
          />
          <br />
          {this.state.msg !== "" ? (
            <p style={{ color: "red" }}>{this.state.msg}</p>
          ) : (
            ""
          )}
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
        <ol className="list-group list-group-flush">
          {this.state.allUser.length > 0
            ? this.state.allUser.map((usr) => {
                return <User key={usr._id} userData={usr} />;
              })
            : ""}
        </ol>
      </React.Fragment>
    );
  }
}
