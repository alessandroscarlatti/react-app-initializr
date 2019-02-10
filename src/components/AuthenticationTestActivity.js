import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const navbarComponent = () => (
    <Button variant="link" href="#/authenticationTest">Authentication Test</Button>
);

function isAuthenticationSuccess(response) {
    return (!response.url.endsWith("login"));
}

function testAuthentication() {
    fetch("/secret.html")
        .then(response => {
            console.log("response:", response);
            if (isAuthenticationSuccess(response)) {
                console.log("Authenticated.");
            } else {
                console.log("Not Authenticated.");
            }
        })
        .catch(response => {
            console.error("response:", response);
        })
}

const activityComponent = () => (
    <Container className="mt-5">
        <Row>
            <Col className="col-12 text-center">
                <Button variant="primary" onClick={testAuthentication}>Authentication Test</Button>
            </Col>
        </Row>

    </Container>
);

export default {
    id: "authenticationTest",
    prettyName: "Authentication Test",
    route: "/authenticationTest",
    activityComponent: activityComponent,
    navbarComponent: navbarComponent
}