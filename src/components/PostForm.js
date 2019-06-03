import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions';

 class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    // console.log(e.target.name);
    // console.log(e.target.value);

    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { title, body } = this.state;

    const post = {
      title,
      body
    };

    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <h2>Add Post</h2>

        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="">
              Title
              <br />
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              Body
              <br />
              <textarea
                name="body"
                onChange={this.onChange}
                value={this.state.body}
              />
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
}

export default connect(null, {createPost})(PostForm);
