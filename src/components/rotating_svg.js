import React from "react";

class RotatingSvg extends React.Component {
    static defaultProps = { thetaDelta: 0.5 };
    state = { currentTheta: 0 };

    componentDidMount() {
        const animate = () => {
            let nextTheta = 0;
            if (!this.props.pause && this.state.currentTheta <= this.props.angularLimit) {
                nextTheta = this.state.currentTheta + this.props.thetaDelta
            }
            this.setState({ currentTheta: nextTheta });
            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.rafId);
    }

    render() {
        return (
            <svg width="100px" height="100px" viewBox="0 0 100 100">
                <g transform="translate(50, 50)">
                    <rect id="rect1" cx="25" width="4" height="14" x="14" y="14" fill="#E1EAAF"
                          transform={`rotate(${this.state.currentTheta})`}/>
                    <rect id="rect2" cx="25" width="14" height="4" x="14" y="14" fill="#E1EAAF"
                          transform={`rotate(${this.state.currentTheta})`}/>
                    <rect id="rect3" cx="25" width="4" height="18" x="28" y="14" fill="#E1EAAF"
                          transform={`rotate(${this.state.currentTheta})`}/>
                    <rect id="rect4" cx="25" width="14" height="4" x="14" y="28" fill="#E1EAAF"
                          transform={`rotate(${this.state.currentTheta})`}/>
                </g>
            </svg>
        );
    }
}

export default RotatingSvg