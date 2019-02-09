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

    componentDidMount() {
        function checkAuthentication(url = ``) {
            // Default options are marked with *
            return fetch(url, {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // "Content-Type": "application/x-www-form-urlencoded",
                },
                redirect: "follow", // manual, *follow, error
                referrer: "no-referrer", // no-referrer, *client
            })
        }

        checkAuthentication(`/secret.html`)
            .then(response => {
                console.log("response:", response);
            })
            .catch(response => console.error(response));
    }

    render() {
        let routes = [];
        let navbarComponents = [];

        let activities = this.props.activities;

        if (activities != null) {
            activities.forEach(activity => {
                if (activity.navbarComponent != null) {
                    navbarComponents.push(
                        <Nav.Item key={activity.id}>
                            <activity.navbarComponent activities={activities} />
                        </Nav.Item>
                    )
                }
            });
        }

        activities.forEach(activity => {

            let AppTemplateComponent = () => (
                <AppTemplate navbarComponents={navbarComponents}>
                    <AppActivity>
                        <activity.activityComponent activities={activities} />
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