import React from 'react';

export default class ActivityNavbarComponent extends React.Component {
    render() {

        let actualNavbarComponent = <div></div>

        if (this.props.children.length > 0) {
            actualNavbarComponent = this.props.children[0];
        }

        return (
            actualNavbarComponent
        )
    }
}