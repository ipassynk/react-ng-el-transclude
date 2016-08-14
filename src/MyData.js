import React, {Component} from "react";

class MyData extends Component {
    render() {
        if (this.props.withContainer) {
            return (
                <this.props.withContainer>
                    <MyData/>
                </this.props.withContainer>
            );
        }
        else {
            return (<div>My Data is here</div>);
        }
    }
}

export {MyData};