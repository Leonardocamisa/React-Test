import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const PostList = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    post.map((post) => {
    return <div key={post.id} className="card">
        <Link to="/PostDetails">Details</Link>
      <h1>title {post.id}: {post.title}</h1>
    </div>})
  );
}
export default PostList;