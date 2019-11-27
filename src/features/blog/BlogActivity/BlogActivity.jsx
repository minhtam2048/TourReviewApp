import React, {Fragment} from 'react';
import { Header, Segment } from 'semantic-ui-react';

const BlogActivity = () => {
    return (
        <Fragment>
            <Header attached='top'content='Recent Activity' />
            <Segment attached>
                <p>Recent Activity</p>
            </Segment>
        </Fragment>
    )
}

export default BlogActivity;