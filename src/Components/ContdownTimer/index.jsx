import React from "react";
import CountdownTimer from "./Countdown";

const CounterdownTimerWrapper = () => {
    const onExpire = () => {
        console.log("Countdown expired!");
    };
    return (
        <>
            <h1>1. COUNTDOWN TIMER</h1>
            <CountdownTimer
                onExpire={onExpire}
                duration={2 * 60 * 60 * 60 * 1000}
            />
        </>
    );
};

export default CounterdownTimerWrapper;
