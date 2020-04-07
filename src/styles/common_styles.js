const initial = {borderRadius:'2px', border: 'solid 2px #8a8a8a'};

const styles = {
    default: {
        ...initial,
        backgroundColor: '#374773',
        color: '#eae8e8',
        padding: '4px',
    },
    disable: {
        ...initial,
        backgroundColor: '#9c9c9c',
        color: '#c7c6c6',
    },
    light: {
        ...initial,
        backgroundColor: '#a0c56b',
        color: '#FFF',
    },
    grey: {
        ...initial,
        backgroundColor: '#b1b1b1',
        borderColor: '#b1b1b1',
        color: '#FFF',
    },
    dark: {
        ...initial,
        backgroundColor: '#6b646e',
        color: '#eae8e8',
    },
    earth: {
        ...initial,
        backgroundColor: '#586373',
        color: '#eae8e8',
    }
};

export default styles;