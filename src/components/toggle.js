import * as React from "react";
import { CSSTransition, transit } from "react-css-transition";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({active: !this.state.active});
    }

    render() {
        return (
            <div style={styles.container} onClick={this.handleClick}>
                <CSSTransition
                    defaultStyle={{ transform: "translate(0, 0)" }}
                    enterStyle={{ transform: transit("translate(50px, 0)", 500, "ease-in-out") }}
                    leaveStyle={{ transform: transit("translate(0, 0)", 500, "ease-in-out") }}
                    activeStyle={{ transform: "translate(50px, 0)" }}
                    active={this.state.active}
                >
                    <div style={styles.circle} />
                </CSSTransition>
            </div>
        );
    }
}
