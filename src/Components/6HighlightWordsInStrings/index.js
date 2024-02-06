const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ["Front", "End", "JavaScript"];

highlight(str, words);

const highlight = (str, words) => {
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
                const prefix = ss.slice(0, i);
                const suffix = ss.slice(i + 1, ss.length);
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
