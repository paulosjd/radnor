import React from "react";

const RequestWatcher = (config = {}) => (BaseComponent) => {
    const {
        // function will be called automatically on component mount
        loadFunc = 'load',
        // `props => args` function allow to specify `loadFunc` arguments
        loadFuncArgs = () => [],
        // `props => <Loader />` renderer
        renderLoader = () => <div>Loading...</div>,
        // `props => message => <Error />` renderer
        renderError = () => message => <div>Sorry! {message}</div>,
    } = config;

    return class extends React.Component {
        static displayName = `RequestWatcher(${BaseComponent.displayName})`;

        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                error: null,
                bindedFuncs: {}
            };
        }
        render() {
            console.log(loadFunc);
            console.log(loadFuncArgs);
            const {loading, error, bindedFuncs} = this.state;
            return (
                <BaseComponent
                    data={data}
                    isLoading={loading}
                    error={error}
                    {...this.props}
                    {...bindedFuncs}
                />
            )}
    }
}
