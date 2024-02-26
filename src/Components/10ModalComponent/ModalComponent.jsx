import React, { FC } from "react";
import css from "./modalstyle.css";

const ModalComponent = ({ title, children, show, toggle }) => {
    return (
        show && (
            <>
                <div className="modal-backdrop" onClick={toggle} />
                <div className="modal-wrapper">
                    <div className="modal-content">
                        <div className="modal-header">{title}</div>
                        <div className="modal-body">{children}</div>
                    </div>
                </div>
            </>
        )
    );
};

export default ModalComponent;
