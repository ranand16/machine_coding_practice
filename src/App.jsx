import React from "react";
import CounterdownTimerWrapper from "./Components/1ContdownTimer";
import ProgressBarNaviWrapper from "./Components/2ProgressBarNavi";
import ReactElementForSingletonFunction from "./Components/3SingletonPattern";
import CircuitBreakerCom from "./Components/4CircuitBreaker";
import { HighlightWords } from "./Components/6HighlightWordsInStrings";
import FeatureFlagEntryApp from "./Components/9FeatureFlag";
import ModalParent from "./Components/10ModalComponent";
import SlideshowParent from "./Components/11Slideshow";
const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ["Front", "End", "JavaScript"];

const App = () => {
    return (
        <main>
            {/* <CounterdownTimerWrapper /> */}
            {/* <br />
            <ProgressBarNaviWrapper /> */}
            {/* <br />
            <ReactElementForSingletonFunction /> */}
            <br />
            {/* <CircuitBreakerCom /> */}
            <br />
            {/* <HighlightWords str={str} words={words} /> */}
            <br />
            {/* <FeatureFlagEntryApp /> */}
            <br />
            {/* <ModalParent /> */}
            <br/>
            <SlideshowParent />
        </main>
    );
};

export default App;
