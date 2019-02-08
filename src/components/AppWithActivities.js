import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import AppTemplate from './AppTemplate'
import AppActivity from './AppActivity'
import ActivityNavbarComponent from './ActivityNavbarComponent'
import { HashRouter, Route } from 'react-router-dom'

export default class AppWithActivities extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let routes = [];
        let navbarComponents = [];

        let activities = this.props.activities;
    
        if (activities != null) {
            activities.forEach(activity => {
                navbarComponents.push(
                    <Nav.Item key={activity.id}>
                        <activity.navbarComponent activities={activities} />
                    </Nav.Item>
                )
            });
        }
    
        activities.forEach(activity => {
    
            let AppTemplateComponent = () => (
                <AppTemplate navbarComponents={navbarComponents}>
                    <AppActivity>
                        <activity.activityComponent activities={activities}/>
                    </AppActivity>
                </AppTemplate >
            );
    
            routes.push(
                <Route exact key={activity.id} path={activity.route} component={AppTemplateComponent} />
            )
        });
    
        // <HashRouter>
        //     <div>
        //         <Route exact path="/" component={HomePage} />
        //         <Route path="/page1" component={SimplePage1} />
        //         <Route path="/page2" component={SimplePage2} />
        //     </div>
        // </HashRouter>
        return (
            <HashRouter>
                <div>
                    {routes}
                </div>
            </HashRouter>
        )
    }
}