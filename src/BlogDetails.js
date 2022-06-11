import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const BlogDetails = () => {
  const [like, setlike] = useState(false);
  const vote = (e) => {
    e.preventDefault();

    if (like == false) {
      setlike(true);
      blog.likes = blog.likes + 1;
    } else {
      setlike(false);
      blog.likes = blog.likes - 1;
    }
  };
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div> Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>

          <h3>{blog.author}</h3>
          <button onClick={vote}>Like</button>
          <h3>Likes= {blog.likes}</h3>
          <p>{blog.body}</p>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
