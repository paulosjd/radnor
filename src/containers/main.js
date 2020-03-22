import React, { Component } from 'react';
import UserSettings from '../form/user_settings'
import Footer from '../components/footer'
import Summary from '../components/summary'
import MouseTracker from '../components/mouse_tracker'
import AppContext from "../store/context";

class MainContainer extends Component {

    static contextType = AppContext;

    render() {
        let content;
        switch (this.props.selectedItem) {
            case 'profile':
                content = <UserSettings />;
                break;
            case 'render_props':
                content = <MouseTracker />;
                break;
            default:
                content = <Summary />;
        }

        return (
            <div className='main'>
                {content}
                <Footer theme={this.context.theme} />
            </div>
        );
    }
}

export default MainContainer;