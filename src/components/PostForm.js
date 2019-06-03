import React, { Component } from "react";

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    console.log(e.target.name);
    console.log(e.target.value);

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

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
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
