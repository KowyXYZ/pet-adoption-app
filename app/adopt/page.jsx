"use client";

import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const Page = () => {
    const [feedData, setFeedData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [category, setCategory] = useState('any');
    const [size, setSize] = useState('any');
    const [gender, setGender] = useState('any');
    const [age, setAge] = useState('any');
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(8); // Set to 6 posts per page

    const fetchPosts = async () => {
        try {
            const response = await fetch('/api/post');
            const data = await response.json();
            setFeedData(data);
            setFilteredData(data);  // Initialize filteredData with all data
        } catch (error) {
            console.error('Failed to fetch posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const applyFilters = () => {
        let filtered = feedData;

        if (category !== 'any') {
            filtered = filtered.filter(item => item.breed === category);
        }

        if (size !== 'any') {
            filtered = filtered.filter(item => item.size === size);
        }

        if (gender !== 'any') {
            filtered = filtered.filter(item => item.gender === gender);
        }

        if (age !== 'any') {
            filtered = filtered.filter(item => {
                const itemAge = Number(item.age); // Convert age to number
    
                if (age === '1-12') {
                    return itemAge >= 1 && itemAge <= 12;
                }
    
                if (age === '12-24') {
                    return itemAge > 12 && itemAge <= 24;
                }
    
                if (age === '24+') {
                    return itemAge > 24;
                }
    
                return false;
            });
        }

        setFilteredData(filtered);
        setCurrentPage(1); // Reset to the first page when filters are applied
    };

    const resetFilters = () => {
        setCategory('any');
        setSize('any');
        setGender('any');
        setAge('any');
        setFilteredData(feedData); // Reset to all data
        setCurrentPage(1); // Reset to the first page
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

    return (
        <div className='py-24 mx-24 flex'>
            {/* Filters Section */}
            <div className='flex flex-col items-start justify-start w-1/4 pr-6'>
                <div className='border-b-2 gap-32 flex justify-between items-center text-[#5D4FC4]'>
                    <p>Filters</p>
                    <button
                        onClick={resetFilters}
                        className='text-gray-400 hover:text-[#5D4FC4] transition-colors'
                    >
                        Reset Filters
                    </button>
                </div>

                <div className='flex flex-col justify-center items-center gap-8 mt-8'>
                    <div className='flex justify-center items-center gap-8 text-center text-[#5D4FC4]'>
                        <div
                            className={`border-2 rounded-full p-4 flex justify-center items-center flex-col cursor-pointer transition-colors ${category === 'cat' ? 'bg-[#5D4FC4] text-white' : 'border-gray-400'}`}
                            onClick={() => setCategory(category === 'cat' ? 'any' : 'cat')}
                        >
                            <img className={`${category === 'cat' ? 'invert' : ''}`} src="/assets/catfilter.png" alt="catfilter" />
                            <span className={category === 'cat' ? 'text-white' : ''}>Cat</span>
                        </div>

                        <div
                            className={`border-2 rounded-full p-4 flex justify-center items-center flex-col cursor-pointer transition-colors ${category === 'dog' ? 'bg-[#5D4FC4] text-white' : 'border-gray-400'}`}
                            onClick={() => setCategory(category === 'dog' ? 'any' : 'dog')}
                        >
                            <img className={`${category === 'dog' ? 'invert' : ''}`} src="/assets/dogfilter.png" alt="dogfilter" />
                            <span className={category === 'dog' ? 'text-white' : ''}>Dog</span>
                        </div>
                    </div>

                    <div className='flex justify-center items-end gap-8 text-center'>
                        <div
                            className={`font-black cursor-pointer ${size === 'small' ? 'text-[#5D4FC4]' : 'text-gray-800'}`}
                            onClick={() => setSize(size === 'small' ? 'any' : 'small')}
                        >
                            <img src="/assets/small.png" alt="small" />
                            <span className={size === 'small' ? 'text-[#5D4FC4]' : 'text-gray-800'}>Small</span>
                        </div>

                        <div
                            className={`font-black cursor-pointer ${size === 'medium' ? 'text-[#5D4FC4]' : 'text-gray-800'}`}
                            onClick={() => setSize(size === 'medium' ? 'any' : 'medium')}
                        >
                            <img src="/assets/medium.png" alt="medium" />
                            <span className={size === 'medium' ? 'text-[#5D4FC4]' : 'text-gray-800'}>Medium</span>
                        </div>

                        <div
                            className={`font-black cursor-pointer ${size === 'large' ? 'text-[#5D4FC4]' : 'text-gray-800'}`}
                            onClick={() => setSize(size === 'large' ? 'any' : 'large')}
                        >
                            <img src="/assets/large.png" alt="large" />
                            <span className={size === 'large' ? 'text-[#5D4FC4]' : 'text-gray-800'}>Large</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <label className='uppercase'>Gender</label>
                        <Select
                            value={gender}
                            onValueChange={setGender}
                            className={gender !== 'any' ? 'border-[#5D4FC4] text-[#5D4FC4]' : ''}
                        >
                            <SelectTrigger className="w-[300px]">
                                <SelectValue placeholder="Gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Gender</SelectLabel>
                                    <SelectItem value="any">Any</SelectItem>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <label className='uppercase'>Age</label>
                        <Select
                            value={age}
                            onValueChange={setAge}
                            className={age !== 'any' ? 'border-[#5D4FC4] text-[#5D4FC4]' : ''}
                        >
                            <SelectTrigger className="w-[300px]">
                                <SelectValue placeholder="Age" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Age</SelectLabel>
                                    <SelectItem value="any">Any</SelectItem>
                                    <SelectItem value="1-12">1-12 months</SelectItem>
                                    <SelectItem value="12-24">12-24 months</SelectItem>
                                    <SelectItem value="24+">24+ months</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <button
                        onClick={applyFilters}
                        className='mt-4 px-4 py-2 bg-[#5D4FC4] text-white rounded'
                    >
                        Apply Filters
                    </button>
                </div>
            </div>

            {/* Cards and Pagination Section */}
            <div className='flex flex-col justify-start items-start w-full'>
                <div className='flex flex-wrap gap-8 justify-start items-start'>
                     {currentData.length > 0 ? currentData.map((card, index) => (
                        <Card key={index} data={card} />
                    )) : <p className='py-96 text-center'>No Data found, try searching something that acutally exists :D</p>}
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

export default Page;
