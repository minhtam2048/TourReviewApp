import React from 'react'
import { Grid, Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const UserDetailedSidebar = ({isCurrentUser}) => {
    return (
        <Grid.Column width={4}>
            <Segment>
                {isCurrentUser ?
                <Button
                    as={Link}
                    to='/settings'
                    color='teal'
                    fluid
                    basic
                    content='Edit Profile'
                /> :

                <Button
                    to='/settings'
                    color='teal'
                    fluid
                    basic
                    content='Follow User'
                />}
            </Segment>
        </Grid.Column>
    )
}

export default UserDetailedSidebar;
