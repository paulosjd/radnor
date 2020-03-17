import React, { Component } from 'react';
import AppContext from '../store/context';
import UserDisplay from '../components/user_display'
import RightNavButton from '../components/right_nav_btn'

class NavBar extends Component {
    static defaultProps = {
        myprop: 'Hello'
    };
    static contextType = AppContext;

    render() {
        return (
                <div className="top_navbar" style={this.context.styles}>
                    <UserDisplay />
                    <RightNavButton />
                </div>
        )
    }
}

export default NavBar;