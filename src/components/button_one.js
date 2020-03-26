import React from 'react';
import stylesWrapper from '../styles/styles_wrapper';

const ButtonOne = (props) => {
    return (
        <button
            style={props.styles}
            onClick={props.clickHandler}
            type={props.type || 'button'}
        >{props.text}
        </button>
    )
};

export default stylesWrapper(ButtonOne)