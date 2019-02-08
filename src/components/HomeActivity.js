import React from 'react'
import Button from 'react-bootstrap/Button'

const navbarComponent = () => (
    <Button variant="link" href="#/">Home</Button>
);

const activityComponent = () => (
    <div>Home</div>
);

export default {
    id: "homePage",
    prettyName: "Home Page",
    route: "/",
    activityComponent: activityComponent,
    navbarComponent: navbarComponent
}