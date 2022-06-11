import React, { useEffect } from "react";
import { useState } from "react";
import BlogList from "./BlogList";
import load from "./giphy.gif";
import useFetch from "./useFetch";
import "./Home2.css";
import pic from "./pic.jpg";

import SideBar from "./SideBar";
import Menu from "./Menu.js";
const Home = () => {
  {
    /*const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };*/
  }
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="page">
      <div className="nav split">
        <Menu />
      </div>
      <div className="content split">
        <div className="body">
          <SideBar />
        </div>

        <div className="home">
          <div className="matter">
            {error && <div>{error}</div>}
            {isPending && (
              <div className="loading">
                <img src={load} alt="load" style={{ width: "300px" }} />
              </div>
            )}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/*handleDelete={handleDelete}*/}
            {/*<BlogList
        handleDelete={handleDelete}
        blogs={blogs.filter((blog) => blog.category === "food")}
        title="FOOD"
      />*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
