import React, {Component} from 'react';
import MainContainer from './containers/main';
import NavBar from './containers/navbar';
import SideMenu from './containers/side_menu';
import AppProvider from './store/provider';

class App extends Component {
    state = {
        selectedItem: '',
    };

    handleMenuBtnClick = (selectedItem) => {
        this.setState({
            ...this.state, selectedItem
        })
    };

    render() {
        return (
            <AppProvider>
                <div className="App">
                    <NavBar />
                    <SideMenu
                        handleClick={this.handleMenuBtnClick.bind(this)}
                        selectedItem={this.state.selectedItem}
                    />
                    <MainContainer selectedItem={this.state.selectedItem} />
                </div>
            </AppProvider>
        )
    }
}

export default App