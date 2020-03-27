import React, {Component} from 'react';
import AppContext from './context';
import getThemeStyles from '../styles/theme_styles'

class AppProvider extends Component {
    state = {
        username: 'Paul',
        avatar: '\ud83d\udc1b',
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    styles: getThemeStyles(this.props.theme),
                    theme: this.props.theme,
                    username: this.state.username,
                    avatar: this.state.avatar,
                    setTheme: theme => this.props.setTheme(theme),
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