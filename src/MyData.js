import React, {Component} from "react";

let Container = (props) => <props.withContainer><MyData/></props.withContainer>

class MyData extends Component {
    render() {
        return (
            <div>
                {this.props.withContainer ? <Container {...this.props}/> : <div>My Data is here</div>}
            </div>
        );
    }
}

export {MyData};