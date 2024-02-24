import React, { useContext } from "react";
import { FeatureFlagContext } from "./FeatureFlagProvider";

const Comp2 = () => {
    const featureFlag = useContext(FeatureFlagContext);
    return <div>{featureFlag["commonpre"]}</div>;
};

export default Comp2;
