import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import AppTemplate from './components/AppTemplate'
import { HashRouter, Route } from 'react-router-dom'

const App = () => (
    <HashRouter>
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/page1" component={SimplePage1} />
            <Route path="/page2" component={SimplePage2} />
        </div>
    </HashRouter>

)

const HomePage = () => (
    <AppTemplate>
        <div>Home</div>
    </AppTemplate>
)

const SimplePage1 = () => (
    <AppTemplate>
        <div>Simple Page 1</div>
    </AppTemplate>
)

const SimplePage2 = () => (
    <AppTemplate>
        <div>Simple Page 2</div>
    </AppTemplate>
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)