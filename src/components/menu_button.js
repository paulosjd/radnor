import React from "react";

const MenuButton = ({label, handleClick}) => {

    return (
        <button
            className='menu_btn'
            onClick={handleClick}
        >
            {label}
        </button>
    )
};

export default MenuButton;