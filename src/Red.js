import React, {Component} from "react";

class Red extends Component {
    render() {
        return (
            <div className="red">
                <h1>my red container</h1>
                {this.props.children}
            </div>
        );
    }
}

export {Red};