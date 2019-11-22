import React, { Component } from 'react';
import {connect} from 'react-redux';
import { incrementCounter, decrementCounter } from './TestAction';
import { Button } from 'semantic-ui-react';

const mapStateToProps = (state) => ({
    data: state.test.data
});

const mapDisPatchToProps = {
    incrementCounter,
    decrementCounter
}

class TestComponent extends Component {
    render() {
        const {data, incrementCounter, decrementCounter} = this.props;
        return (
            <div>
                <h1>Test</h1> 
                <h1>The answer: {data} </h1>
                <Button onClick={incrementCounter} positive content='Increment'/>
                <Button onClick={decrementCounter} negative content='Decrement'/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(TestComponent);
