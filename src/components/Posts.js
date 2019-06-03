import React, { Component } from "react";

class Posts extends Component {

  render() {
    const { posts } = this.state;

    const renderPosts = posts.map(post => {
      return (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });

    return (
      <div>
        <h1>Posts</h1>
        {renderPosts}
      </div>
    );
  }
}
export default Posts;
