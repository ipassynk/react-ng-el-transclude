import React, {Component} from "react";

class Well extends Component {
    render() {
        return (
            <div className="well">
                <h1>my well container</h1>
                {this.props.children}
            </div>
        );
    }
}

export {Well};