import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import AppTemplate from './components/AppTemplate'

const App = () => (
    <div>
        <div>
            <AppTemplate />
        </div>
    </div>
)


ReactDOM.render(
    <App />,
    document.getElementById('root')
)