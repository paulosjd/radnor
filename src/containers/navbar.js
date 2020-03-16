import React, { Component } from 'react';
import AppContext from '../store/context';

class NavBar extends Component {
    static defaultProps = {
        myprop: 'Hello'
    };
    static contextType = AppContext;

    render() {
        console.log(this.props.myprop);
        return (
                <div className="top_navbar" style={this.context.styles}>
                    <span className='username'>Hello {this.props.username}</span>
                    <span className='signout' >Logout</span>
                </div>
        )
    }
}

export default NavBar;