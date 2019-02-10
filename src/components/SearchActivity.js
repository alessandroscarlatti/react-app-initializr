import React from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Typeahead, Highlighter} from 'react-bootstrap-typeahead'
import { withRouter } from 'react-router-dom'

const navbarComponent = (props) => {

    let activities = [];

    // add all activities to suggestions
    props.activities.forEach(activity => {
        activities.push(activity);
    });

    // add icons if necessary
    activities.forEach(activity => {
        if (activity.iconComponent == null) {
            activity.iconComponent = defaultActivityIcon;
        }
    })

    let TypeaheadComponent = withRouter(({ history }) => (
        <Typeahead
            labelKey={(option) => option.prettyName}
            options={activities}
            onChange={(selectedActivity) => {
                // Handle selections...
                console.log("selected activity:", selectedActivity);
                history.push(selectedActivity[0].route)
            }}
            renderMenuItemChildren={activityOption}
        >
        </Typeahead>
    ))

    return (
        <Nav.Item key="navbarSearch">
            <Form inline className="mr-auto">
                <InputGroup>
                    <TypeaheadComponent />
                    <InputGroup.Append>
                        <Button variant="outline-success">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>

        </Nav.Item>
    )
};

const activityOption = (option, props, index) => {
    return (

        <Container fluid>
            <Row>
                <Col className="col-4" style={{ margin: "auto" }}>
                    <option.iconComponent />
                </Col>
                <Col className="col-8">
                    <Container fluid>
                        <Row>
                            <Highlighter key="name" search={props.text}>
                                {option.prettyName}
                            </Highlighter>
                        </Row>
                        <div className="row">
                            <small>Activity</small>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

const activityComponent = (props) => (
    <div>
        <p>Search</p>
        <div>
            <textarea defaultValue={JSON.stringify(props.activities, 0, 2)} />
        </div>
    </div>
);

const defaultActivityIcon = () => (
    <div className="fas fa-vector-square" />
)

const searchActivityIcon = () => (
    <div className="fas fa-search" />
)

export default {
    id: "search",
    prettyName: "Search",
    route: "/search",
    activityComponent: activityComponent,
    navbarComponent: navbarComponent,
    iconComponent: searchActivityIcon
}