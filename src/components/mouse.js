import React from "react";

class Mouse extends React.Component {
    static defaultProps = {
        height: '100vh',
        width: '100vw'
    };

    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    getStyleDim = dim => {
        if (!isNaN(dim)) {
            return dim + 'vw'
        } return dim
    };

    render() {
        return (
            <div
                onMouseMove={this.handleMouseMove}
                style={{
                    height: this.getStyleDim(this.props.height),
                    width: this.getStyleDim(this.props.width)
                }}
            >
                {this.props.render(this.state)}
            </div>
        );
    }
}

export const Dog = ({mouse}) => {
    return (
        <span style={{ position: 'absolute', left: mouse.x, top: mouse.y, cursor: 'default' }}
              role="img" aria-label='cat'
        >{'\ud83d\udc15'}</span>)
};

export default Mouse