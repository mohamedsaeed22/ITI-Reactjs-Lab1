import React, { Component } from "react";
import { sendPost } from "../AxiosConfig/AxiosConfig";

export default class SendPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      userTitle: "",
      userBody: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async handleSubmit(e) {
    e.preventDefault();
    const addPost = await sendPost("/posts", this.state);
    console.log(addPost);
    this.setState({
      userId: "",
      userTitle: "",
      userBody: "",
    });
  }

  render() {
    return (
      <>
        <h2>Send a Post </h2>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <label htmlFor="title">UserId</label>
            <input
              type="number"
              min={0}
              name="userId"
              id="userId"
              placeholder="Id here"
              value={this.state.userId}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="row">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="userTitle"
              id="title"
              placeholder="Title here"
              value={this.state.userTitle}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="row">
            <label htmlFor="body">Body</label>
            <input
              type="text"
              name="userBody"
              id="body"
              placeholder="body here"
              value={this.state.userBody}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="row">
            <input type="submit" value="Send Post" />
          </div>
        </form>
      </>
    );
  }
}
