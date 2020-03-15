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
                    <div className="col-md-2">
                        <h4>Foo</h4>
                    </div>
                    <div className="col-md-10">
                        <MainContainer />
                    </div>
                </div>
            </AppProvider>
        )
    }
}

export default App;