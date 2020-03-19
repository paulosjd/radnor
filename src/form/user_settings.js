import React, { Component, Fragment } from 'react';
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
            <div>
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
                    {['dark', 'earth', 'light'].map(x => (
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


            </div>
        )
    }
}

export default UserSettings;

