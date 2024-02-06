import React, { useEffect, useState } from "react";

// highlight(str, words);
export const HighlightWords = ({ str, words }) => {
    const [highlight, setHighlight] = useState("");
    useEffect(() => {
        const h = highlightFunc(str, words);
        setHighlight(h);
    }, []);
    return (
        <div>
            <div>{str}</div>
            <div>{words.join(",")}</div>
            <div>{highlight}</div>
        </div>
    );
};

export const highlightFunc = (str, words) => {
    //split the srting into array of word
    const splitStr = str.split(" ");
    // traverse each word in str and check if it is included in words
    const newSplitSTR = splitStr.map((ss) => {
        let output = ss;
        if (words.includes(ss)) {
            output = `<strong>${output}</strong>`;
        } else {
            // if this splitstr has part as the word
            for (let i = 0; i < ss.length; i++) {
                const prefix = ss.slice(0, i + 1);
                const suffix = ss.slice(i + 1);
                if (words.includes(prefix) && words.includes(suffix)) {
                    output = `<strong>${ss}</strong>`;
                    break;
                } else if (words.includes(prefix) && !words.includes(suffix)) {
                    output = `<strong>${prefix}</strong>${suffix}`;
                } else if (!words.includes(prefix) && words.includes(suffix)) {
                    output = `${prefix}<strong>${suffix}</strong>`;
                }
            }
        }
        return output;
    });
    return newSplitSTR.join(" ");
};
