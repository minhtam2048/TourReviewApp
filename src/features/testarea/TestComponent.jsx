import React, { Component } from 'react';
import {connect} from 'react-redux';
import { incrementCounter, decrementCounter } from './TestAction';
import { Button } from 'semantic-ui-react';
import TestplaceInput from './TestPlaceInput';
import SimpleMap from './SimpleMap';

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
                <br/>
                <br/>
                <TestplaceInput />
                <SimpleMap />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(TestComponent);
