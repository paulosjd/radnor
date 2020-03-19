import React from "react";

const BorderedIcon = (props) => {
    return (
        <span
            className='avatar-span'
            style={{border: '1px '.concat(props.borderColor, ' solid')}}
        >
            {props.icon}
        </span>
    )
};

BorderedIcon.defaultProps = {
    borderColor: '#878e99'
};

export default BorderedIcon;