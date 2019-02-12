import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Alert from 'react-bootstrap/Alert';
import AppTemplate from './AppTemplate'
import AppActivity from './AppActivity'
import ActivityNavbarComponent from './ActivityNavbarComponent'
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom'
import AuthenticatedActivity from './AuthenticatedActivity'
import userActivity from './UserActivity'

export default class AppWithActivities extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let routes = [];
        let appActivities = [];

        let activities = this.props.activities;

        if (activities != null) {
            activities.forEach(activity => {

                let appActivity = {
                    activity: activity
                }

                // the app can have an API object injected into it that
                // handles events like commands to display a certain activity...
                // the command is something like
                // what we are doing is publishing an event to the redux store...
                // app.displayActivity({
                //     route: "/activity1/things/1/stuff",  // if null, route does not change...
                //     uiComponent: <div>asdf</div>
                // })
                // as a redux event:
                //
                // {
                //     type: "DISPLAY_ACTIVITY",
                //     route: "/activity1/things/1/stuff",
                //     uiComponent: <div>asdf</div>
                // }
                //
                // What if we can only display activities?
                // If we are adding this route, but it is not available
                // when loading the normal page, we won't be able to load this view for the user!
                // an activity UI component is already a component that has props...
                // technically all the props could be passed THROUGH an activity constructor.
                // This would be a pattern of creating new instances of activities every time.
                // But what if we wanted to reuse an activity?
                // We would need to change its state through a redux event.
                // Then we could tell the app to display that instance.
                let AppWithActivity = () => (
                    <AppTemplate activities={activities}>
                        <AppActivity>
                            <AuthenticatedActivity activity={activity} authenticationManager={userActivity.authenticationManager}>
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