import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Navigation from './Navigation';
import Header from './Header';
import About from './About';
import Contact from './Contact'
class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
            <div>
                <Navigation logoTitle="Michael Fadillah's Portfolio" />
                <Route exact path = "/" component = {Header} />
                <Route exact path = "/About" component = {About} />
                <Route exact path = "/Contact" component = {Contact} />
            </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
