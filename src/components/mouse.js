import React from "react";

class Mouse extends React.Component {
    static defaultProps = {
        height: '100vh',
        width: '100vw'
    };

    state = { x: 0, y: 0 };

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    getStyleDim = (dim, sfx) => {
        if (!isNaN(dim)) {
            return dim + sfx
        } return dim
    };

    render() {
        return (
            <div
                onMouseMove={this.handleMouseMove.bind(this)}
                style={{
                    height: this.getStyleDim(this.props.height, 'vh'),
                    width: this.getStyleDim(this.props.width, 'vw')
                }}
            >
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default Mouse

export const Dog = ({mouse}) => {
    if (!mouse.x && !mouse.y) {
        return null
    }
    return (
        <span style={{ position: 'absolute', left: mouse.x, top: mouse.y, cursor: 'default', }}
              role="img" aria-label='cat'
        >{'\ud83d\udc15'}</span>)
};