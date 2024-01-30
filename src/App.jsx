import React from "react";
import CounterdownTimerWrapper from "./Components/1ContdownTimer";
import ProgressBarNaviWrapper from "./Components/2ProgressBarNavi";
import ReactElementForSingletonFunction from "./Components/3SingletonPattern";

const App = () => {
    return (
        <main>
            {/* <CounterdownTimerWrapper /> */}
            <br />
            {/* <ProgressBarNaviWrapper /> */}
            <br />
            <ReactElementForSingletonFunction />
        </main>
    );
};

export default App;
