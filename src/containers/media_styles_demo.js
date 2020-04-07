import React, {useState} from "react";
import {LoadingSpinner, LoadingBar, PacmanSpinner} from '../components/spinners'
import ButtonOne from '../components/button_one'

// const foo = <ReactCSSTransitionGroup/>

const MediaStylesDemo = (props) => {

    const [inputVal, setInputVal] = useState('');
    const [pauseLoadSpin, setPauseLoadSpin] = useState(false);
    const [showCssCode, setShowCssCode] = useState(false);
    const [selectedColor, setSelectedColor] = useState('#ffe583');
    const [selectedSpeed, setSelectedSpeed] = useState('normal');

    let spinCode = (
        <pre className='top26'>
            const LoadingSpinner = () => {'{\n'}
            {'    '}return ( {'\n'}
            {'        '}&lt;svg id="loading-spinner" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" &gt;{'\n'}
            {'            '}&lt;g fill="none"&gt;{'\n'}
            {'                '}&lt;path id="track" fill="#C6CCD2" d="M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M24,44 C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4 C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 Z" /&gt;{'\n'}
            {'                '}&lt;path id="section" fill="#3F4850" d="M24,0 C37.254834,0 48,10.745166 48,24 L44,24 C44,12.954305 35.045695,4 24,4 L24,0 Z" /&gt;{'\n'}
            {'            '}&lt;/g&gt;{'\n'}
            {'        '}&lt;/svg&gt;){'\n}\n\n'}
            const LoadingBar = () => {'{\n'}
            {'    '}return ( {'\n'}
            {'        '}&lt;svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" &gt;{'\n'}
            {'            '}&lt;g&gt;{'\n'}
            {'                '}&lt;rect id="loading-bar-left"  width="8" height="22" /&gt;{'\n'}
            {'                '}&lt;rect id="loading-bar-middle"  width="8" height="22" x="14" /&gt;{'\n'}
            {'                '}&lt;rect id="loading-bar-right"  width="8" height="22" x="28" /&gt;{'\n'}
            {'            '}&lt;/g&gt;{'\n'}
            {'        '}&lt;/svg&gt;){'\n}\n'}
        </pre>
    );
    if (showCssCode) {
        spinCode = (
            <pre className=''>
                #loading-spinner {'{\n'}
                {'  animation: loading-spinner 1s linear infinite\n}\n\n'}
                {'@keyframes loading-spinner {\n from {\n'}
                {'  transform: rotate(0deg)\n  } to {\n'}
                {'  transform: rotate(360deg)\n  }\n}\n\n'}
                #loading-bar-left {'{\n'}
                {'  animation: loading-bar-morph 1s linear .1s infinite;  transform-origin: center\n}\n\n'}
                #loading-bar-middle {'{\n'}
                {'  animation: loading-bar-morph 1s linear .2s infinite;  transform-origin: center\n}\n\n'}
                #loading-bar-right {'{\n'}
                {'  animation: loading-bar-morph 1s linear .4s infinite;  transform-origin: center\n}\n\n'}
                {'@keyframes loading-bar-morph {\n  0% {\n'}
                {
                '    transform: scaleY(1)\n' +
                '  }\n' +
                '  25% {\n' +
                '    transform: scaleY(0.3)\n' +
                '  }\n' +
                '  50% {\n' +
                '    transform: scaleY(0.7)\n' +
                '  }\n' +
                '  75% {\n' +
                '    transform: scaleY(0.15)\n' +
                '  }\n' +
                '}'}

            </pre>
        );
    }

    return (
        <React.Fragment>
            <div>
                <div className='inline top26 left20' style={{width: '7vw'}}>
                    <LoadingSpinner pause={pauseLoadSpin}/>
                </div>
                <div className='inline top26 left20' style={{width: '7vw'}}>
                    <LoadingBar pause={pauseLoadSpin}/>
                </div>
                <div className='inline top26 left20' style={{width: '8vw'}}>
                    <ButtonOne
                        theme='grey'
                        text={!pauseLoadSpin ? '\u23f8\ufe0f Pause' : '\u25b6\ufe0f Resume'}
                        clickHandler={() => setPauseLoadSpin(!pauseLoadSpin)}
                    />
                </div>
                <div className='media-right'>
                        <PacmanSpinner
                            pause={pauseLoadSpin}
                            spinColor={selectedColor}
                        />
                        <label>Color: </label>
                        <select
                            className='color-select'
                            onChange={e => setSelectedColor(e.target.value)}
                        >
                            {['#ffe583', '#cdffb2', '#aec8ff'].map(x => {
                                return <option key={x} style={{backgroundColor: x}} value={x}> </option>;
                            })}
                        </select>
                        <label className='left20'>Speed: </label>
                        <select
                            value={selectedSpeed}
                            className='speed-select'
                            onChange={e => setSelectedSpeed(e.target.value.toLowerCase())}
                        >
                            {['normal', 'fast', 'slow'].map(x => {
                                return (
                                    <option key={x} style={{backgroundColor: x}} value={x}>
                                        {x[0].toUpperCase() + x.substring(1)}
                                    </option>
                                )
                            })}
                        </select>
                </div>
            </div>
            <div className='inline'>
                <button onClick={() => setShowCssCode(!showCssCode)}
                        className={!showCssCode ? 'med-btn act-btn' : 'med-btn'}>JSX</button>
                <button onClick={() => setShowCssCode(!showCssCode)}
                        className={showCssCode ? 'med-btn act-btn' : 'med-btn'}>CSS</button>
            </div>
            <div className='spin-jsx'>
                {spinCode}
            </div>
        </React.Fragment>
    )
};

export default MediaStylesDemo