import React from "react";
import "./../styles/Button.css";

function Button({ children, classList }) {
    return (
        <div>
            <button className={`btn btn__secondary ${classList && classList}`}>{children}</button>
        </div>
    );
}

export default Button;
