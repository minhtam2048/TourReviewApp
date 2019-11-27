import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

class BlogListLiker extends Component {
    render() {
        const {liker} = this.props;
        return (
            <List.Item>
                <Image as='a' size='mini' circular src={liker.photoURL} />
            </List.Item>
        )
    }
}

export default BlogListLiker;
