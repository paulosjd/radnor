import React from "react";
import useKeyPress from '../utils/key_press'

function KeyPressDemo () {

    const happyPress = useKeyPress('h');
    const sadPress = useKeyPress('s');
    const robotPress = useKeyPress('r');
    const foxPress = useKeyPress('f');

    return (
        <div>
            <h4>Try typing the following characters in your keyboard:</h4>
            <div>h, s, r, f</div>
            <div>
                {happyPress && '😊'}
                {sadPress && '😢'}
                {robotPress && '🤖'}
                {foxPress && '🦊'}
            </div>
            <h4>
                The behavior achieved using a custom hook which implements Reacts <pre>useState</pre> and
                <pre>useEffect</pre> hooks. In using <pre>useEffect</pre>, empty array as deps since
                the effect simple adds and removes event listeners from dom so only need to run
                on mount and unmount of the component
            </h4>


        </div>
    )
}

export default KeyPressDemo