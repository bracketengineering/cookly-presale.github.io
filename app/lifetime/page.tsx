"use client";
import dynamic from "next/dynamic";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import ContactForm from "../components/contactForm";
import Link from "next/link";
import logo from "../assets/logo.png";
import plac from "../assets/phone.png";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Reddit } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { createCheckoutSession } from "../APIs/api";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
const prefix = "https://cookly.co.uk";

const CountdownTimer = dynamic(() => import("../components/countdown"), {
  ssr: false,
});

export default function Lifetime() {
  const [referral, setReferral] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const temp = urlParams.get("referral");
    setReferral(temp);

    // Do something with the metadata value
    console.log(referral);

    // You can store the metadata in state, context, or any other desired location
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const response = JSON.parse((await createCheckoutSession({
      priceId: "price_1OqxZNKvfn71PZ6opdwM2MYX",
      url: `https://buy.stripe.com/test_28o01o2HscA427C144`,
      domain: "https://cookly.co.uk",
      promo_code: referral,
    })).body);

    console.log(response, response.url);
    if (response && response.url) {
      window.location.href = response.url; // Redirects the browser to the URL
    }
  };

  return (
    <main className="flex flex-col items-center max-w-screen overflow-hidden">
      <div className="flex flex-row justify-center items-center sticky top-0 w-full px-[2%] min-h-[85px]">
        <div className=" max-w-[1200px] flex flex-row justify-between w-full">
          <Link href={`/${referral ? `?referral=${referral}` : ``}`} className='flex flex-row space-x-2'>
            <img src={`${prefix}/logo.png`} alt="f" width={32} height={32} className='rounded-3xl'></img>
            <text className="text-black font-bold text-2xl">Cookly</text>
          </Link>

          <Link
            href={`/lifetime${referral ? `?referral=${referral}` : ``}`}
            className=""
          >
            <ShoppingCartIcon className="ml-auto" />
          </Link>
        </div>
      </div>
      <section className=" py-16 min-h-screen w-full flex flex-col items-center justify-center">
        <div className="max-w-[1200px] flex lg:flex-row flex-col mx-8 lg:space-x-32 mb-auto items-center">
          <img src={`${prefix}/Dynamic.png`} alt="f" width={250} height={250} className=' items-center rounded-2xl shadow-xl mb-16 z-[1000]' data-aos="fade-up" data-aos-delay="400" />
          <div className="space-y-8">
            <span className="block text-4xl font-black ">Lifetime Premium</span>
            <div className="flex flex-row">
              <span className="block text-2xl font-bold line-through mr-4 text-neutral-300">
                £250.00
              </span>
              <span className="block text-2xl font-black flex flex-row ">
                £33.00
              </span>
            </div>
            <div>
              <Link href={`https://buy.stripe.com/9AQaH4gKs04c5Fe144${referral ? `?prefilled_promo_code=${referral}` : ``}`}>
                <button
                  className="transition ease-in-out hover:-translate-y-1 hover:scale-110 delay-150 border-[#1edf2b] border-2 hover:bg-[#1edf2b] text-black hover:text-white font-bold px-16 py-4 rounded-full w-full lg:w-auto md:w-auto"
                >
                  Buy Now
                </button>
              </Link>
            </div>
            <div className="flex flex-shrink-1 flex-col">
              <p className="pb-2 font-bold text-red-500">Ends in:</p>
              <div className="flex flex-shrink-1">
                <CountdownTimer />
              </div>
            </div>
            <span className="block text-red-500 font-bold">
              There will only ever be 1000 of these! So get yours now!
            </span>
            <div className="bg-white border-[1px] rounded-3xl py-4 px-6 relative">

              <div className='z-[-100] bg-gradient-conic blur-3xl opacity-10 from-green-600 via-[#1edf2b] absolute lg:bottom-0 bottom-[-50px] lg:top-[-20px] right-[-150px] w-[700px] h-[300px]'></div>
              <span className="block">
                Cookly is an app in development that will have premium features
                available at prices starting from{" "}
                <span className="font-bold">£80+</span> per year. By becoming a
                lifetime member now, before our inception, you will gain access
                to any and all premium features for a fraction of the price... <span className="font-bold">forever.</span>
              </span>
              <span className="block mt-4">
                Upon the app's release, if you're not happy with Cookly, you will have{" "}
                <span className="font-bold">60-days</span> to apply for a{" "}
                <span className="font-bold">hassle-free refund.</span>
              </span>
              <span className="block mt-4 font-bold">
                We plan to release the app on IOS in April 2024.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col z-10 w-full items-center relative justify-around  lg:flex px-8 py-32">
          <div className='z-[-100] bg-gradient-conic blur-2xl opacity-20 from-green-600 via-[#1edf2b] absolute bottom-[100px]  left-[100px] w-[700px] h-[300px]'></div>
          <div className="max-w-[800px] space-y-6">
            <span
              className="block text-3xl font-black"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              FAQ
            </span>
            <div
              className="bg-white px-8 py-4 rounded-3xl border-[1px] space-y-4"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <span className="block text-xl font-bold ">
                What extra features do I get as a Premium Member?
              </span>
              <span className="block ml-2">
                We plan to evolve our app and hence our premium features over
                time, but some of the things we plan on implementing as soon as
                possible are:
              </span>
              <ul className="ml-4 space-y-2 pb-2">
                <li>Dynamic Macro Tracker</li>
                <li>Higher quality meal recommendations</li>
                <li>Generated Meal Plans based on your personal preferences and goals</li>
                <li>Price tracking for your shoping list, based on where you shop</li>
                <li>Personalised health insights</li>
                <li>Waste reduction algorithm</li>
              </ul>
            </div>

            <div
              className="bg-white px-8 py-4 rounded-3xl border-[1px] space-y-4"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <span className="block text-xl font-bold">
                What features do I get as a Non-Premium Member?
              </span>
              <span className="block ml-2">
                Again, we plan to add many new features. Some of the things we are working
                on now are:
              </span>
              <ul className="ml-4 space-y-2 pb-2">
                <li>Macro Tracker</li>
                <li>Meal recommendations based on preferences</li>
                <li>
                  Recipe sharing - share your healthy (or not) recipes with your
                  friends
                </li>
                <li>Search-by-Ingredient for meals</li>
              </ul>
            </div>

            <div
              className="bg-white px-8 py-4 rounded-3xl border-[1px] space-y-4"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <span className="block text-xl font-bold">
                Will Cookly be available on Android?
              </span>
              <span className="block ml-2 pb-2">
                Although we plan to release on Android as soon as possible, we
                currently have no set deadline.
              </span>
            </div>

            <div
              className="bg-white px-8 py-4 rounded-3xl border-[1px] space-y-4"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <span className="block text-xl font-bold">
                When and where will Cookly be available?
              </span>
              <span className="block ml-2 pb-2">
                We plan to release on IOS in the UK in April 2024. Then,
                expand internationally by the end of 2024.
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
