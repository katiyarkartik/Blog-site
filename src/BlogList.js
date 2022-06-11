import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  {
    /*handleDelete*/
  }
  // destructuring
  /*  const blogs = props.blogs;// we are assigning the value in variables  to use la
  const head = props.title;
  */
  
  
  return (
    <div className="blog-list">
      <h3>{title}</h3>
      {blogs.map((blog) => (
       
        <div className="blog-preview" key={blog.id}>
          <img className="preview-image" src={blog.image} />
          <div className="blog-details">
            <h4>{blog.genre}</h4>
            <h1 className="blog-title">{blog.title}</h1>
            <p className="desc">{blog.description}</p>
            <p>{blog.cdate}</p>
            <p>{blog.time}</p>
           
            <p></p>
            <p className="author">Author : {blog.author}</p>
            <p style={{ color: "red" }}>♥ {blog.likes} Likes</p>

            <Link to={`/blogs/${blog.id}`}>
              <div className="link">
                <p>Read more...</p>
              </div>
            </Link>

            {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>*/}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
