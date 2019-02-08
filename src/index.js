import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import AppTemplate from './components/AppTemplate'
import AppActivity from './components/AppActivity'
import ActivityNavbarComponent from './components/ActivityNavbarComponent'
import Nav from 'react-bootstrap/Nav'
import { HashRouter, Route } from 'react-router-dom'
import homeActivity from './components/HomeActivity'
import page1Activity from './components/Page1Activity'
import searchActivity from './components/SearchActivity'

const AppWithActivities = (activities) => {
    let routes = [];
    let navbarComponents = [];

    if (activities != null) {
        activities.forEach(activity => {
            navbarComponents.push(
                <Nav.Item key={activity.id}>
                    {activity.navbarComponent}
                </Nav.Item>
            )
        });
    }

    activities.forEach(activity => {

        let AppTemplateComponent = () => (
            <AppTemplate navbarComponents={navbarComponents}>
                <AppActivity>
                    {activity.activityComponent}
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

ReactDOM.render(
    AppWithActivities([
        homeActivity,
        page1Activity,
        searchActivity
    ]),
    document.getElementById('root')
)