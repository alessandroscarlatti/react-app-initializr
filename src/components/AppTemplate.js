import React from 'react';
import ReactDOM from 'react-dom';
import AppNavbar from './AppNavbar'

export default class AppTemplate extends React.Component {
    render() {
        return (
            <div>
                <AppNavbar />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}