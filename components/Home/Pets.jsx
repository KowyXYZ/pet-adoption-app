"use client"

import React, { useEffect, useState } from 'react'
import Card from '../Card';

const Pets = () => {

    const [feedData, setFeedData] = useState([])

    const fetchPosts = async () => {
        try {
            const response = await fetch('/api/post');
            const data = await response.json();
            setFeedData(data);
        } catch (error) {
            console.error('Failed to fetch posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [])
    
    console.log(feedData)

  return (
    <div className='w-full py-12'>
        {/* placeholder */}
        <div className='container mx-auto gap-12 flex justify-center items-center flex-col'>
            <h1 className='text-[32px] text-center'>Take a Look at Some of Our Pets</h1>
            <div className='flex  flex-wrap gap-8 justify-center items-center'>
                {feedData && feedData.map((card, index) => {
                    return(
                        <Card data={card}/>
                    )
                })}

            </div>

            <h1 className='underline'>See more...</h1>
        </div>
    </div>
  )
}

export default Pets