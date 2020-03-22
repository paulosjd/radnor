import React from "react";
import PropTypes from 'prop-types'

class SalaryCalculator extends React.Component {
    static defaultProps = {
        annualSalary: 0
    };
    static propTypes = {
        salary: PropTypes.number
    };
    render() {
        const monthOut = [1800, 1600, 1200, 1900, 2200, 1400];  // TODO make this to propstypes!!
        // TODO!! WRAP SOMETHING BELOW IN CONTAINMENT CHILDREN PROP  -- -FANCY BORDER EXAMPLE FROM NOTES
        return (
            <div>
                <h4>Annual Salary: ${this.props.salary}</h4>
                <h4>Monthly Salary: ${this.props.salary/12}</h4>
                <table>
                    <thead>
                        <tr>
                            {['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                            ].map((str, ind) => {
                                if (ind -1 < monthOut.length) {
                                    return <th key={ind}>{str}</th>
                            }})}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Outgoings </td>
                            {monthOut.map((val, ind) => {
                                return <td key={ind}>{val.toLocaleString('en')}</td>
                            })}
                        </tr>
                        <tr>
                            <td>Net income </td>
                            {monthOut.map((val, ind) => {
                                return <td key={ind}>{(this.props.salary/12 - val).toLocaleString('en')}</td>
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>)
    }
}

export default SalaryCalculator;