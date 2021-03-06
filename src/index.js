import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BowlPool from './BowlPool';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
  

import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';

const options = {
    position: 'bottom center',
    timeout: 3000,
    offset: '30px',
    transition: 'scale'
}

const Root = () => (
    <Router>
        <AlertProvider template={AlertTemplate} {...options}>
            <BowlPool />
        </AlertProvider>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
