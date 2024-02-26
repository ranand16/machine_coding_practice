import React, { FC, useState } from "react";
import ModalComponent from "./ModalComponent";

const ModalParent = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="">
            <button onClick={(e) => setShow((prevValue)=>!prevValue)}>Toogle Modal</button>
            <ModalComponent toggle={() => setShow((prevValue)=>!prevValue)} show={show} title={"This is Title"} children={<div>This is modal body</div>} />
        </div>
    );
};

export default ModalParent;
