import React, {Component} from "react";

class MyData extends Component {
    render() {
        if (this.props.withContainer) {
            let el = React.createElement(this.props.withContainer, null, <MyData/>);
            return (el);
        }
        else {
            return (<div>My Data is here</div>);
        }
    }
}

export {MyData};