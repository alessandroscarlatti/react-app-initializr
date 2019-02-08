import React from 'react'
import Button from 'react-bootstrap/Button'

const navbarComponent = () => (
    <Button variant="link" href="#/page1">Page 1</Button>
);

const activityComponent = () => (
    <div>Page 1</div>
);

export default {
    id: "page1",
    prettyName: "Page 1",
    route: "/page1",
    activityComponent: activityComponent,
    navbarComponent: navbarComponent
}