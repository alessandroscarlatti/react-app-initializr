import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Alert from 'react-bootstrap/Alert';
import AppTemplate from './AppTemplate'
import AppActivity from './AppActivity'
import ActivityNavbarComponent from './ActivityNavbarComponent'
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom'
import AuthenticationManager from '../services/AuthenticationManager'
import AuthenticatedActivity from './AuthenticatedActivity'

export default class AppWithActivities extends React.Component {

    constructor(props) {
        super(props)

        this.authenticationManager = new AuthenticationManager();
    }

    render() {
        let routes = [];
        let navbarComponents = [];

        let appActivities = [];

        let activities = this.props.activities;

        if (activities != null) {
            activities.forEach(activity => {

                let appActivity = {
                    activity: activity
                }

                if (activity.navbarComponent != null) {
                    let navbarComponent = (
                        <Nav.Item key={activity.id}>
                            <activity.navbarComponent activities={activities} />
                        </Nav.Item>
                    )

                    appActivity.navbarComponent = navbarComponent;
                    navbarComponents.push(navbarComponent);
                }

                // call a function here to take care of login.
                let AppWithActivity = () => (
                    <AppTemplate navbarComponents={navbarComponents}>
                        <AppActivity>
                            <AuthenticatedActivity activity={activity} authenticationManager={this.authenticationManager}>
                                <activity.activityComponent activities={activities} />
                            </AuthenticatedActivity>
                        </AppActivity>
                    </AppTemplate >
                );

                let routeComponent = (
                    <Route exact key={activity.id} path={activity.route} component={AppWithActivity} />
                );

                appActivity.routeComponent = routeComponent;
                routes.push(routeComponent);
            });
        }

        // need to connect Route component and Navbar component

        // <HashRouter>
        //     <div>
        //         <Route exact path="/" component={HomePage} />
        //         <Route path="/page1" component={SimplePage1} />
        //         <Route path="/page2" component={SimplePage2} />
        //     </div>
        // </HashRouter>

        return (
            <HashRouter>
                <Switch>
                    {routes}
                </Switch>
            </HashRouter>
        )
    }
}