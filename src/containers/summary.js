import React, {useContext, useState} from "react";
import AppContext from '../store/context'
import ButtonOne from '../components/button_one'
import TextBlock from '../components/text_block'

const Summary = (props) => {
    const [showEmoji, setShowEmoji] = useState(false);
    let emoji;
    if (showEmoji) {
        emoji = <span role="img" aria-label='cat' className='turtle'>{'\t\ud83d\udc22'}</span>
    }
    const context = useContext(AppContext);
    const padding = {
        marginTop: '14px', marginLeft: '12px', paddingLeft: '10px', paddingRight: '10px'
    };

    return (
        <div className='summary-text'>
            <h4 className='top26'>
                This is a React app that demonstrates basic examples of various React features.
            </h4>
            <h4 className='top26'>
                The higher-order component pattern was used to create the elements below.
            </h4>
            <h4 style={{lineHeight: 0}}>
                This techniques involves wrapping components in a function to reuse logic
                that gives them common functionality.
            </h4>
            <div className='hoc_examples'>
                <TextBlock
                    theme={context.theme}
                    text={'Text block'}
                    extraStyles={{marginRight: '20px', ...padding}}
                />
                <ButtonOne
                    theme={context.theme}
                    text={'Button'}
                    extraStyles={{...padding, cursor: 'pointer'}}
                    clickHandler={() => setShowEmoji(!showEmoji)}
                />
                {emoji}
            </div>
            <h4>
                Above, the components that render the text and button elements are wrapped in a function which injects
                style props.
            </h4>
            <h4 style={{lineHeight: 0, paddingBottom: '12px'}}>
                The value of the injected style props is set using logic that checks the 'theme' prop
                that the component is passed.
            </h4>
            <h4 className='top26'>
                PropTypes  -- where e.g. uses integer (otherwise displays NaN) -- see example in notes
            </h4>
            <h4 className='top26'>
                Component composition  - pass down component (reuse but not use context -- not avatar/theme etc.) -
                state only required by
                a certain reused component (think of new one to make - not avatar).
            </h4>
        </div>
    )
};

export default Summary;