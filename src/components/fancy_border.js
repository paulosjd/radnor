import React from "react";

const FancyBorder = (props) => {
    return (
        <div className={'fancy-border-' + props.color} style={{width: props.width}}>
            {props.children}
        </div>
    )
};

FancyBorder.defaultProps = {
    width: 'auto'
};

export default FancyBorder