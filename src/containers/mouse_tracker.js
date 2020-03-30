import React, {Component, Fragment} from "react";
import Mouse, {Dog} from '../components/mouse'

class MouseTracker extends Component {
    render() {
        return (
            <Fragment>
                <div className='inline' style={{width: '40vw'}}>
                    <p>The following demonstrates usage of a render prop, a technique for sharing code between components
                        using a prop whose value is a function.</p>
                    <p>Instead of <code>&lt;Dog&gt;</code> being hard-coded inside of the <code>&lt;Mouse&gt; </code>
                        component, <code> &lt;Mouse&gt; </code> is passed
                        a function prop to dynamically determine what to render.</p>
                    <h4>Move the mouse around in the area below!</h4>
                </div>
                <div className='inline mouse_track_code' >
                    <pre>
                        const Dog = ({'{'}mouse{'}'}) => {'{\n'}
                        {'    '}return ( {'\n'}
                        {'        '}&lt;span style={'{{position: \'absolute\'\n'}
                        {'            left: mouse.x, top: mouse.y}} \n'}
                        {'        '}/&gt;{'\ud83d\udc15'}&lt;/span>){'\n'}
                        {'}\n\n'}
                        class MouseTracker extends Component {'{\n'}
                        {'    '}render() {'{\n'}
                        {'        '}return ( {'\n'}
                        {'            '}&lt;Mouse render={'{mouse => (\n'}
                        {'                '}&lt;Dog mouse={'{mouse} '}/&gt;)}{'\n'}
                        {'            '}/&gt;){'\n'}
                        {'    '}{'}\n'}
                        {'}\n\n'}
                        class Mouse extends Component {'{\n'}
                        {'    '}state = {'{ x: 0, y: 0 };\n\n'}
                        {'    '}handler(event) {'{\n'}
                        {'        '}this.setState({'{\n'}
                        {'            '}x: event.clientX, y: event.clientY{'\n'}
                        {'        })\n'}
                        {'    }\n\n'}
                        {'    '}render() {'{\n'}
                        {'        '}return ( {'\n'}
                        {'            '}&lt;div{'\n'}
                        {'                '}onMouseMove={'{this.handler.bind(this)}\n'}
                        {'            '}/&gt;{'\n'}
                        {'                {this.props.render(this.state)}\n'}
                        {'            '}&lt;div/&gt;{')\n'}
                        {'    '}{'}\n}'}
                    </pre>
                </div>
                <div className='inline'>
                    <Mouse
                        render={mouse => (
                            <Dog mouse={mouse} />)}
                        width={38}
                        height={56}
                    />
                </div>
            </Fragment>
    )}
}

export default MouseTracker