import React, { Component } from "react";
import { getAllPosts } from "../AxiosConfig/AxiosConfig";

export default class GetPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

 async componentDidMount() {
    const posts = await getAllPosts("/posts");
    this.setState({ posts: posts });
  }

  render() {
    return <>
    <h2>Get All Posts Title</h2>
    {
        this.state.posts.map(({title,id})=>(
            <span key={id} className="post">{title}</span>
        ))
    }
    </>;
  }
}
