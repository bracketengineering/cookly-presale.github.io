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
import Footer from '../components/Footer';
const prefix = "https://cookly.co.uk"
export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-screen overflow-hidden">
      <div className="flex flex-row justify-center items-center sticky top-0 w-full px-[2%] min-h-[85px]">
        <div className="max-w-[1200px] flex flex-row justify-between w-full">
          <Link href={`/`} className='flex flex-row space-x-2'>
            <img src={`${prefix}/logo.png`} alt="f" width={32} height={32} className='rounded-3xl'></img>
            <text className="text-black font-bold text-2xl">Cookly</text>
          </Link>
          <Link href={`/lifetime`}>
            <ShoppingCartIcon />
          </Link>
        </div>
      </div>
      <div className="relative min-h-[91vh] flex flex-col z-10 w-full items-center space-y-8 justify-around  lg:flex px-8 pt-16 pb-[137px] shadow-lime-500/50">
        <div className='z-[-100] bg-gradient-conic blur-2xl opacity-60 from-green-900 via-[#1edf2b] absolute right-[-100px] lg:right-[10%] translate-y-[-200px] w-[200px] h-[200px]'></div>
        <div className='z-[-100] bg-gradient-conic blur-2xl opacity-35 from-green-900 via-[#1edf2b] absolute left-[-200px] lg:left-32 lg:translate-y-[100px] translate-y-[300px] w-[300px] h-[300px]'></div>
        <p className="uppercase text-center font-black text-6xl ">
          Thank <span className="text-transparent outline-text">you</span>
        </p>
        <div>
          <p className="uppercase text-center font-black text-7xl ">
            Wanna Earn £5?
          </p>

        </div>
        <p className="max-w-[800px] text-center">We're thrilled to have you on board. As a thank you, we're sending you a unique promo code (and link) <span className="font-black ">via email. </span>For every person you refer they get £5 off their purchase and <span className="font-black ">we pay you £5! </span>This is not capped, so you get <span className="font-black ">£5</span> for every referral!</p>
        <p className="max-w-[800px] text-center">Make sure to check your spam folder...</p>

      </div>

      <Footer />


    </main>
  );
}
