import Menu from "./Menu";
import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import "./New.css";
import Home from "./Home";
import TopAuthors from "./TopAuthors";

const New = () => {
  return (
    // <div className="main-page split left">
    //   <div className="menu">
    //     <Menu />
    //   </div>
      <div className="content split right">
        <div className="nav">
          <Nav />
        </div>
        <div className="blog-contents">
          <div className="top">
            <h1>Top Authors</h1>
            <TopAuthors />
          </div>
           <h3>Categories</h3>
          <Home />
          <h1 className="end">No More Posts</h1>
        </div>
      </div>
    // </div>
  );
};

export default New;
