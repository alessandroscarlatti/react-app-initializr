import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert';

const navbarComponent = () => (
    <Button variant="link" href="#/login">Login</Button>
);

function login(url = ``, params = {}) {

    let formData = new FormData();
    formData.append('username', params.username);
    formData.append('password', params.password);

    // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "omit", // include, *same-origin, omit
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: formData // "username=asdf&password=asdf"
    })
}

function isAuthenticationSuccess(response) {
    return (!response.url.endsWith("login?error"));
}

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status: "WAITING_FOR_USER",
        }

        this.doLogin = this.doLogin.bind(this);
    }

    doLogin() {

        this.setState({
            status: "AUTHENTICATING"
        }, () => {
            login(`/login`, {
                username: this.refs.username.value,
                password: this.refs.password.value
            })
                .then(response => {
                    console.log("response:", response);
                    let success = isAuthenticationSuccess(response);
                    if (success) {
                        this.setState({
                            status: "SUCCESS"
                        })
                    } else {
                        this.setState({
                            status: "ERROR"
                        })
                    }
                })
                .catch(response => {
                    console.error(response);
                    this.setState({
                        status: "ERROR"
                    })
                });
        })
    }

    render() {
        let isLoading = this.state.status === "AUTHENTICATING";

        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col md={3} />
                        <Col md={6}>
                            <h2 className="text-center mt-3"><span className="text-secondary fas fa-unlock" /></h2>
                            <Form onSubmit={this.doLogin}>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control disabled={isLoading} ref="username" type="text" placeholder="Username" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control disabled={isLoading} ref="password" type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicChecbox">
                                    <Form.Check disabled={isLoading} type="checkbox" label="Remember Me" />
                                </Form.Group>
                                <Form.Group>
                                    <Button disabled={isLoading} variant="primary" type="submit" block>
                                        {
                                            isLoading ? "Authenticating..." : "Login"
                                        }
                                    </Button>
                                </Form.Group>
                                {
                                    this.state.status === "SUCCESS" ? (
                                        <Form.Group>
                                            <Alert variant="success">You are logged in.</Alert>
                                        </Form.Group>
                                    ) : null
                                }
                                {
                                    this.state.status === "ERROR" ? (
                                        <Form.Group>
                                            <Alert variant="danger">Error logging in. Please try again.</Alert>
                                        </Form.Group>
                                    ) : null
                                }
                            </Form>
                        </Col>
                        <Col md={3} />
                    </Row>
                </Container>
            </div>
        )
    }
}

export default {
    id: "login",
    prettyName: "Login",
    route: "/login",
    activityComponent: LoginForm,
    navbarComponent: null
}