import React, {useContext, useState} from "react";
import AppContext from '../store/context'
import SalaryCalculator from '../components/salary_calc'

const CalculatorDemo = (props) => {
    const [foo, setFoo] = useState(0);
    const context = useContext(AppContext);

    return (
        <div className='summary-text'>
            <h4 className='top26'>
                Now a separate package, <code>PropTypes</code> enables type checking for avoiding
                bugs relating to types.
            </h4>
            <SalaryCalculator salary={60000} />
        </div>
    )
};

export default CalculatorDemo;