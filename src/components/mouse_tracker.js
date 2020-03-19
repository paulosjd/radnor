import React, {Component} from "react";
import Mouse, {Dog} from './mouse'

class MouseTracker extends Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse
                    render={mouse => (
                        <Dog mouse={mouse} />)}

                />
            </div>
        );
    }
}



export default MouseTracker