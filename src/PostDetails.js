import { useSearchParams } from 'react-router-dom';
import React from "react";
import axios from "axios";
import CommentSection from "./CommentSection";
import UserFile from './UsersFile';
import Navbar from './Navbar';

const PostDetails = () => {
  const [ searchParams ] = useSearchParams();
  const id = searchParams.get('id');

    const [postData, setPostData] = React.useState(null);
    
    React.useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => {
          setPostData(response.data);
        });
      }, []);
    
      if (!postData) return null;

    return (
        <>
           <Navbar />
           <div className='container'>
              <div key={postData.id}>
                <h1>Title: {postData.title}</h1>
                <p>Body : {postData.body}</p>
              </div>
                <UserFile />
                <h2>Comments</h2>
                <CommentSection />
            </div>    
        </>
            )
}

export default PostDetails;