import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

class BlogListCommentor extends Component {
    render() {
        const {commentor} = this.props;
        return (
            <List.Item>
                <Image as='a' size='mini' circular src={commentor.photoURL} />
            </List.Item>
        )
    }
}

export default BlogListCommentor;
