import React, { useEffect, useState } from "react";

const styles = {
    progressBar: {
        height: "10px",
        background: "red",
        width: "0%",
    },

    progressBar100: {
        height: "10px",
        background: "red",
        width: "100%",
    },
};

export const ProgressBar = ({ simulatedTaskTime = 15000 }) => {
    const simulatedTaskTimerStyle = {
        transition: `width ${simulatedTaskTime}ms`,
    };
    const [taskComplete, setTaskComplete] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setTaskComplete(true);
        }, 50);
    });
    return (
        <div
            style={
                taskComplete
                    ? { ...styles.progressBar100, ...simulatedTaskTimerStyle }
                    : { ...styles.progressBar, ...simulatedTaskTimerStyle }
            }
        ></div>
    );
};

export default ProgressBar;
