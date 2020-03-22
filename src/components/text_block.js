import React from 'react';
import stylesWrapper from '../styles/styles_wrapper';

const TextBlock = (props) => {
    return (
        <span style={props.styles}>{props.text}</span>
    )
};

export default stylesWrapper(TextBlock);