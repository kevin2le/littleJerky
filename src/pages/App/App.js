import React, { Component } from 'react';
import {
    Switch,
    Route,
    // Redirect,
} from 'react-router-dom';
import Background from '../../Background/Background';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import NavBar from '../../components/NavBar/NavBar';
import OrderPage from '../OrderPage/OrderPage';
import FooterBar from '../../components/FooterBar/FooterBar'

class App extends Component {
    constructor() {
        super();
        this.state ={
            user: null
        }
    };
    render() {
        return (
            <div>
                <NavBar />
                <Background />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/about' component={AboutPage} />
                    <Route exact path='/order' component={OrderPage} />
                </Switch>
                <FooterBar />
            </div>
        );
    }
}

export default App;