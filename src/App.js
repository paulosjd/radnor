import React, {Component} from 'react';
import MainContainer from './containers/main';
import NavBar from './containers/navbar';
import SideMenu from './containers/side_menu';
import Footer from './components/footer'
import AppProvider from './store/provider';

class App extends Component {

    state = {
        selectedItem: '',
        theme: 'light'
    };

    handleMenuBtnClick = (selectedItem) => {
        this.setState({
            ...this.state, selectedItem
        })
    };

    render() {
        return (
            <AppProvider
                theme={this.state.theme}
                setTheme={theme => this.setState({theme})}
            >
                <div className="App">
                    <NavBar />
                    <SideMenu
                        handleClick={this.handleMenuBtnClick.bind(this)}
                        selectedItem={this.state.selectedItem}
                    />
                    <MainContainer selectedItem={this.state.selectedItem} />
                    <Footer theme={this.state.theme}/>
                </div>
            </AppProvider>
        )
    }
}

export default App