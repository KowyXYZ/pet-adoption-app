"use client"

import React, { useEffect, useState } from 'react'

const page = ({params}) => {

    const [postData, setPostData] = useState([]);

    const fetchPost = async () => {
        try {
            const response = await fetch(`/api/post/${params.id}`);
            const data = await response.json();
            setPostData(data);
        } catch (error) {
            console.error('Failed to fetch post:', error);
        }
    };
    
      useEffect(() => {
      
        fetchPost();
    }, [params.postid]); // Add params.id to dependency array to fetch data when it changes

    console.log(postData)

  return (
    <div>
        <p>{params.id}</p>
    </div>
  )
}

export default page