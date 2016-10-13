import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from '../components/App'
import reducers from '../reducers/reducers'
import Login from '../components/Login';
import StickyListContainer from '../components/StickyListContainer'
var Routes = require('./Routes');

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndxRoute;
var Link = router.Link;

console.log(`Client running in ${process.env.NODE_ENV} mode`);

let store = createStore(reducers, applyMiddleware(thunk));

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            {Routes}
        </Provider>,
        document.getElementById('app')
    );
});

exports.store = store;