import React, { useEffect, useState } from "react";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const getFormattedTime = (time) => {
    const days = Math.floor(time / DAY);
    const hours = Math.floor((time % DAY) / HOUR);
    const minutes = Math.floor((time % HOUR) / MINUTE);
    const seconds = Math.floor((time % MINUTE) / SECOND);
    return `${days} days: ${hours} hours : ${minutes} minutes : ${seconds} seconds `;
};

export const CountdownTimer = ({ duration, onExpire }) => {
    const [time, setTIme] = useState(duration);
    useEffect(() => {
        const timerId = setTimeout(() => {
            setTIme((prevTime) => prevTime - 1000);
        }, 1000);

        if (time <= 0) {
            onExpire && onExpire();
            clearTimeout(timerId);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [time]);
    return <div className="">{getFormattedTime(time)}</div>;
};

export default CountdownTimer;
