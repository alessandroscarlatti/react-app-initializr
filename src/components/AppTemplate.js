import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Image from 'react-bootstrap/Image'

export default class AppTemplate extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Brand href="#home">App</Navbar.Brand>
                <Navbar.Brand>local</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Item>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item> */}

                        <Nav.Item>
                            <Form inline>
                                <InputGroup>
                                    <FormControl type="text" placeholder="Search" />
                                    <InputGroup.Append>
                                        <Button variant="outline-success">Search</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form>

                        </Nav.Item>
                    </Nav>

                    <Nav className="mr-sm-2">
                        <Nav.Item>
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle}>
                                    <Button style={{ borderRadius: "50%" }} variant="outline-secondary">
                                        <span className="far fa-user"></span>
                                    </Button>

                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                    alignRight
                                    id="dropdown-menu-align-right"
                                >
                                    {/* <Dropdown.Item eventKey="1">
                                            asdfdsasdf
                                    </Dropdown.Item> */}
                                    <Nav className="flex-column">
                                        <Nav.Link href="#">
                                            <span className="fas fa-sign-out-alt"></span>
                                            <span>Logout</span>
                                        </Nav.Link>
                                    </Nav>
                                </Dropdown.Menu>
                            </Dropdown>

                        </Nav.Item>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

class CustomToggle extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.onClick(e);
    }

    render() {
        return (
            <a href="" onClick={this.handleClick}>
                {this.props.children}
            </a>
        );
    }
}