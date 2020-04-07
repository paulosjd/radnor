import React, {Component} from 'react';
import MenuButton from '../components/menu_button'

class SideMenu extends Component {

    render() {
        const menuItems = [
            ['HOCs', 'summary'],
            ['Context API', 'profile'],
            ['Render props', 'render_props'],
            ['Type checking', 'prop_types'],
            ['Refs', 'refs'],
            ['Custom hooks', 'use_effect'],
            ['Media styles', 'media'],
        ];

        return (
            <div className='side_menu'>
                <h4>React concepts</h4>
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

export default SideMenu