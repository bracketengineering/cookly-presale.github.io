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
const prefix = "https://bracketengineering.github.io/cookly-presale.github.io";

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
    <main className="flex flex-col items-center">
      <div className="flex flex-row justify-center items-center sticky top-0 w-full px-[2%] min-h-[85px]">
        <div className=" max-w-[1200px] flex flex-row justify-between w-full">
          <Link href={`/${referral ? `?referral=${referral}` : ``}`} className='flex flex-row space-x-2'>
            <Image src={`${prefix}/logo.png`} alt="f" width={32} height={32} className='rounded-3xl'></Image>
            <text className="text-black font-bold text-2xl">Cookly</text>
          </Link>
          <Link href={`/lifetime${referral ? `?referral=${referral}` : ``}`}>
            <ShoppingCartIcon />
          </Link>
        </div>
      </div>
      <div className="min-h-[91vh] flex flex-col z-10 w-full items-center space-y-8 justify-around font-mono lg:flex px-8 pt-16 pb-[137px] shadow-lime-500/50">
        <p data-aos="fade-up" data-aos-delay="400" className="uppercase text-center font-black text-6xl ">
          Unlock <span className="text-transparent outline-text">your</span> potential
        </p>
        <p className="max-w-[800px] text-center" data-aos="fade-up" data-aos-delay="600"><span className="font-bold">April 2024</span> is when you begin a nutrition journey tailored uniquely to you — because your health deserves personalisation, not guesswork.</p>
        <div className="justify-around justify-center items-center flex flex-col space-y-16">
          <div data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1500">
            <CountdownTimer />

            <p className="text-center text-red-500 font-bold mt-4 max-w-[400px]">LIMITED TIME OFFER!</p>
          </div>
          <Link href={`/lifetime/${referral ? `?referral=${referral}` : ``}`} >
            <button data-aos="fade-in" data-aos-delay="1500" data-aos-duration="1500" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 delay-150 bg-[#1edf2b] hover:bg-black text-black text-lg hover:text-white font-bold px-8 py-4 rounded-full" >Become A Founding Member</button>
          </Link>
        </div>
      </div>

      <div className="min-h-[60vh] flex flex-col z-10 w-full items-center  justify-around font-mono lg:flex px-8 pb-16">
        <p className="max-w-[800px] space-y-12">
          <span data-aos="fade-up" data-aos-delay="400" className="block">Currently the health and fitness space remains exclusive for the people who already understand it and know what to eat.‍</span>
          <span className="block" data-aos="fade-up" data-aos-delay="400">We're developing an app that aims to make gaining muscle, maintaining and losing weight accessible and simpler than ever.</span>
          <span className="block" data-aos="fade-up" data-aos-delay="400">You will be able to track your macros with a tracker that constantly updates itself to align with <span className="font-bold">YOUR</span> metabolism. And also provide you with food recommendations based on food you like and already eat.</span>
          <span className="block" data-aos="fade-up" data-aos-delay="400">Achieving your goals has literally never been easier.</span>
          <span className="block" data-aos="fade-up" data-aos-delay="400">We're offering our first users the opportunity to become a <span className="font-black">Founding Member</span>. While the application will be free to download and use certain features, premium features will be accessible only through annual/monthly memberships. By contributing to Cookly as a Founding Member, you are supporting our inception and gaining exclusive access to state-of-the-art nutritional features forever. You will be granted a lifetime membership to all current and future premium features within the app when purchased before 1st April 2024.</span></p>

      </div>

      <p className="uppercase text-center font-black font-mono text-6xl my-16">
        <span className="text-black" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1000">Features</span>
      </p>
      <div className="min-h-[91vh] flex flex-col z-10 w-full items-center  justify-around font-mono lg:flex px-8 py-16">
        <p className="max-w-[800px] space-y-12" data-aos="fade-right" data-aos-delay="400">
          <span className="block text-3xl font-black ">Dynamic Macro Tracking</span>
          <span className="block">Unlike ordinary calorie trackers, which don't at all consider different metabolic rates, our <span className="font-black">Premium Subscription</span> boasts a dynamic macro goal setter. An advanced algorithm powered by AI that constantly redefines itself for your own metabolism, so that you can be confident you will meet your goals.</span>
        </p>
        <p className="max-w-[800px] space-y-12 mt-16" data-aos="fade-left" data-aos-delay="400">
          <span className="block text-3xl font-black ">Personalised Food Recommendations</span>
          <span className="block">Currently the market for health & fitness apps offer no value aside from data, which is left up for you to interpret. For most who don't have pre-requisite nutrition knowledge this can leave many, overwhelmed and confused as to how they improve. So we're building a food recommedation engine using AI and Machine Learning to recommend you foods that not only align with your health and fitness goals, but even your personal dietary preferences.</span>
        </p>
        <p className="max-w-[800px] space-y-6 mt-16" data-aos="fade-right" data-aos-delay="400">
          <span className="block text-3xl font-black ">Poop Tracker</span>
          <span className="block">Yep... Exactly what it sounds like.</span>
          <span className="block">You can even track your bowel movements. In the future, we hope to integrate food recommendations that even tailor to how your body reacts to different food!</span>
        </p>

      </div>

      <ContactForm />
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
