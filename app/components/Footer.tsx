import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 min-h-[20vh] text-white items-center  flex w-full p-4">
            <div className="max-w-screen-xl mx-auto py-8 flex flex-col md:flex-row w-full justify-between  items-center">
                <div className="flex space-y-4 flex-col">
                    <p>Bristol, UK</p>
                    <p>contact@bracket.software</p>
                    <p>© 2024 Cookly. All rights reserved.</p>
                </div>
                <div className="flex space-y-4 flex-col">
                    <a href="terms.cookly.co.uk/privatePolicy.html" className="text-white hover:text-gray-400">Privacy Policy</a>
                    <a href="terms.cookly.co.uk/termsOfService.html" className="text-white hover:text-gray-400">Terms of Use</a>
                    <a href="mailto:contact@bracket.software" className="text-white hover:text-gray-400">Contact Us</a>
                </div>
                <div className="flex mt-2 space-y-4 md:mt-0 flex-col">
                    <a href="#" className="text-white hover:text-gray-400 mr-2">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    {/* <a href="#" className="text-white  text-xs justify-center items-center hover:text-gray-400">
              <Reddit className="mr-2" />
              r/Cookly
            </a> */}
                    <a href="https://www.instagram.com/cooklyapp/" className="text-white  text-xs justify-center items-center hover:text-gray-400">
                        <InstagramIcon className="mr-2" />
                        @CooklyApp
                    </a>
                </div>
            </div>
        </footer>
    );
}