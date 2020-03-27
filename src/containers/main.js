import React, {Component} from 'react';
import UserSettings from './user_settings'
import Summary from './summary'
import CalculatorDemo from './calculator'
import MouseTracker from './mouse_tracker'
import SearchForm from './search_form'

class MainContainer extends Component {

    render() {
        let content;
        switch (this.props.selectedItem) {
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