import React, {Component} from "react";

class MyData extends Component {
    render() {
        return (
            <this.props.withContainer>{this.props.children}</this.props.withContainer>
        );
    }
}

export {MyData};