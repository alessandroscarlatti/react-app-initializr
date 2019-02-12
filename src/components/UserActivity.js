import React from 'react'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AuthenticationManager from '../services/AuthenticationManager'

const AUTHENTICATION_MANAGER = new AuthenticationManager();

// where does this really go?
function logout(url = "") {
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, *same-origin, omit
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
    })
}

class UserNavIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authenticationStatus: "AUTHENTICATING"
        }

        this.UserDropdownMenu = this.UserDropdownMenu.bind(this);
        this.onAuthenticated = this.onAuthenticated.bind(this);
        this.onNotAuthenticated = this.onNotAuthenticated.bind(this);
        this._doLogout = this._doLogout.bind(this);
    }

    componentDidMount() {
        // only need to check the first time...
        AUTHENTICATION_MANAGER.isAuthenticated({ requiresAuthentication: true }, this.onAuthenticated, this.onNotAuthenticated)
    }

    onAuthenticated() {
        this.setState({
            authenticationStatus: "AUTHENTICATED"
        })
    }

    onNotAuthenticated() {
        this.setState({
            authenticationStatus: "NOT_AUTHENTICATED"
        })
    }

    _doLogout() {
        this.setState({
            authenticationStatus: "AUTHENTICATING"
        }, () => {
            logout("/logout")
            .then(result => {
                console.log("logout:", result);
                this.setState({
                    authenticationStatus: "NOT_AUTHENTICATED"
                })
            })
            .catch(result => {
                console.error("logout:", result);
            })
        })
    }

    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle as={UserNavIconDropdown}>
                    <Button style={{ borderRadius: "50%" }} variant="outline-secondary">
                        <span className="far fa-user"></span>
                    </Button>
                    <this.UserDropdownMenu />
                </Dropdown.Toggle>
            </Dropdown>
        )
    }

    UserDropdownMenu() {

        let links = [];

        switch (this.state.authenticationStatus) {
            case "AUTHENTICATING":
                links.push(
                    <Nav.Link key="authenticating">
                        <span className="fas fa-spinner mr-1" />
                        <span>Authenticating...</span>
                    </Nav.Link>
                )
                break;
            case "AUTHENTICATED":
                links.push(
                    <Nav.Link href="#/user" key="userInfo">
                        <span className="fas fa-info-circle mr-1" />
                        <span>User Info</span>
                    </Nav.Link>
                )
                links.push(
                    <Nav.Link onClick={this._doLogout} key="logout">
                        <span className="fas fa-sign-out-alt mr-1" />
                        <span>Logout</span>
                    </Nav.Link>
                )
                break;
            case "NOT_AUTHENTICATED":
                links.push(
                    <Nav.Link href="#/login" key="login">
                        <span className="fas fa-sign-in-alt mr-1" />
                        <span>Login</span>
                    </Nav.Link>
                )
                break;
        }

        return (
            <Dropdown.Menu alignRight id="dropdown-menu-align-right">
                <Nav className="flex-column">
                    {links}
                </Nav>
            </Dropdown.Menu>
        )
    }
}

class UserNavIconDropdown extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // e.preventDefault();
        this.props.onClick(e);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.props.children}
            </div>
        );
    }
}

const activityComponent = () => (
    <Container className="mt-5">
        <Row>
            <Col className="col-12 text-center">
                <Alert variant="success">
                    <span className="far fa-user mr-1"></span>
                    <span>Welcome, User!</span>
                </Alert>
            </Col>
        </Row>
    </Container>
);

export default {
    id: "user",
    prettyName: "User",
    route: "/user",
    activityComponent: activityComponent,
    navbarComponent: UserNavIcon,
    navbarPosition: "RIGHT",
    requiresAuthentication: true,
    rolesPermitted: ["USER"],
    authenticationManager: AUTHENTICATION_MANAGER
}