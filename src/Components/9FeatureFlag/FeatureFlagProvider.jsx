import React from "react";

export const FeatureFlagContext = React.createContext({});

const FeatureFlagProvider = ({ children }) => {
    const data = {
        darkmode: true,
        commonpre: "hello",
    };
    return (
        <FeatureFlagContext.Provider value={data}>
            {children}
        </FeatureFlagContext.Provider>
    );
};

export default FeatureFlagProvider;
