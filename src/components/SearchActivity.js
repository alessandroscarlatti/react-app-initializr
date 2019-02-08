import React from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

const navbarComponent = () => (
    <Nav.Item key="navbarSearch">
        <Form inline>
            <InputGroup>
                <FormControl type="text" placeholder="Search" />
                <InputGroup.Append>
                    <Button variant="outline-success">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>

    </Nav.Item>
);

const activityComponent = () => (
    <div>Search</div>
);

export default {
    id: "search",
    prettyName: "Search",
    route: "/search",
    activityComponent: activityComponent(),
    navbarComponent: navbarComponent()
}