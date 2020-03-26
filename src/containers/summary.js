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
            <h4 className='top26' style={{lineHeight: 0}}>
                The following higher-order component pattern serves for defining logic
                in a single place, for reusing across many components.
            </h4>
            <div className='hoc_examples'>
                <TextBlock
                    theme={context.theme}
                    text={'A component that displays text'}
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
                The components that renders the above text and button elements are wrapped in a function which injects
                style props.
            </h4>
            <h4 style={{lineHeight: 0, paddingBottom: '12px'}}>
                The value of these injected props is set using logic that checks the 'theme' prop
                that the component is passed:
            </h4>
            <pre>
                const stylesWrapper = (WrappedComponent) => {'{\n'}
                {'    '}return function wrappedRender(args) {'{\n'}
                {'        '}return WrappedComponent(translateProps(args)){'\n'}
                {'    '}{'}\n'}
                {'}\n\n'}
                const translateProps = (props) => {'{\n'}
                {'    return {...props, ...{ ...commonStyles.default, ...commonStyles[props.theme]}}\n'}
                {'}\n\n'}
                const Button = (props) => (&lt;button style={'{props.styles}'}&gt;{'{props.text}'}&lt;/button&gt;{')\n\n'}
                const WrappedButton = stylesWrapper(Button){'\n\n'}
            </pre>
        </div>
    )
};

export default Summary