import React from "react";
import SalaryCalculator from '../components/salary_calc'

const CalculatorDemo = (props) => {

    return (
        <div className='summary-text'>
            <h4 className='top26'>
                Now a separate package, <code>PropTypes</code> enables type checking for avoiding
                bugs relating to types.
            </h4>
            <SalaryCalculator
                salary={60000}
                outgoings={[1800, 1600, 1200, 1900, 2200, 1400]}
            />
            <h4>
                The component divides the <code>annualSalary</code> prop it receives and
                so a number is required to avoid '$NaN' being rendered.
            </h4>
            <h4 style={{lineHeight: 0, paddingBottom: '12px'}}>
                <code>PropTypes.number</code> and <code>PropTypes.arrayOf(PropTypes.number)</code>
                is used to perform type-checking and to document the expected props.
            </h4>
            <h4>
                The border around the table is provided by a component which uses containment and the children prop.
            </h4>
            <h4 style={{lineHeight: 0, paddingBottom: '12px'}}>
                The children prop passes child elements directly into the components output, making it de-coupled
                from its content and so more reusable.
            </h4>
            <pre>
                const FancyBorder = (props) => {'{\n'}
                {'    '}return ( {'\n'}
                {'        '}&lt;div className={'{\'fancy-border-\' + props.color} '}/&gt;{'\n'}
                {'           {props.children}\n'}
                {'        '}&lt;/div&gt;{'\n    )\n}\n'}
            </pre>
        </div>
    )
};

export default CalculatorDemo