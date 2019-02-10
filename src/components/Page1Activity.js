import React from 'react'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const navbarComponent = () => (
    <Button variant="link" href="#/page1">Page 1</Button>
);

const activityComponent = () => (
    <Container className="mt-5">
        <Row>
            <Col className="col-12 text-center">
                <Alert variant="success">This is the Page 1 Activity.</Alert>
            </Col>
        </Row>
    </Container>
);

export default {
    id: "page1",
    prettyName: "Page 1",
    route: "/page1",
    activityComponent: activityComponent,
    navbarComponent: navbarComponent,
    requiresAuthentication: true,
    rolesPermitted: ["USER"]
}