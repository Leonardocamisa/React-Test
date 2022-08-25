import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';


const baseURL = `https://jsonplaceholder.typicode.com/posts`;

const PostList = () => {
  const [ searchParams ] = useSearchParams();
  const id = searchParams.get('id');
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
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