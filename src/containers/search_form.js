import React, {Component} from "react";
import ButtonOne from '../components/button_one'
import flowerVideo from '../media/flower.webm'

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = { searchText: '' };
    }

    handleInputChange = (e) => {
        this.setState({ searchText: e.target.value.slice(0,4) });
        if (e.target.value.length >= 4) {
            this.input.focus()
        }
    };

    handleRefreshButtonClick = () => {
        this.input.disabled = false;
        this.input.focus()
    };

    onSubmit(event) {
        const value = this.input.value;
        this.input.disabled = true;
        console.log(value);
        event.preventDefault();
    }

    render() {
        return (
            <form className='foobar' onSubmit={this.onSubmit}>
                <h4 className='top26'>
                    A general rule of thumb is to avoid using the ref attribute,
                    but sometimes you have no other choice than to use it.
                </h4>
                <h4 style={{lineHeight: 0, fontWeight: 'normal'}}>
                    Typical use cases include needing to access the DOM API
                    or integrating with a third-party libraries that relies on the DOM.
                </h4>
                <div className='search_form_field top26'>
                    <label>Year of birth</label>
                    <input
                        autoFocus
                        type="text"
                        className='left6'
                        placeholder='Start typing here'
                        value={this.state.searchText}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <h4>This is a plain input element</h4>
                </div>
                <div className='search_form_field'>
                    <label>Favorite food</label>
                    <input
                        ref={node => this.input = node}
                        type="text"
                    />
                    <h4>This input element has a ref attribute</h4>
                </div>
                <div className=''>
                    <button  ref={this.myRef} type="button" onClick={e => console.log(this.myRef.current)}>
                        myRef logger
                    </button>
                    <ButtonOne
                        theme='default'
                        text='Search'
                        type='submit'
                        // extraStyles={{...padding, cursor: 'pointer'}}
                        // clickHandler={() => setShowEmoji(!showEmoji)}
                    />
                </div>
                <div>
                    <video
                        width={250}
                        ref={video => this.video = video}
                        onClick={this.handleVideoClick}
                    >
                        <source src={flowerVideo} type="video/webm" />
                    </video>
                </div>
            </form>
        );
    }
}

export default SearchForm