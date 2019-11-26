import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

const Marker = () => <Icon name='marker' size='big' color='red' />

const BlogDetailedMap = ({lat, lng}) => {
    const zoom = 14; 
    return (
        <Segment attached='bottom' style={{padding: 0}}>
            <div style={{height: '300px', width: '100%'}}>
                <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyC58Pa1xnAA7rcKkgAcwX28G0-gyWLpryU'}}
                defaultCenter={{lat, lng}}
                defaultZoom={zoom}>
                    <Marker 
                    lat={lat}
                    lng={lng} 
                    />
                </GoogleMapReact>
            </div>
        </Segment>
    )
}

export default BlogDetailedMap
