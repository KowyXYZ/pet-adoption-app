"use client";

import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';

const SearchPage = ({ params }) => {
    const [feedData, setFeedData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(8);

    const fetchPosts = async () => {
        try {
            const response = await fetch('/api/post');
            const data = await response.json();
            setFeedData(data);
            applySearchFilter(data); // Apply filter on fetched data
        } catch (error) {
            console.error('Failed to fetch posts:', error);
        }
    };

    const applySearchFilter = (data) => {
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(params.searchText.toLowerCase()) ||
            item.location.toLowerCase().includes(params.searchText.toLowerCase()) ||
            item.breed.toLowerCase().includes(params.searchText.toLowerCase()) ||
            item.gender.toLowerCase().includes(params.searchText.toLowerCase()) ||
            item.size.toLowerCase().includes(params.searchText.toLowerCase()) ||
            item.text.toLowerCase().includes(params.searchText.toLowerCase()) ||
            item.creator.toLowerCase().includes(params.searchText.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const paginate = (data, pageNumber, itemsPerPage) => {
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    };

    const handlePageChange = (direction) => {
        setCurrentPage(prevPage => {
            if (direction === 'next') {
                return Math.min(prevPage + 1, totalPages);
            } else if (direction === 'prev') {
                return Math.max(prevPage - 1, 1);
            }
            return prevPage;
        });
    };

    const currentData = paginate(filteredData, currentPage, cardsPerPage);
    const totalPages = Math.ceil(filteredData.length / cardsPerPage);

    useEffect(() => {
        fetchPosts();
    }, [params.searchText]);

    useEffect(() => {
        applySearchFilter(feedData); // Reapply filters when data or search text changes
    }, [feedData, params.searchText]);

    return (
        <div className='py-12 container mx-auto flex flex-col items-center'>
            <div className='gap-12 flex justify-start items-center flex-col'>
                <div className='flex flex-wrap gap-8 justify-start items-center'>
                    {currentData.length > 0 ? currentData.map((card, index) => (
                        <Card key={index} data={card} />
                    )) : <p className='py-96'>No Data found, try searching something that acutally exists :D</p>}
                </div>

                <div className={`${currentData.length > 0 ? 'flex' : 'hidden'} justify-between items-center w-full max-w-md mt-6`}>
                    <button
                        onClick={() => handlePageChange('prev')}
                        disabled={currentPage === 1}
                        className='px-4 py-2 bg-[#5D4FC4] text-white rounded disabled:opacity-50'
                    >
                        Previous
                    </button>
                    <span className='text-lg'>{`Page ${currentPage} of ${totalPages}`}</span>
                    <button
                        onClick={() => handlePageChange('next')}
                        disabled={currentPage === totalPages}
                        className='px-4 py-2 bg-[#5D4FC4] text-white rounded disabled:opacity-50'
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
