import React, { Component } from 'react';
import MenuButton from '../components/menu_button'

class MainContainer extends Component {

    render() {
        const menuItems = [['Profile settings', () => this.props.handleClick('profile')]]

        return (
            <div className='side_menu'>
                {menuItems.map((item, ind) => {
                    return <MenuButton key={ind} handleClick={item[1]} label={item[0]} />
                })}
            </div>
        );
    }
}

export default MainContainer;