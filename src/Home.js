import BlogList from "./BlogList";
import load from "./giphy.gif";
import Navbar from "./Navbar";
import useFetch from "./useFetch";
import Loading from "./Loading";
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
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && (
        <div className="loading">
          <Loading />
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
  );
};

export default Home;
