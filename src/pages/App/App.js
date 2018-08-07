import React, { Component } from 'react';
import {
    Switch,
    Route,
    ImageBackground,
    // Redirect,
} from 'react-router-dom';
// import BackgroundImage from '../../Background/Background';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import NavBar from '../../components/NavBar/NavBar';
import OrderPage from '../OrderPage/OrderPage';
import FooterBar from '../../components/FooterBar/FooterBar'
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state ={
            user: null
        }
    };
    render() {
        return (
            <div className="paperbagset">
                <div>
                <NavBar />
                
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/about' component={AboutPage} />
                    <Route exact path='/order' component={OrderPage} />
                </Switch>
                </div>
                <FooterBar />
            </div>
        );
    }
}

export default App;