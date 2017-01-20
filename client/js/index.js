import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { browserHistory, hashHistory, IndexRoute, Link, Route, Router } from 'react-router';

import App from '../components/App';
import Header from '../components/Header';
import Register from '../components/Register';
import MyAccount from '../components/MyAccount';
import ChangePassword from '../components/ChangePassword';
import DeleteAccount from '../components/DeleteAccount';
import Login from '../components/Login';
import Logout from '../components/Logout';
import StickyList from '../components/StickyList';
import reducers from '../reducers/reducers';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

export let store = createStore(reducers, applyMiddleware(thunk));
// <Route path="/myaccount/changepassword" component={ChangePassword} />
// <Route path="/myaccount/deleteaccount" component={DeleteAccount} />
var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/login" component={Login} />
            <Route path="/myaccount" component={MyAccount} />
            <Route path="/stickies" component={StickyList} />
            <Route path="/register" components={Register} />
            <Route path="/logout" components={Logout} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            {routes}
        </Provider>,
        document.getElementById('app')
    );
});
