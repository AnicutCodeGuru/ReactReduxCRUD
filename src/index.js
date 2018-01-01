import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension"; 
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.css';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    <BrowserRouter>
        <Provider  store={store} >
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

