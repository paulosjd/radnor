import React, {Component} from "react";
import ButtonOne from '../components/button_one'
import flowerVideo from '../media/flower.webm'

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.handleVideoClick.bind(this);
        this.state = {
            searchText: '',
            isPlaying: false
        };
    }

    handleInputChange(e) {
        this.setState({ searchText: e.target.value.slice(0,4) });
        if (e.target.value.length >= 4) {
            this.input.focus()
        }
    };

    handleVideoClick() {
        if (this.state.isPlaying) {
            this.video.pause();
        } else {
            this.video.play();
        }
        this.setState({ isPlaying: !this.state.isPlaying });
    }

    render() {
        return (
            <form onSubmit={e => {this.handleVideoClick(); e.preventDefault()}}>
                <h4 className='top26'>
                    Use of the ref attribute is necessary in certain cases,
                    such as accessing the DOM API to use a method like <code>focus()</code>:
                </h4>
                <div className='search_form_field'>
                    <label>Year of birth</label>
                    <input
                        autoFocus
                        placeholder='Start typing here'
                        value={this.state.searchText}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <label>Favorite food</label>
                    <input
                        ref={node => this.input = node}
                    />
                    <ButtonOne theme='default' text='Btn' type='submit' />
                </div>
                <div className='inline' style={{width: '40vw'}}>
                    <h4 style={{marginBottom: 0, marginTop: '26px'}}>
                        The second input element sets a reference to the DOM element to enable
                        <code> focus()</code> to be imperatively called: <code >{'\nref={node => this.input = node}\n'}</code>
                    </h4>
                    <pre className='top26'>
                        class RefsExample extends Component {'{\n'}
                        {'    '}state = {'{isPlaying: false}\n\n'}
                        {'    '}handleVideoClick() {'{\n'}
                        {'        if (this.state.isPlaying) {\n'}
                        {'            this.video.pause()\n'}
                        {'        else {\n'}
                        {'            this.video.play()\n'}
                        {'        this.setState({ isPlaying: !this.state.isPlaying })\n    }\n\n'}
                        {'    '}render() {'{\n'}
                        {'        '}return ( {'\n'}
                        {'            '}&lt;div&gt;{'\n'}
                        {'                '}&lt;{'video \n'}
                        {'                    ref={video => this.video = video}\n'}
                        {'                    onClick={this.handleVideoClick.bind(this)}\n'}
                        {'                '}&gt;{'\n'}
                        {'                    '}&lt;{'source src={myVideo} type="video/webm" '}/&gt;{'\n'}
                        {'                '}&lt;/video&gt;){'\n'}
                        {'            '}&lt;/div&gt;){'\n    }\n}\n'}
                    </pre>
                </div>
                <div className='video-ref'>
                    <h4>
                        <code>play()</code> and <code>pause()</code> on a video element:
                    </h4>
                    <video
                        width={250}
                        ref={video => this.video = video}
                        onClick={this.handleVideoClick.bind(this)}
                    >
                        <source src={flowerVideo} type="video/webm" />
                    </video>
                    <h4 className='refs-extra'>
                        Another use case of refs is integrating with third-party libraries that rely on the DOM
                    </h4>
                    <h4 style={{paddingRight: '34px'}}>
                        Suppose our component which used refs needed to use the React-Redux <code>connect()</code> API.
                        Since <code>connect()</code> is an HOC, so returns a new component,
                        the ref that we set on our component would now point to the connected component instance.
                        This is where <code>forwardRefs</code> are needed.
                    </h4>
                </div>
            </form>
        );
    }
}

export default SearchForm