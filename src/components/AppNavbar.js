import React from 'react';
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
import ActivityNavbarComponent from './ActivityNavbarComponent';

export default class AppNavbar extends React.Component {
    render() {
        // has a list of props for all the pages...
        let leftNavbarComponents = [];
        let rightNavbarComponents = [];

        if (this.props.activities != null) {
            this.props.activities.forEach(activity => {
                if (activity.navbarComponent != null) {
                    let navbarComponent = (
                        <Nav.Item key={activity.id}>
                            <activity.navbarComponent activities={this.props.activities} />
                        </Nav.Item>
                    )

                    if (activity.navbarPosition === "RIGHT") {
                        rightNavbarComponents.push(navbarComponent);                        
                    } else {
                        // "LEFT" is the default position
                        leftNavbarComponents.push(navbarComponent);
                    }
                }
            });
        }

        // if (this.props.navbarComponents != null)
        //     navbarComponents = this.props.navbarComponents;

        // let navbarLinks = [...navbarComponents]

        return (
            <Navbar>
                <Navbar.Brand href="#/">App</Navbar.Brand>
                <Navbar.Brand>local</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* left-aligned nav */}
                    <Nav className="mr-auto">
                        {leftNavbarComponents}
                    </Nav>

                    {/* right-aligned nav */}
                    <Nav className="mr-sm-2">
                        {rightNavbarComponents}
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}