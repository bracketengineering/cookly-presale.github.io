"use client"
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

export default function ContactForm() {
    //use client
    // State to store input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle input change
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: any) => {
        e.preventDefault(); // Prevents the default form submission behavior
        console.log('Form Data Submitted:', formData);
        // Here you can add what to do with the data, e.g., send it to a server
    };

    return (
        <div className="items-center justify-center flex flex-col py-32">
            <p className="max-w-[800px] space-y-6 mt-16 mb-8 flex flex-1 font-mono flex-col mx-16">
                <span className="block text-3xl font-black text-center text-transparent outline-text">Beta Testers</span>
                <span className="block">If you're as excited about this as we are, we'd love to have your advice and come on board as a beta tester. You'll can be one of your most important members and shape the future of Cookly.</span>
            </p>
            <form onSubmit={handleSubmit} className='flex flex-col w-full items-center space-y-4 font-mono lg:flex px-16 pb-16 max-w-[600px]'>
                <div className='w-full flex '>
                    <input
                        type="text"
                        placeholder='Name'
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full flex py-3 px-4 border-[1px] border-gray-300'
                    />
                </div>
                <div className='w-full flex '>
                    <input
                        type="email"
                        placeholder='Email'
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full flex py-3 px-4 border-[1px] border-gray-300'
                    />
                </div>
                <div className='w-full flex mb-4'>
                    <textarea
                        id="message"
                        placeholder='Message'
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className='w-full flex py-3 px-4 border-[1px] border-gray-300'
                    />
                </div>
                <div className='h-4'></div>
                <button className="bg-[#1edf2b] hover:bg-black text-black w-full hover:text-white font-bold px-8 py-4 rounded-full ">Send Proposal</button>
            </form>
        </div>
    );
}