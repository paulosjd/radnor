import React, {useContext, useEffect, useState} from "react";
import ButtonOne from '../components/button_one'
import useKeyPress from '../utils/key_press'
import AppContext from "../store/context";

const KeyPressDemo = (props) => {

    const happyPress = useKeyPress('h');
    const sadPress = useKeyPress('s');
    const robotPress = useKeyPress('r');
    const foxPress = useKeyPress('f');
    const [showPressed, setShowPressed] = useState(false);
    const context = useContext(AppContext);

    function downHandler({ key }) {
        for (let [k, char] of [['h', '😊'], ['s', '😢'], ['r', '🤖'], ['f', '🦊']]) {
            if (k === key) {
                props.setKeyPressed(char)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
        };
    }, []);

    let keyHistory;
    if (showPressed) {
        keyHistory = props.keyPressHistory.slice(-32)
    }

    return (
        <React.Fragment>
            <div className='inline' style={{width: '34vw', marginTop: 12}}>
                <h4>Try typing these characters on your keyboard:</h4>
                <h4>h, s, r, f
                    <span style={{paddingLeft: 20}}>
                        {happyPress && '😊'}
                        {sadPress && '😢'}
                        {robotPress && '🤖'}
                        {foxPress && '🦊'}
                    </span>
                </h4>
                <h4>This is done via a custom hook which uses React's built-in hooks</h4>
                <h4>
                    In <code>useEffect</code>,
                    an empty array is passed as the deps since the effect simply
                    adds and removes event listeners from the DOM,
                    so only needs to run on mount and unmount of the component
                </h4>
                <ButtonOne
                    theme={context.theme}
                    text={''.concat(!showPressed ? 'Show' : 'Hide',  ' history')}
                    extraStyles={{cursor: 'pointer', padding: 4, width: 100, marginTop: 10}}
                    clickHandler={() => setShowPressed(!showPressed)}
                />
                <h4>{keyHistory}</h4>
            </div>
            <div className='inline' style={{width: '44vw', float: 'right'}}>
                <pre>
                    function useKeyPress(targetKey) {'{\n\n'}
                    {'    '}const [keyPressed, setKeyPressed] = useState(false){'\n\n'}
                    {'    // ... handlers which conditionally invoke setKeyPressed \n\n'}
                    {'    useEffect(() => {\n'}
                    {'        window.addEventListener(\'keydown\', downHandler);\n'}
                    {'        window.addEventListener(\'keyup\', upHandler);\n'}
                    {'        return () => {\n'}
                    {'            window.removeEventListener(\'keydown\', downHandler);\n'}
                    {'            window.removeEventListener(\'keyup\', upHandler);\n        }\n'}
                    {'    }, [])\n\n'}
                    {'    return keyPressed\n}'}
                    {'\n\nconst KeyPressDemo = (props) => {\n\n'}
                    {'    '}const happyPress = useKeyPress('h'){'\n'}
                    {'    // ...\n\n'}
                    {'    return (\n'}
                    {'        '}&lt;h4&gt;h, s, r, f{'\n'}
                    {'            '}&lt;span&gt;{'\n'}
                    {'                {happyPress && \'😊\'}\n'}
                    {'                {/* ... */}\n'}
                    {'            '}&lt;/span&gt;{'\n'}
                    {'        '}&lt;/h4&gt;){'\n}\n'}
                </pre>
            </div>
        </React.Fragment>
    )
}

export default KeyPressDemo