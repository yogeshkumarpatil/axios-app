import { Axios } from 'axios';
import React,{useEfffect, useState} from 'react'

const baseRUL = "https://jsonplaceholder.typicode.com/posts/1";

function GetAxios() {
    
   const [data, setData] = useState(null);

    useEfffect(() => {
        Axios.get(baseRUL).then((response) =>{
            setData(response.data);
        })
    });
  return (
    <>
        <h1>{data.id}</h1>
        <h1>{data.title}</h1>
        <h1>{data.body}</h1>
    </>
  )
}

export default GetAxios
