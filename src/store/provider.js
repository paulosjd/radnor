import React, { Component } from 'react';
import AppContext from './context';

function getThemeStyles(color) {
    switch (color) {
        case 'light':
            return {backgroundColor: '#f8f9fa'};
        case 'dark':
            return {backgroundColor: '#42424c', color: 'white'};
        default:
            return {backgroundColor: '#f8f9fa'};
    }
}

class AppProvider extends Component {
    state = {
        theme: 'dark'
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    styles: getThemeStyles(this.state.theme),
                    setTheme: theme => this.setState({theme}),
                    decrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price - 1;
                        this.setState({
                            cars
                        });
                    }}}

            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider