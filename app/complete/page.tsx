"use client"
import dynamic from 'next/dynamic';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from "@mui/material";
import Link from 'next/link';
import logo from "../assets/logo.png";
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useEffect, useState } from 'react';
import { ContentCopy, CopyAll, CopyAllOutlined } from '@mui/icons-material';
const prefix = "https://cookly.co.uk"
export default function Home() {
  const [referral, setReferral] = useState<string | null>(null);
  const [link, setLink] = useState("https://cookly.co.uk/?referral=EON34S");

  useEffect(() => {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const temp = urlParams.get('referral');
    setReferral(temp);

    // Do something with the metadata value
    console.log(referral);


    // You can store the metadata in state, context, or any other desired location
  }, [setReferral]);

  function copyClip() {

    // Copy the text inside the text field
    navigator.clipboard.writeText(link);

    // Alert the copied text
    alert("Copied the text: ");
  }


  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-row justify-center items-center sticky top-0 w-full px-[2%] min-h-[85px]">
        <div className=" max-w-[1200px] flex flex-row justify-between w-full">
          <Link href={`/${referral ? `?referral=${referral}` : ``}`} className='flex flex-row space-x-2'>
            <img src={`${prefix}/logo`} alt="f" width={32} height={32} className='rounded-3xl'></img>
            <text className="text-black font-bold text-2xl">Cookly</text>
          </Link>
          <Link href={`/lifetime${referral ? `?referral=${referral}` : ``}`}>
            <ShoppingCartIcon />
          </Link>
        </div>
      </div>
      <div className="min-h-[91vh] flex flex-col z-10 w-full items-center space-y-8 justify-around font-mono lg:flex px-8 pt-16 pb-[137px] shadow-lime-500/50">
        <p className="uppercase text-center font-black text-6xl ">
          Thank <span className="text-transparent outline-text">you</span>
        </p>
        <div>
          <p className="max-w-[800px] text-center mb-4">Your referral code:</p>
          <p className="uppercase text-center font-black text-7xl ">
            <span className="text-transparent outline-text">Earn</span> £5
          </p>

        </div>
        <p className="max-w-[800px] text-center">We're thrilled to have embark on this journey together. As a thank you we're sending your email a unique referral link and promo code. For every person you refer they get £5 off their purchase and <span className="font-black ">we pay you £5! </span>This is not capped, so you get <span className="font-black ">£5</span> for every referral!</p>

      </div>


      <footer className="bg-neutral-900 min-h-[20vh] text-white items-center  flex w-full p-4">
        <div className="max-w-screen-xl mx-auto py-8 flex flex-col md:flex-row w-full justify-between  items-center">
          <div className="flex space-y-4 flex-col">
            <p>Bristol, UK</p>
            <p>contact@bracket.software</p>
            <p>© 2024 Cookly. All rights reserved.</p>
          </div>
          <div className="flex space-y-4 flex-col">
            <a href="#" className="text-white hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="text-white hover:text-gray-400">Terms of Use</a>
            <a href="#" className="text-white hover:text-gray-400">Contact Us</a>
          </div>
          <div className="flex mt-2 space-y-4 md:mt-0 flex-col">
            <a href="#" className="text-white hover:text-gray-400 mr-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            {/* <a href="#" className="text-white  text-xs justify-center items-center hover:text-gray-400">
              <Reddit className="mr-2" />
              r/Cookly
            </a> */}
            <a href="#" className="text-white  text-xs justify-center items-center hover:text-gray-400">
              <InstagramIcon className="mr-2" />
              @CooklyApp
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
