import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';
 
const AnyReactComponent = () => <Icon name='marker' size='big' color='red'/>
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: 'AIzaSyDWZ0dsvKToNgih9-0S5u4SPfTSGDKvPVk' }}
          bootstrapURLKeys={{key: 'AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={77.777777}
            lng={30.337844}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;