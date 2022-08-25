import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const baseURL = `https://jsonplaceholder.typicode.com/posts`;

const PostList = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    try{axios.get(baseURL).then((response) => {
      setPost(response.data);
    })} catch (error) {
      console.log(error)
    }
  }, []);

  if (!post) return null;

  return (
    post.slice(0, 10).map(post => {
    return <div key={post.id} className="card" >
        <Link to={`/PostDetails?id=${post.id}`} style={{textDecoration: 'none', color:'white'}}>Press for details</Link>
      <h1>{post.title}</h1>
    </div>})
  );
}
export default PostList;