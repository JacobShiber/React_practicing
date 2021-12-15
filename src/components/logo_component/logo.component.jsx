import React from 'react';


export default class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {header : "Welcome"};
    }

    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
            </div>
        )
    }
}