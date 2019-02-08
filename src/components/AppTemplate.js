import React from 'react';
import AppNavbar from './AppNavbar'
import ActivityNavbarComponent from './ActivityNavbarComponent'
import AppActivity from './AppActivity'

export default class AppTemplate extends React.Component {

    render() {

        let activityContent = null;
        let activityNavbarComponents = [];

        this.props.children.forEach(child => {
            if (child.type === AppActivity) {
                activityContent = child;
            }
            if (child.type === ActivityNavbarComponent) {
                activityNavbarComponent.push(child);
            }
            if (child.constructor.name === "Array") {
                child.forEach(grandchild => {
                    if (grandchild.type === ActivityNavbarComponent) {
                        activityNavbarComponents.push(grandchild);
                    }
                });
            }
        })

        return (
            <div>
                <AppNavbar>
                    {activityNavbarComponents}
                </AppNavbar>
                <div>
                    {activityContent}
                </div>
            </div>
        )
    }
}