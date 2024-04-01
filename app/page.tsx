"use client"
import dynamic from 'next/dynamic';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from "@mui/material";
import ContactForm from "./components/contactForm";
import Link from 'next/link';
import logo from "./assets/logo.png";
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
const prefix = "https://cookly.co.uk"

const CountdownTimer = dynamic(() => import('./components/countdown'), {
  ssr: false
});


export default function Home() {
  const [referral, setReferral] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const temp = urlParams.get('referral');
    setReferral(temp);

    // Do something with the metadata value
    console.log(referral);

    // You can store the metadata in state, context, or any other desired location
  }, []);


  return (
    <main className="flex flex-col items-center max-w-screen overflow-hidden">
      <div className="flex flex-row justify-center items-center sticky top-0 w-full px-[2%] min-h-[85px]">
        <div className=" max-w-[1200px] flex flex-row justify-between w-full">
          <Link href={`/${referral ? `?referral=${referral}` : ``}`} className='flex flex-row space-x-2'>
            <img src={`${prefix}/logo.png`} alt="f" width={32} height={32} className='rounded-3xl'></img>
            <text className="text-black font-bold text-2xl">Cookly</text>
          </Link>
          <Link href={`/lifetime${referral ? `?referral=${referral}` : ``}`}>
            <ShoppingCartIcon />
          </Link>
        </div>
      </div>
      <div className="relative min-h-[91vh] flex flex-col z-10 w-full items-center space-y-8 justify-around  lg:flex px-8 pt-16 pb-[137px] shadow-lime-500/50 ">
        <div className='z-[-100] bg-gradient-conic blur-2xl opacity-60 from-green-900 via-[#1edf2b] absolute right-[-100px] lg:right-[10%] translate-y-[-200px] w-[200px] h-[200px]'></div>
        <div className='z-[-100] bg-gradient-conic blur-2xl opacity-35 from-green-900 via-[#1edf2b] absolute left-[-200px] lg:left-32 lg:translate-y-[100px] translate-y-[300px] w-[300px] h-[300px]'></div>
        <p data-aos="fade-up" data-aos-delay="400" className="uppercase font-mono text-center font-black text-6xl ">
          Unlock <span className="text-transparent outline-text">your</span> potential
        </p>
        <p className="max-w-[800px] text-center font-mono" data-aos="fade-up" data-aos-delay="600"><span className="font-bold ">April 2024</span> is when you begin a nutrition journey tailored uniquely to you — because your health deserves personalisation, not guesswork.</p>
        <ContactForm />
      </div>

      <div className="min-h-[60vh] max-w-[1000px] lg:space-x-16 lg:space-y-0 space-y-16 flex-col-reverse space-y-reverse relative flex lg:flex-row z-10 w-full items-center  justify-around  lg:flex px-8 pb-16">
        <img src={`${prefix}/Logger.png`} alt="f" width={250} height={250} className='rounded-2xl shadow-xl' data-aos="fade-up" data-aos-delay="400" />
        <p className=" space-y-12">
          <span data-aos="fade-up" data-aos-delay="400" className="block">Currently, the health and fitness space remains exclusive for the people who already understand it and know what to eat.‍</span>
          <span className="block" data-aos="fade-up" data-aos-delay="400">We're developing an app that aims to make gaining muscle, maintaining and losing weight accessible and simpler than ever.</span>
          <span className="block" data-aos="fade-up" data-aos-delay="400">You will be able to track your macros with a tracker that constantly updates itself to align with <span className="font-bold">YOUR</span> metabolism. And also provide you with food recommendations based on food you like and already eat.</span>
          <span className="block" data-aos="fade-up" data-aos-delay="400">Achieving your goals has literally never been easier.</span>
          <span className="block" data-aos="fade-up" data-aos-delay="400">We're offering our first users the opportunity to become a <span className="font-bold">Founding Member</span>. While the application will be free to download and use certain features, premium features will be accessible only through annual/monthly memberships. By contributing to Cookly as a Founding Member, you are supporting our inception and gaining exclusive access to state-of-the-art nutritional features, forever. By becoming a Founding Member, you will be granted a lifetime membership to all current and future premium features.</span>
        </p>
      </div>

      <p className="relative uppercase text-center font-black  text-6xl my-16 w-full">
        <span className="text-black" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1000">Features</span>
        <div className='z-[-100] bg-gradient-to-r blur-2xl opacity-30 from-green-900 via-[#1edf2b] absolute right-[-150px] lg:right-[2%] translate-y-[-250px] lg:w-[400px] w-[300px] h-[300px]'></div>
      </p>
      <div className=" relative min-h-[91vh] max-w-[1000px] flex lg:space-x-16 flex-col-reverse lg:flex-row z-10 w-full lg:items-start items-center  justify-around px-8 py-16">

        <div>
          <p className="max-w-[800px] space-y-12" data-aos="fade-right" data-aos-delay="400">
            <span className="block text-3xl font-bold ">Dynamic Macro Tracking</span>
            <span className="block">Unlike ordinary calorie trackers, which don't at all consider different metabolic rates, our <span className="font-bold">Premium Subscription</span> boasts a dynamic macro goal setter. An advanced algorithm powered by AI that constantly redefines itself for your own metabolism, so that you can be confident you will meet your goals.</span>
          </p>
          <p className="max-w-[800px] space-y-12 mt-16" data-aos="fade-left" data-aos-delay="400">
            <span className="block text-3xl font-bold ">Personalised Food Recommendations</span>
            <span className="block">Currently, the market for health & fitness apps offer no value aside from confusing data, which is left up to you to interpret. For most who don't have pre-requisite nutrition knowledge, this can leave many people overwhelmed and confused as to how they improve. So we're building a food recommendation engine using AI and Machine Learning to recommend you foods, that not only align with your health and fitness goals, but even your personal dietary preferences.</span>
          </p>
          <p className="max-w-[800px] space-y-6 mt-16" data-aos="fade-right" data-aos-delay="400">
            <span className="block text-3xl font-bold ">Poop Tracker</span>
            <span className="block">Yep... Exactly what it sounds like.</span>
            <span className="block">You can even track your bowel movements. In the future, we hope to integrate food recommendations that even tailor to how your body reacts to different foods!</span>

          </p>
        </div>
        <img src={`${prefix}/Dynamic.png`} alt="f" width={250} height={250} className='rounded-2xl shadow-xl mb-16 z-[1000]' data-aos="fade-up" data-aos-delay="400" />
      </div>

      <div className=" relative max-w-[1000px] flex lg:space-x-16 lg:space-y-0 space-y-12 flex-col-reverse lg:flex-row z-10 w-full lg:items-start items-center  justify-around px-8 pt-16 pb-32">
        <img src={`${prefix}/Weight.png`} alt="f" width={300} height={250} className='rounded-2xl shadow-xl lg:mb-32 mb-16 z-[1000]' data-aos="fade-up" data-aos-delay="400" />
        <div className="max-w-[800px] space-y-12">
          <span className="block text-3xl font-bold ">Ready to begin?</span>
          <button type="submit" className="bg-[#1edf2b] hover:bg-black text-black justify-around w-full hover:text-white font-bold px-8 py-4 rounded-full flex flex-row">
            <div className='flex flex-row'>
              Join Early Access
            </div>
          </button>
        </div>
      </div>

      <Footer />

    </main>
  );
}
