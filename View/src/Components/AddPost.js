import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AddPost.css";
import axios from "axios";

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      disc: "",
      edit: null,
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitPost = async (e) => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      disc: this.state.disc,
    };
    await axios.post("http://localhost:5000/post", data, {
      "content-type": "application/json",
    });
  };

  render() {
    return (
      <div>
        <div class="wrapper fadeInDown">
          <div id="formContent">
            <div class="fadeIn first">
              <img
                src="https://yt3.ggpht.com/a/AATXAJxJnVSaX8tvCay9UeTXanZJRCzF7Y50YMq17Q=s900-c-k-c0xffffffff-no-rj-mo"
                id="icon"
                alt="User Icon"
              />
              <h1>Add Post</h1>
            </div>

            <form>
              <input
                type="text"
                id="login"
                class="fadeIn second"
                name="title"
                onChange={this.changeHandler}
                value={this.state.title}
                placeholder="Title"
                autocomleted="off"
              />
              <input
                type="text"
                id="password"
                class="fadeIn third"
                name="disc"
                onChange={this.changeHandler}
                value={this.state.disc}
                placeholder="Disc"
                autocomleted="off"
              />
            </form>
            <button
              type="submit"
              onClick={this.submitPost}
              class="btn btn-info px-5 my-3"
            >
              Post
            </button>
            <div id="formFooter">
              <Link to="posts" class="underlineHover" href="#">
                List Of Posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPost;
