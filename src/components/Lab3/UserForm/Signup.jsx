import React, { Component } from "react";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick = () => {
    if (this.props.toggleForm) {
      this.props.toggleForm(true);
    }
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state); // You can send this data to your API for signup
    this.setState({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    });
    this.handleClick();
  }

  render() {
    return (
      <>
        <section className="form-wrapper">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <span>Sign Up</span>
              <div className="row">
                <label htmlFor="fullName">FullName</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  id="fullName"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.handleChange}
                />
              </div>
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
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Your Password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  placeholder="Enter Your Phone"
                  id="phone"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                <input type="submit" value="Sign Up" />
              </div>
              <div className="row signin" onClick={this.handleClick}>
                Already have Account? Login
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}
