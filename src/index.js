import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import AppTemplate from './components/AppTemplate'
import AppActivity from './components/AppActivity'
import ActivityNavbarComponent from './components/ActivityNavbarComponent'
import Nav from 'react-bootstrap/Nav'
import { HashRouter, Route } from 'react-router-dom'

const exampleAppActivity = {
    prettyName: "Activity 1",
    route: "/activities/activity1",
    uiComponent: null, // some component,
    navbarComponent: null // some component,
}

const AppWithActivities = (activities) => {
    let routes = [];
    let navbarComponents = [];

    if (activities != null) {
        activities.forEach(activity => {
            navbarComponents.push(
                <ActivityNavbarComponent>
                    <Nav.Item>
                        {activity.navbarComponent}
                    </Nav.Item>
                </ActivityNavbarComponent>
            )
        });
    }

    activities.forEach(activity => {

        let AppTemplateComponent = () => (
            <AppTemplate>
                <AppActivity>
                    {activity.uiComponent}
                </AppActivity>
                {navbarComponents}
            </AppTemplate >
        );

        routes.push(
            <Route exact path={activity.route} component={AppTemplateComponent} />
        )
    });

    return (
        <HashRouter>
            <div>
                {routes}
            </div>
        </HashRouter>
    )
}

const homePageActivity = {
    prettyName: "Home Page",
    route: "/",
    uiComponent: <div>Home</div>,
    navbarComponent: <a href="#">Home</a>
}

const App = () => (

    AppWithActivities([
        homePageActivity
    ])

    // <HashRouter>
    //     <div>
    //         <Route exact path="/" component={HomePage} />
    //         <Route path="/page1" component={SimplePage1} />
    //         <Route path="/page2" component={SimplePage2} />
    //     </div>
    // </HashRouter>
)

const HomePage = () => (
    <AppTemplate>
        <AppActivity>
            <div>Home</div>
        </AppActivity>
        <ActivityNavbarComponent>
            <Nav.Item>
                <a href="#">Home</a>
            </Nav.Item>
        </ActivityNavbarComponent>
    </AppTemplate >
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