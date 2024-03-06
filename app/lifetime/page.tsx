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
    })).body) ;
    
    console.log(response, response.url);
    if (response && response.url) {
      window.location.href = response.url; // Redirects the browser to the URL
    }
  };

  return (
    <main className="">
      <div className="flex flex-row justify-center items-center sticky top-0 w-full px-[2%] min-h-[85px]">
        <div className=" max-w-[1200px] flex flex-row justify-between w-full">
          <Link
            href={`/${referral ? `?referral=${referral}` : ``}`}
            className="flex flex-row space-x-2 items-center"
          >
            <Image
              src={`${prefix}/logo.png`}
              alt="f"
              width={32}
              height={32}
              className="object-contain"
            ></Image>
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
      <section className="font-mono py-16 min-h-screen w-full flex flex-col items-center justify-center">
        <div className="max-w-[1200px] flex lg:flex-row flex-col mx-8 lg:space-x-16 mb-auto ">
          <Image
            src={"${prefix}/phone.png"}
            alt="f"
            className="max-h-[500px] object-contain mb-16 lg:mb-auto flex-shrink-1 "
          ></Image>
          <div className="space-y-8">
            <span className="block text-5xl font-black ">Lifetime Premium</span>
            <div className="flex flex-row">
              <span className="block text-2xl font-bold line-through mr-4 text-neutral-300">
                £200.00
              </span>
              <span className="block text-2xl font-black flex flex-row ">
                £33.00
              </span>
            </div>
            <div>
              <form onSubmit={async (e) => await handleSubmit(e)}>
                <button
                  type="submit"
                  className="transition ease-in-out hover:-translate-y-1 hover:scale-110 delay-150 border-[#1edf2b] border-2 hover:bg-[#1edf2b] text-black hover:text-white font-bold px-16 py-4 rounded-full w-full lg:w-auto md:w-auto"
                >
                  Buy Now
                </button>
              </form>
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
            <div className="bg-white border-[1px] rounded-3xl py-4 px-6">
              <span className="block">
                Cookly is an app in development that will have premium features
                availible at prices starting from{" "}
                <span className="font-black">£70</span> per year. By becoming a
                lifetime member now before our inception, you will gain access
                to any and all premium features for a fraction of the price.
              </span>
              <span className="block mt-4">
                Upon the app's release, if you're not happy with Cookly, or you
                would just like your money back, you will have{" "}
                <span className="font-black">60-days</span> to apply for a{" "}
                <span className="font-bold">hassle-free refund.</span>
              </span>
              <span className="block mt-4 font-bold">
                We plan to realease the app on IOS in April 2024.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col z-10 w-full items-center  justify-around font-mono lg:flex px-8 py-32">
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
              <span className="block text-xl font-black ">
                What extra features do I get as a Premium Member?
              </span>
              <span className="block ml-2">
                We plan to evolve our app and hence our premium features over
                time, but some of the things we plan on implementing as soon as
                possible are:
              </span>
              <ul className="ml-4 space-y-2 pb-2">
                <li>Dynamic Macro Goals</li>
                <li>Higher quality recommendations</li>
                <li>Meal Plans based on your preferences and goals</li>
                <li>Waste reduction algorithm</li>
              </ul>
            </div>

            <div
              className="bg-white px-8 py-4 rounded-3xl border-[1px] space-y-4"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <span className="block text-xl font-black">
                What features do I get as a Non-Premium Member?
              </span>
              <span className="block ml-2">
                Again, we plan to add many new features. Things we are working
                on now are:
              </span>
              <ul className="ml-4 space-y-2 pb-2">
                <li>Normal calorie counter</li>
                <li>Meal Preferences</li>
                <li>
                  Shopping List that integrates with your meal recommendations
                </li>
                <li>
                  Recipe sharing - share your healthy (or not) recipes with your
                  friends
                </li>
                <li>Search-by-Ingredient</li>
              </ul>
            </div>

            <div
              className="bg-white px-8 py-4 rounded-3xl border-[1px] space-y-4"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <span className="block text-xl font-black">
                Will Cookly be availible on Android?
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
              <span className="block text-xl font-black">
                When and where will Cookly be availble?
              </span>
              <span className="block ml-2 pb-2">
                We plan to release on IOS in the UK in April 2024. We plan to
                expand internationally over time but have no explicit deadline.
              </span>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-neutral-900 min-h-[20vh] text-white items-center  flex w-full p-4">
        <div className="max-w-screen-xl mx-auto py-8 flex flex-col md:flex-row w-full justify-between  items-center">
          <div className="flex space-y-4 flex-col">
            <p>Bristol, UK</p>
            <p>contact@bracket.software</p>
            <p>© 2024 Cookly. All rights reserved.</p>
          </div>
          <div className="flex space-y-4 flex-col">
            <a href="#" className="text-white hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Terms of Use
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Contact Us
            </a>
          </div>
          <div className="flex mt-2 space-y-4 md:mt-0 flex-col">
            <a href="#" className="text-white hover:text-gray-400 mr-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            {/* <a href="#" className="text-white  text-xs justify-center items-center hover:text-gray-400">
              <Reddit className="mr-2" />
              r/Cookly
            </a> */}
            <a
              href="#"
              className="text-white  text-xs justify-center items-center hover:text-gray-400"
            >
              <InstagramIcon className="mr-2" />
              @CooklyApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
