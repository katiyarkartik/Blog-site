import React, { useState } from "react";
import Menu from "./Menu";
import "./Create.css";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import "./New.css";
import Home from "./Home";
import TopAuthors from "./TopAuthors";
import { useHistory } from "react-router-dom";
const Create = () => {
  let newdate = new Date();
  let date = newdate.getDate();
  let month = newdate.getMonth();
  let year = newdate.getFullYear();
  const cdate = `${year}${"-"}${
    month < 10 ? `0${month}` : `${month}`
  }${"-"}${date}`;
  let time = `${newdate.getHours()}${":"}${newdate.getMinutes()}${":"}${newdate.getSeconds()}`;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const [likes, setLikes] = useState(0);

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author, genre, image, likes, cdate, time };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      //history.go(-1);
      history.push("/");
    });
  };
  return (
    <div className="content create-class split right">
      <div className="create">
        <h2 className="create-header">Create a New Blog</h2>
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="ghj">
            <div className="form-title a">
              <input
                required
                className="title-input b"
                type="text"
                value={title}
                placeholder="Enter title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <br></br>

          <div className="form-body a">
            <textarea
              className="textarea b"
              required
              placeholder="Enter the body content"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>

          <br></br>
          <div className="form-image a">
            <input
              required
              className="img-url"
              type="text"
              placeholder="Enter image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <br></br>
          <div className="form-author a">
            <input
              required
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter Author name"
            />
          </div>
          <br></br>
          <div className="form-genre a">
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
              <option value="Select">Genre</option>
              <option value="Sports">Sports</option>
              <option value="Food">Food</option>
              <option value="Health">Health</option>
              <option value="Space">Space</option>
              <option value="Faishon">Faishon</option>
            </select>
          </div>

          <br></br>

          <button className="add-btn a">Add Blog</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
