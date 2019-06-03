import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts, removePost } from "../actions/postActions";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  handleRemovePost = (id) => {
    console.log("Removing post...", id);

    this.props.removePost(id);

  }

  render() {
    const { posts } = this.props;

    const renderPosts = posts.map(post => {
      return (
        <div key={post.id}>
          <h3>
            <button
            onClick={() => this.handleRemovePost(post.id)}
            >x</button> {post.title}
          </h3>

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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(
  mapStateToProps,
  { fetchPosts, removePost }
)(Posts);
