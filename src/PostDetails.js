// import {useParams, useSearchParams} from 'react-router-dom';
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const baseUrlPost = `https://jsonplaceholder.typicode.com/posts/`;


const PostDetails = () => {


    const [postData, setPostData] = React.useState(null);
    
    React.useEffect(() => {
        axios.get(baseUrlPost).then((response) => {
          setPostData(response.data);
        });
      }, []);
    
      if (!postData) return null;

    return (
        postData.map(data => {
            return <div key={postData.id}>
                    <h3>Title: {postData.title}</h3>
                    <p>Body : {postData.body}</p>
                </div>})
    );
}

export default PostDetails;