import React, { Component } from 'react';
import MainContainer from './components/main';
import NavBar from './components/navbar';
import AppProvider from './store/provider';

class App extends Component {

    render() {
        return (
            <AppProvider>
                <div className="App">
                    <NavBar />
                    <MainContainer />
                </div>
            </AppProvider>
        )
    }
}

export default App;