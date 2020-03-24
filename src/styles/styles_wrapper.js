import commonStyles from './common_styles';

const translateProps = (props) => {
    let _styles = {...commonStyles.default};
    if (props){
        _styles = {...commonStyles.default, ...{...commonStyles[props.theme], ...props.extraStyles}}
    }
    return {...props, styles:_styles}
};

export default (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args))
    }
}