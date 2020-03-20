import React, {Component, Fragment} from "react";
import Mouse, {Dog} from './mouse'

class MouseTracker extends Component {
    render() {
        return (
            <Fragment>
                <div>

                    <p>This example of using render props, feature of React where... Enables code reuse ...</p>
                    <h4>Move the mouse around in the area below!</h4>
                </div>
                <div className='inline'>
                    <Mouse
                        render={mouse => (
                            <Dog mouse={mouse} />)}
                        width={40}
                    />
                </div>
                <div className='inline mouse_track_code' >
                    <pre>
                        &lt;VideoPlayer{'\n    '}
                        ref="videoplayer"{'\n'}
                        preload={'{'}this.props.preload{'}\n'}
                        classes={'{'}this.props.classes{'}\n'}
                        videoID={'{'}this.props.videoID{'}\n'}
                        controls="controls"{'\n'}
                        /&gt;
                    </pre>
                </div>
            </Fragment>

    );
    }
}



export default MouseTracker