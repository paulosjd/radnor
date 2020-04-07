import React, {Component} from 'react';
import UserSettings from './user_settings'
import Summary from './summary'
import CalculatorDemo from './calculator'
import MouseTracker from './mouse_tracker'
import SearchForm from './search_form'
import KeyPressDemo from './key_press_demo'
import MediaStylesDemo from './media_styles_demo'

class MainContainer extends Component {

    state = {
        keyPressHistory: ''
    };

    setKeyPressed(val) {
        const k = this.state.keyPressHistory;
        this.setState({...this.state, keyPressHistory: k + val})
    }

    render() {
        let content;
        // switch (this.props.selectedItem) {
        switch ('media') {
            case 'profile':
                content = <UserSettings />;
                break;
            case 'render_props':
                content = <MouseTracker />;
                break;
            case 'prop_types':
                content = <CalculatorDemo />;
                break;
            case 'refs':
                content = <SearchForm />;
                break;
            case 'use_effect':
                content = (
                    <KeyPressDemo
                        keyPressHistory={this.state.keyPressHistory}
                        setKeyPressed={this.setKeyPressed.bind(this)}
                    />
                );
                break;
            case 'media':
                content = <MediaStylesDemo/>;
                break;
            default:
                content = <Summary />;
        }

        return (
            <div className='main'>
                {content}
            </div>
        );
    }
}

export default MainContainer