import { useSearchParams } from 'react-router-dom';
import React from "react";
import axios from "axios";

const UserFile = () => {
    const [ searchParams ] = useSearchParams();
    const id = searchParams.get('id');

    const [userNm, setUserNm] = React.useState(null);

          React.useEffect(() => {
              axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
                setUserNm(response.data);
              });
            }, []);
          
            if (!userNm) return null;
      
                return (
                        <>
                          <div key={userNm.id}>
                          <p>Written by :{userNm.name}</p>
                          </div>
                        </>
                    )            
}
export default UserFile;