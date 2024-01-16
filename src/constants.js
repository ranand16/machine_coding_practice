import React from "react";
import CounterdownTimerWrapper from "./Components/ContdownTimer";
import Home from "./Components/Home";
import NotFoundComp from "./Components/NotFoundComp";

export const ROUTES = [
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/countdown", element: <CounterdownTimerWrapper /> },
    // { path: "*", element: <NotFoundComp /> },
    // { path: "/", element: <div>Home</div> },
    // { path: "/home", element: <div>Home 2</div> },
    // { path: "/countdown", element: <div>Countdown </div> },
    // { path: "*", element: <div>Others</div> },
];
