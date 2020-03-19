import React, { Component } from 'react';
import UserSettings from '../form/user_settings'
import Summary from '../components/summary'

class MainContainer extends Component {

    render() {
        let content;
        switch (this.props.selectedItem) {
            case 'profile':
                content = <UserSettings />;
                break;
            default:
                content = <Summary />;
        }


        return (
            <div className='main'>
                {content}
                <footer>Powered by <a href='https://github.com/paulosjd'>Paulos Code&#8482;</a></footer>
            </div>

        );
    }
}

export default MainContainer;