import React, { Component, Fragment } from 'react';
import AppContext from '../store/context';

class UserSettings extends Component {
    static contextType = AppContext;

    handleChange = (e) => {
        console.log(e)
        // this.props.onRegionChange(e.target.value, 'region')
    };

    render() {
        console.log(this.context)
        return (
            <Fragment>
                <label>Filter by</label>
                <div className="btn-group-justified">{['bar', 'foo', 'abs'].map(x => (
                    <label className="radio-inline" key={x}>
                        <input type="radio" checked={x === 'foo'} value={x} onChange={this.handleChange.bind(this)} />
                        {x}
                    </label>
                ))}
                </div>
                <div><label>Filter by region</label></div>
                <div><select value={'foo'} className='filter-element' onChange={this.handleChange.bind(this)}>
                    <option value=""> </option>
                    {['\u2728', '\u2726'].map(x => {
                        return <option key={x} value={x}>{x}</option>;
                    })}
                </select>
                </div>
            </Fragment>
        )
    }
}

export default UserSettings;

