import React, {useState} from 'react'
import { Segment, Grid, Icon, Button } from 'semantic-ui-react'
import BlogDetailedMap from './BlogDetailedMap'
import { format } from 'date-fns'

const BlogDetailedInfo = ({blog}) => {
    const [isMapOpen, showMapToggle] = useState(false)

    return (
        <Segment.Group>
            <Segment attached="top">
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size="large" color="teal" name="info" />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{blog.description}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon name="calendar" size="large" color="teal" />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        {/* <span>{blog.date}</span> */}
                        <span>
                            {format(blog.date.toDate(), 'EEEE do LLLL')}
                        </span>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon name="marker" size="large" color="teal"/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{blog.address}</span>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button onClick={() => showMapToggle(!isMapOpen)} color="teal" size="tiny" content={(!isMapOpen)? "Show Map" : "Hide Map"} />
                    </Grid.Column>
                </Grid>
            </Segment>
            {isMapOpen &&
            <BlogDetailedMap lat={blog.addressLatLng.lat} lng={blog.addressLatLng.lng}/> }
        </Segment.Group>
    )
}

export default BlogDetailedInfo
