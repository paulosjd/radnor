import React, {useContext, useState} from "react";
import AppContext from '../store/context'
import ButtonOne from './button_one'
import TextBlock from './text_block'

const Summary = (props) => {
    const [showEmoji, setShowEmoji] = useState(false);
    let emoji;
    if (showEmoji) {
        emoji = <span role="img" aria-label='cat' className='turtle'>{'\t\ud83d\udc22'}</span>
    }
    const context = useContext(AppContext);
    const padding = {
        marginTop: '14px', marginBottom: '8px', paddingLeft: '10px', paddingRight: '10px'
    };

    return (
        <div className='summary-text'>
            <h4>This is a React app to demonstrate various features in React.
                It does not use any additional libraries other than <code>prop-types</code>.</h4>
            <h4>The higher-order component pattern was used to create the elements below.</h4>
            <h4 style={{lineHeight: 0}}>
                This techniques involves wrapping components in a function which gives them common functionality,
                such as by injecting new props or setting defaults.</h4>
            <div className='hoc_examples'>
                <TextBlock
                    theme={context.theme} text={'Text block'}
                    extraStyles={{marginRight: '20px', ...padding}}
                />
                <ButtonOne
                    theme={context.theme} text={'Button'} extraStyles={padding}
                    clickHandler={() => setShowEmoji(!showEmoji)}/>
                {emoji}
            </div>
            <h4>Below is avatar which is used in various places - to reuse it is passed and render as a
                child / containment / composition</h4>
        </div>
    )
};

export default Summary;