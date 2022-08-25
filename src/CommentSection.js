import { useSearchParams } from 'react-router-dom';
import React from "react";
import axios from "axios";

const CommentSection = () => {
    const [ searchParams ] = useSearchParams();
    const id = searchParams.get('id');
    const [comments, setComments] = React.useState(null);

          React.useEffect(() => {
              axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then((response) => {
                setComments(response.data)
              }).catch(err => {console.log(err)}) 
            }, [id]);
              
            if (!comments) return null;
      
                return (
                    comments.map(comment => {
                    return <>
                              <div key={comment.id}>
                                <hr></hr>
                                <p>{comment.body}</p>
                                <p>{comment.email}</p>
                              </div>
                            </>
                        }
                    )
            )
}
export default CommentSection;