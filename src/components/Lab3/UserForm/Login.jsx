import React, { Component } from "react";
import "./useform.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pass: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClick = () => {
    if (this.props.toggleForm) {
      this.props.toggleForm(false);
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({ email: "", pass: "" });
  }

  render() {
    return (
      <>
        <section className="form-wrapper">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <span>Login</span>
              <div className="row">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  id="password"
                  name="pass"
                  value={this.state.pass}
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                <input type="submit" value="Login" />
              </div>
              <div className="row signin" onClick={this.handleClick}>
                Don't Have Account? Signup
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}
