"use client"
import Image from "next/image";
import moment from "moment";
import { useEffect, useState } from "react";

export default function CountdownWidget() {
    //use client
    // Initial state for the countdown timer
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Set the target date/time for the countdown
        const target = moment().endOf('month');

        // Function to update the countdown timer
        const updateCountdown = () => {
            // Get the current time
            const now = moment();

            // Calculate the duration between now and the target
            const countdownDuration = moment.duration(target.diff(now));

            // Update the countdown state with each time component
            setCountdown({
                days: countdownDuration.days(),
                hours: countdownDuration.hours(),
                minutes: countdownDuration.minutes(),
                seconds: countdownDuration.seconds(),
            });
        };

        // Update the countdown immediately and set an interval to update it every second
        updateCountdown();
        const intervalId = setInterval(updateCountdown, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="">
            <div className="justify-center space-x-2  items-center z-[1000] flex">
                <span className="bg-white border-[2px] border-red-500 py-2 w-16 text-center rounded-lg">{countdown.days} d</span>
                <span className="bg-white border-[2px] border-red-500 py-2 w-16 text-center rounded-lg">{countdown.hours} h</span>
                <span className="bg-white border-[2px] border-red-500 py-2 w-16 text-center rounded-lg">{countdown.minutes} m</span>
                <span className="bg-white border-[2px] border-red-500 py-2 w-16 text-center rounded-lg">{countdown.seconds} s</span>
            </div>
        </div>
    );
}
