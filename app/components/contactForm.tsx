"use client"
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { sendSignup } from '../APIs/api';
import { send } from 'process';

export default function ContactForm() {
    //use client
    // State to store input values
    const [show, setShow] = useState(false);
    const [sent, setSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        message: '',
        isLifetime: false,
    });

    // Handle input change
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        if (sent == true) setSent(false);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: any) => {
        setShow(true);
        setErrorMessage(null);
        e.preventDefault(); // Prevents the default form submission behavior
        sendSignup(formData)
            .then(() => {
                setShow(false);
                setSent(true);
            }
            ).catch((error) => {
                console.log(error)
                setErrorMessage(error);
                setShow(false);
            });
        // Here you can add what to do with the data, e.g., send it to a server
    };

    return (
        <div className="relative items-center justify-center flex flex-col ">
            <form onSubmit={handleSubmit} className='flex flex-col w-full items-center space-y-4  lg:flex px-8'>
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
                <div className='min-h-4 text-red-500'>{errorMessage}</div>
                {sent ? <p>Thank you, we will be in touch soon.</p> : <button type="submit" className="bg-[#1edf2b] hover:bg-black text-black justify-around w-full hover:text-white font-bold px-8 py-4 rounded-full flex flex-row">
                    <div className='flex flex-row'>
                        {show ? <svg className="animate-spin h-6 w-6 mr-8 border-b-4 border-white rounded-full " /> : null}
                        Join Early Access
                    </div>
                </button>}
            </form>
        </div>
    );
}