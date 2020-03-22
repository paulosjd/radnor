import React from 'react';
import stylesWrapper from '../styles/styles_wrapper';

const Footer = (props) => {
    return (
        <footer style={props.styles}>
            <span className='footer_link'>
                Powered by <a href='https://github.com/paulosjd'>Paulos Code&#8482;</a>
            </span>
        </footer>
    )
};

export default stylesWrapper(Footer);