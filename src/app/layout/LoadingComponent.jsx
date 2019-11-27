import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const LoadingComponent = ({inverted = true}) => {
    return (
        <Dimmer inverted={inverted} active={true}>
            <Loader content='loading...'/>
        </Dimmer>
    )
}

export default LoadingComponent;
