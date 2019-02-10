import React from 'react';
import loginActivity from './LoginActivity';
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'

export default class AuthenticatedActivity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authenticationState: "AUTHENTICATING"
        }

        // use authenticationManager as a prop

        this.onAuthenticated = this.onAuthenticated.bind(this);
        this.onNotAuthenticated = this.onNotAuthenticated.bind(this);
    }

    componentDidMount() {
        // only need to check the first time...
        this.props.authenticationManager.isAuthenticated(this.props.activity, this.onAuthenticated, this.onNotAuthenticated)
    }

    onAuthenticated() {
        this.setState({
            authenticationState: "AUTHENTICATED"
        })
    }

    onNotAuthenticated() {
        this.setState({
            authenticationState: "NOT_AUTHENTICATED"
        })
    }

    render() {
        switch (this.state.authenticationState) {
            case "AUTHENTICATING": return (
                // render a loader
                <Container>
                    <div className="text-secondary text-center">
                        <span className="fas fa-spinner mr-1" />
                        <span>Authenticating...</span>
                    </div>
                </Container>
            );
            case "AUTHENTICATED": return (
                // render the actual activity component
                this.props.children
            )
            case "NOT_AUTHENTICATED": {
                return (
                    // render a login activity that will render the original activity component once logged in?
                    <loginActivity.activityComponent onAuthenticationSuccess={this.onAuthenticated} />
                );
            }
        }
    }
}