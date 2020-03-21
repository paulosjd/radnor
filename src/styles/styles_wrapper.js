import commonStyles from './common_styles';

const translateProps = (props) => {
    let _styles = {...commonStyles.default};
    if (props.disable){
        _styles = {..._styles, ...commonStyles.disable};
    } else {
        _styles = {..._styles, ...commonStyles[props.styleName]};
    }
    return {...props, styles:_styles};
};

export default (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args));
    }
}