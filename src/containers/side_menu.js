import React, { Component } from 'react';
import MenuButton from '../components/menu_button'

class SideMenu extends Component {

    render() {
        const menuItems = [
            ['Welcome', 'summary'],
            ['Profile settings', 'profile'],
            ['Render props demo', 'render_props']
        ];

        return (
            <div className='side_menu'>
                {menuItems.map(item => {
                    return (
                        <MenuButton
                            key={item[1]}
                            handleClick={() => this.props.handleClick(item[1])}
                            label={item[0]}
                            isActive={this.props.selectedItem === item[1]}
                        />
                    )
                })}
            </div>
        );
    }
}

export default SideMenu;