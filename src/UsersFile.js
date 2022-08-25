import { useSearchParams } from 'react-router-dom';
import React from "react";
import axios from "axios";

const UserFile = () => {
    const [ searchParams ] = useSearchParams();
    const id = searchParams.get('id');

    const [userNm, setUserNm] = React.useState(null);

          React.useEffect(() => {
              try{axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
                setUserNm(response.data);
              })} catch (error) {
                console.log(error)
              }
            }, [id]);
          
            if (!userNm) return null;
      
                return (
                        <>
                          <div key={userNm.id}>
                          <p>Written by : <b>{userNm.name}</b></p>
                          </div>
                        </>
                    )            
}
export default UserFile;