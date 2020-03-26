import React, {Component} from 'react';
import UserSettings from './user_settings'
import Footer from '../components/footer'
import Summary from './summary'
import CalculatorDemo from './calculator'
import MouseTracker from './mouse_tracker'
import SearchForm from './search_form'
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
                <Footer theme={this.context.theme} />
            </div>
        );
    }
}

export default MainContainer