import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';
 
const AnyReactComponent = () => <Icon name='marker' size='big' color='red'/>
class SimpleMap extends Component {
  static defaultProps = { 
    zoom: 11
  };
 
  render() {
    const {latlng} = this.props;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: 'AIzaSyDWZ0dsvKToNgih9-0S5u4SPfTSGDKvPVk' }}
          bootstrapURLKeys={{key: 'AIzaSyC58Pa1xnAA7rcKkgAcwX28G0-gyWLpryU'}}
          defaultCenter={latlng}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={latlng.lat}
            lng={latlng.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;