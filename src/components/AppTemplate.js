import React from 'react';
import AppNavbar from './AppNavbar'
import ActivityNavbarComponent from './ActivityNavbarComponent'
import AppActivity from './AppActivity'

export default class AppTemplate extends React.Component {

    render() {

        let activityContent = this.props.children;

        if (this.props.children != null) {
            if (this.props.children.constructor.name === "Array") {
                this.props.children.forEach(child => {
                    if (child.type === AppActivity) {
                        activityContent = child;
                    }
                })
            }
        }

        return (
            <div>
                <AppNavbar navbarComponents={this.props.navbarComponents} />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}