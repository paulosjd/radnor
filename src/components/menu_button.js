import React from "react";

const MenuButton = ({label, handleClick, isActive}) => {

    let clsName = 'menu_btn';
    if (isActive) {
        clsName += ' selected'
    }

    return (
        <button
            className={clsName}
            onClick={handleClick}
        >
            {label}
        </button>
    )
};

export default MenuButton