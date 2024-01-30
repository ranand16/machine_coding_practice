import React, { FC } from "react";
import {
    SingletonClsObject,
    SingletonFunction,
    SingletonFunction2,
} from "../../Utility/Singleton";

const ReactElementForSingletonFunction = () => {
    const st1 = SingletonFunction.getInstance();
    console.log("🚀 ~ ReactElementForSingletonFunction ~ st1:", st1);
    const st2 = SingletonClsObject.getInstance();
    console.log("🚀 ~ ReactElementForSingletonFunction ~ st2:", st2);
    const st3 = SingletonFunction2();
    console.log("🚀 ~ ReactElementForSingletonFunction ~ st3:", st3);
    return (
        <div className="">
            Check console for logs for all the threee singleton instances. All
            of the three are created in different ways.
        </div>
    );
};

export default ReactElementForSingletonFunction;
