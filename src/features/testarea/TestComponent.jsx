import React, { Component } from 'react';
import {connect} from 'react-redux';
import { incrementCounter, decrementCounter, incrementAsync, decrementAsync } from './TestAction';
import { Button } from 'semantic-ui-react';
import TestplaceInput from './TestPlaceInput';
import SimpleMap from './SimpleMap';
import {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import { openModal } from '../modals/modalActions';

const mapStateToProps = (state) => ({
    data: state.test.data,
    loading: state.async.loading,
    buttonName: state.async.elementName
});

const mapDisPatchToProps = {
    incrementCounter,
    decrementCounter,
    openModal,
    incrementAsync,
    decrementAsync,
}

class TestComponent extends Component {

    state = {
        latlng: {
            lat: 59.93,
            lng: 30.33
        }
    };
     
    handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
              this.setState({
                  latlng: latLng
              })
          })
          .catch(error => console.error('Error', error));
    };

    render() {
        const {data, openModal, incrementAsync, decrementAsync, loading, buttonName} = this.props;
        return (
            <div>
                <h1>Test</h1> 
                <h1>The answer: {data} </h1>
                <Button name="increment" loading={buttonName === 'increment' && loading} onClick={(e) => incrementAsync(e.target.name)} positive content='Increment'/>
                <Button name="decrement" loading={buttonName === 'decrement' && loading} onClick={(e) => decrementAsync(e.target.name)} negative content='Decrement'/>
                <Button onClick={() => openModal('TestModal', {data: 42})} content='Open Modal' />
                <br/>
                <br/>
                <TestplaceInput selectedAddress={this.handleSelect} />
                <SimpleMap key={this.state.latlng.lng} latlng={this.state.latlng} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(TestComponent);
