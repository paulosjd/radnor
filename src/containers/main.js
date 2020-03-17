import React, { Component } from 'react';
import UserSettings from '../form/user_settings'

class MainContainer extends Component {

    render() {
        let content;
        switch (this.props.selectedItem) {
            case 'profile':
                content = <UserSettings />;
                break;
            default:
                content = <h4>my page</h4>;
        }


        return (
            <div className='main'>
                {content}
            </div>
        );
    }
}

export default MainContainer;