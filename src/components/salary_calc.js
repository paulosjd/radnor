import React from "react";
import PropTypes from 'prop-types'
import FancyBorder from '../components/fancy_border'

class SalaryCalculator extends React.Component {
    static defaultProps = {
        annualSalary: 0,
        outgoings: []
    };
    static propTypes = {
        salary: PropTypes.number,
        outgoings: PropTypes.arrayOf(PropTypes.number),
    };

    render() {
        return (
            <div>
                <h4>Annual Salary: ${this.props.salary}</h4>
                <h4>Monthly Salary: ${this.props.salary/12}</h4>
                <FancyBorder color={'beige'} width={(120 + 50 * this.props.outgoings.length) + 'px'}>
                    <table className='calc_table'>
                        <thead>
                            <tr>
                                {['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                                ].map((str, ind) => {
                                    if (ind -1 < this.props.outgoings.length) {
                                        return <th key={ind} >{str}</th>
                                }})}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='row_label'>Outgoings </td>
                                {this.props.outgoings.map((val, ind) => {
                                    return <td key={ind}>{val.toLocaleString('en')}</td>
                                })}
                            </tr>
                            <tr>
                                <td>Net income </td>
                                {this.props.outgoings.map((val, ind) => {
                                    return <td key={ind}>{(this.props.salary/12 - val).toLocaleString('en')}</td>
                                })}
                            </tr>
                        </tbody>
                    </table>
                </FancyBorder>
            </div>)
    }
}

export default SalaryCalculator