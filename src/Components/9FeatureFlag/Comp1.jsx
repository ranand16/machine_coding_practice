import React, { useContext } from "react";
import { FeatureFlagContext } from "./FeatureFlagProvider";
import Comp2 from "./Comp2";

const Comp1 = () => {
    const featureFlag = useContext(FeatureFlagContext);
    console.log(featureFlag);
    return (
        <div>
            {featureFlag["darkmode"] && <div>Dark mode active</div>}
            {featureFlag["commonpre"]}

            <div>
                <h1>This is comp2</h1>
                <Comp2 />
            </div>
        </div>
    );
};

export default Comp1;
