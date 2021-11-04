import React, { Component } from "react";
import "./LisrOfPosts.css";
import axios from "axios";

class ListOfPosts extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      disc: "",
      edit: null,
      id: "",
      datatable: [],
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const res = await axios.get("http://localhost:5000/post", {
      "content-type": "application/json",
    });
    const data = res.data.doc;
    console.log(`data`, data);
    this.setState({
      datatable: data,
    });
  };

  deletePost = async (id) => {
    this.setState({
      datatable: this.state.datatable.filter((el) => el._id !== id),
    });
    await axios.delete(`http://localhost:5000/post/${id}`, {
      "content-type": "application-json",
    });
  };

  EditPost = async (data) => {
    this.setState({
      title: data.title,
      disc: data.disc,
      id: data._id,
      edit: true,
    });
  };

  updatePost = async () => {
    const data = {
      title: this.state.title,
      disc: this.state.disc,
    };
    await axios.put(`http://localhost:5000/post/${this.state.id}`, data, {
      "content-type": "application-json",
    });
    this.setState({
      title: "",
      disc: "",
      edit: null,
      id: "",
    });
    this.getData();
  };

  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-10">
              {" "}
              <input
                type="text"
                class="form-control mb-2 mr-sm-2 col-sm-4"
                name="title"
                value={this.state.title}
                onChange={this.changeHandler}
                id="field-name"
                placeholder="title...."
              />{" "}
              <input
                type="text"
                class="form-control mb-2 mr-sm-2 col-sm-4"
                name="disc"
                value={this.state.disc}
                onChange={this.changeHandler}
                id="field-name"
                placeholder="disc...."
              />
            </div>
            <div class="col-2">
              <button onClick={this.updatePost} class="btn btn-info">
                Update
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="panel panel-primary">
                <div class="panel-heading">
                  <h3 class="panel-title">List Of Posts</h3>
                </div>
                <ul class="list-group">
                  {this.state.datatable.map((el) => {
                    return (
                      <li class="list-group-item mx-3">
                        {el.title} -<span>{el.disc}</span>{" "}
                        <button
                          onClick={() => this.deletePost(el._id)}
                          class="btn btn-danger px-3 mx-4"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => this.EditPost(el)}
                          class="btn btn-warning px-4"
                        >
                          Edit
                        </button>{" "}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListOfPosts;
