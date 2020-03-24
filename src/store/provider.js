import React, { Component } from 'react';
import AppContext from './context';

function getThemeStyles(color) {
    switch (color) {
        case 'light':
            return {backgroundColor: '#f8f9fa'};
        case 'earth':
            return {backgroundColor: '#959970', color: 'white'};
        case 'dark':
            return {backgroundColor: '#42424c', color: 'white'};
        default:
            return {backgroundColor: '#f8f9fa'};
    }
}

class AppProvider extends Component {
    state = {
        theme: 'light',
        username: 'Paul',
        avatar: '\ud83d\udc1b',
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    styles: getThemeStyles(this.state.theme),
                    theme: this.state.theme,
                    username: this.state.username,
                    avatar: this.state.avatar,
                    setTheme: theme => this.setState({theme}),
                    setUsername: username => this.setState({username}),
                    setAvatar: avatar => this.setState({avatar}),
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider