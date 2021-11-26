import React from "react";
import "./style.scss"
import PropTypes from "prop-types"

function Button({children, onClick, widht}){
    return(
        <button className="button" onClick={onClick} style={{widht}}>
            {children}
        </button>
    );
}

Button.prototype = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onClick: PropTypes.func.isRequired,
    widht: PropTypes.number.isRequired
}

export default Button;