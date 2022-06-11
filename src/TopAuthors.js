import React from "react";
import { Link } from "react-router-dom";
import "./TopAuthors.css";
const TopAuthors = () => {
  return (
    <div className="top-authors">
      <Link to="/authors">
        <div className="card">
          <img
            className="author-img"
            src="https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg"
          />

          <h3 className="author-name">John Doe</h3>
        </div>
      </Link>
      <div className="card">
        <img
          className="author-img"
          src="https://image.shutterstock.com/image-photo/side-view-ethnic-short-haired-600w-1555070621.jpg"
        />
        <h3 className="author-name">Shane Smith</h3>
      </div>
      <div className="card">
        <img
          className="author-img"
          src="https://image.shutterstock.com/image-vector/check-back-soon-black-white-600w-1683011854.jpg"
        />
        <h3 className="author-name">Richard Roe</h3>
      </div>
      <div className="card">
        <img
          className="author-img"
          src="https://image.shutterstock.com/image-vector/rubber-short-way-stamp-red-600w-2035683443.jpg"
        />
        <h3 className="author-name">Ashley Allen</h3>
      </div>
      <div className="card">
        <img
          className="author-img"
          src="https://image.shutterstock.com/image-photo/chisinau-moldova-june-19-2021-600w-2034113705.jpg"
        />
        <h3 className="author-name">Dave Lee</h3>
      </div>
    </div>
  );
};

export default TopAuthors;
