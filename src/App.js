import React, { Component } from 'react';
import MainContainer from './containers/main';
import NavBar from './containers/navbar';
import SideMenu from './containers/side_menu';
import AppProvider from './store/provider';

class App extends Component {
    state = {
        selectedMenu: '',
    };

    handleMenuBtnClick = (selectedMenu) => {
        this.setState({...this.state, selectedMenu})
    };

    render() {
        console.log(this.state)
        return (
            <AppProvider>
                <div className="App">
                    <NavBar />
                    <SideMenu handleClick={this.handleMenuBtnClick.bind(this)} />
                    <MainContainer selectedMenu={this.state.selectedMenu} />
                </div>
            </AppProvider>
        )
    }
}

export default App;