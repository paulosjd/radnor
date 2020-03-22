import React, {useContext, useState} from "react";
import AppContext from '../store/context'

const CalculatorDemo = (props) => {
    const [foo, setFoo] = useState(0);
    const context = useContext(AppContext);

    return (
        <div className='summary-text'>

        </div>

    )
};

export default CalculatorDemo;