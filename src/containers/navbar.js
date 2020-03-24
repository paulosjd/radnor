import React, { Component } from 'react';
import AppContext from '../store/context';
import BorderedIcon from '../components/avatar';
import UserDisplay from '../components/user_display'
import RightNavButton from '../components/right_nav_btn'

class NavBar extends Component {
    static contextType = AppContext;

    render() {
        return (
                <div className="top_navbar" style={this.context.styles}>
                    <BorderedIcon icon={this.context.avatar}/>
                    <UserDisplay />
                    <RightNavButton />
                </div>
        )
    }
}

export default NavBar