import React from 'react'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const navbarComponent = () => (
    <Button variant="link" href="#/">Home</Button>
);

const activityComponent = () => (
    <Container className="mt-5">
        <Row>
            <Col className="col-12 text-center">
                <Alert variant="success">This is the Home Activity.</Alert>
            </Col>
        </Row>
    </Container>
);

export default {
    id: "homePage",
    prettyName: "Home Page",
    route: "/",
    activityComponent: activityComponent,
    navbarComponent: navbarComponent
}