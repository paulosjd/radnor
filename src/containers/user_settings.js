import React, {Component} from 'react';
import AppContext from '../store/context';

class UserSettings extends Component {
    static contextType = AppContext;

    handleUsernameChange = (e) => {
        if (e.target.value.length < 50) {
            this.context.setUsername(e.target.value)
        }
    };

    handleAvatarChange = (e) => {
        this.context.setAvatar(e.target.value)
    };

    handleThemeChange = (e) => {
        this.context.setTheme(e.target.value.toLowerCase())
    };

    render() {
        return (
            <div className='user_settings'>
                <div className='form-label'>
                    <label>Username</label>
                </div>
                <div className="username-input">
                    <input
                        type="text"
                        value={this.context.username}
                        onChange={this.handleUsernameChange.bind(this)}
                    />
                </div>
                <div className='form-label'>
                    <label>Avatar</label>
                </div>
                <div className="btn-group-justified">
                    <select
                        value={this.context.avatar}
                        className='avatar-select'
                        onChange={this.handleAvatarChange.bind(this)}
                    >
                        {['\ud83d\udc1b', '\ud83d\udc12', '\t\ud83d\udc38', '\t\ud83d\udc33'].map(x => {
                            return <option key={x} value={x}>{x}</option>;
                        })}
                    </select>
                </div>
                <div className='form-label'>
                    <label>Theme</label>
                </div>
                <div className="btn-group-justified">
                    {['light', 'dark', 'earth'].map(x => (
                        <label className="radio-inline" key={x}>
                            <input
                                type="radio"
                                checked={x === this.context.theme}
                                value={x}
                                onChange={this.handleThemeChange.bind(this)}
                            />
                            {x[0].toUpperCase() + x.slice(1)}
                        </label>
                    ))}
                </div>
                <h4 >
                    The Context API provides a way to to share data considered as “global”
                    for the entire app, such as data behind the above user settings.
                </h4>
                <h4 style={{lineHeight: 0, paddingBottom: '12px'}}>
                    It allows data to be passed through the component tree without having to pass props down
                    manually at every level .
                </h4>
                <h4 style={{lineHeight: 0, paddingBottom: '12px'}}>
                    Every Context object comes with a Provider React component that allows consuming components to
                    subscribe to context changes:
                </h4>
                <pre>
                    const ThemeContext = React.createContext();{'\n\n'}
                    class ThemeProvider extends React.Component {'{\n'}
                    {'    '}state = {'{theme: \'dark\', ...}\n'}
                    {'    '}render() {'{\n'}
                    {'        '}return ( {'\n'}
                    {'            '}&lt;ThemeContext.Provider value={'{{theme: this.state.theme, ...}}\n'}
                    {'                {this.props.children}\n'}
                    {'            '}&lt;/ThemeContext.Provider>){'\n'}
                    {'    '}{'}\n'}
                    {'}\n'}
                </pre>
            </div>
        )
    }
}

export default UserSettings;

