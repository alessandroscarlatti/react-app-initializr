import React from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import { Typeahead } from 'react-bootstrap-typeahead'

const navbarComponent = (props) => {

    let suggestions = [];

    // add all activities to suggestions
    props.activities.forEach(activity => {
        suggestions.push(activity.prettyName);
    });

    return (
        <Nav.Item key="navbarSearch">
            <Form inline>
                <InputGroup>
                    <Typeahead
                        options={suggestions}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-success">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>

        </Nav.Item>
    )
};

const activityComponent = (props) => (
    <div>
        <p>Search</p>
        <div>
            <textarea defaultValue={JSON.stringify(props.activities, 0, 2)} />
        </div>
    </div>
);

export default {
    id: "search",
    prettyName: "Search",
    route: "/search",
    activityComponent: activityComponent,
    navbarComponent: navbarComponent
}