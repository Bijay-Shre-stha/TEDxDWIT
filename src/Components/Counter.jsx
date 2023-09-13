import { useState, useEffect } from "react";
import './Counter.css'

const Counter = () => {
    // Create a Date object for September 30, 2023, at 9:00 AM
    const targetDate = new Date("2023-09-30T09:00:00").getTime();

    const calculateTimeRemaining = () => {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            // If the target time has passed, return zeros
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    },);

    return (
        <div className="counter__container">
            <div className="timing__container">
                <div className="timing__box">
                    <div className="timing__box__number font-bold" style={{ color: `var(--primary)` }}>{timeRemaining.days}:</div>
                    <div className="timing__box__text font-bold" style={{ color: `var(--primary)` }}>Days:</div>
                </div>
                <div className="timing__box">
                    <div className="timing__box__number"style={{ color: `var(--tertiary)` }}>{timeRemaining.hours}:</div>
                    <div className="timing__box__text" style={{ color: `var(--tertiary)` }}>Hours:</div>
                </div>
                <div className="timing__box">
                    <div className="timing__box__number" style={{ color: `var(--tertiary)` }}>{timeRemaining.minutes}:</div>
                    <div className="timing__box__text" style={{ color: `var(--tertiary)` }}>Minutes:</div>
                </div>
                <div className="timing__box">
                    <div className="timing__box__number" style={{ color: `var(--tertiary)` }}>{timeRemaining.seconds}</div>
                    <div className="timing__box__text" style={{ color: `var(--tertiary)` }}>Seconds</div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
