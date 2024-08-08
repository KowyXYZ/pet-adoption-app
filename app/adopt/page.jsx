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
    };

    const resetFilters = () => {
        setCategory('any');
        setSize('any');
        setGender('any');
        setAge('any');
        setFilteredData(feedData); // Reset to all data
    };


    return (
        <div className='py-12 mx-24 flex gap-12 justify-start items-start'>
            <div className='flex flex-col justify-center gap-8 items-center'>
                <div className='border-b-2 gap-32 flex justify-between items-center text-[#5D4FC4]'>
                    <p>Filters</p>
                    <button
                        onClick={resetFilters}
                        className='text-gray-400 hover:text-[#5D4FC4] transition-colors'
                    >
                        Reset Filters
                    </button>
                </div>

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

                <div className='flex justify-center items-start gap-5 flex-col'>
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

            <div>
                <div className='gap-12 flex justify-start items-start flex-col'>
                    <div className='flex flex-wrap gap-8 justify-start items-start'>
                        {filteredData.map((card, index) => (
                            <Card key={index} data={card} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
