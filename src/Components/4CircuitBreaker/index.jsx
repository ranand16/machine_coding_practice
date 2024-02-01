import React, { FC, useEffect } from "react";
import circuitbreaker, { mockit } from "../../Utility/CircuitBreaker";

const CircuitBreakerCom = () => {
    // MOCKED API CALL
    mockit();
    return <div className="">Hell</div>;
};

export default CircuitBreakerCom;
