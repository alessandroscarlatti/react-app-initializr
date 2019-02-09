import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const navbarComponent = () => (
    <Button variant="link" href="#/login">Login</Button>
);

const activityComponent = () => (
    <div>
        <Container fluid>
            <Row>
                <Col md={3} />
                <Col md={6}>
                    <h2 className="text-center mt-3"><span className="text-secondary fas fa-unlock" /></h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" type="submit" block>
                                Login
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={3} />
            </Row>
        </Container>
    </div>
);

export default {
    id: "login",
    prettyName: "Login",
    route: "/login",
    activityComponent: activityComponent,
    navbarComponent: navbarComponent
}