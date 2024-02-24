import React from "react";
import FeatureFlagProvider from "./FeatureFlagProvider";
import Comp1 from "./Comp1";

const FeatureFlagEntryApp = () => {
    return (
        <FeatureFlagProvider>
            <Comp1 />
        </FeatureFlagProvider>
    );
};

export default FeatureFlagEntryApp;
