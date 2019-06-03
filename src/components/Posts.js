import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';

class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }
  

  render() {
    const { posts } = this.props;

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

const mapStateToProps = state =>({
  
    posts: state.posts.items
  
})
export default connect(mapStateToProps, {fetchPosts})(Posts);
