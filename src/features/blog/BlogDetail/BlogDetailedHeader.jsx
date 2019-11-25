import React from 'react'
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react'

const blogImageStyle = {
    filter: 'brightness(80%)'
};

const blogImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const BlogDetailedHeader = ({blog}) => {
    
    return (    
        <Segment.Group>
            <Segment basic attached="top" style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/HoiAn2.jpeg`} fluid style={blogImageStyle} />
                <Segment basic style={blogImageTextStyle}>
                    <Item.Group>
                       <Item>
                           <Item.Content>
                                <Header side="huge" content={blog.title} style={{color: 'white'}} />
                                <p>{blog.date}</p>
                                <p>Posted by <strong>{blog.postedBy}</strong></p>
                           </Item.Content>
                       </Item>
                    </Item.Group>
                </Segment>
            </Segment>

            <Segment attached="bottom">
                <Button>Cancel</Button>
                <Button color='teal' >Like</Button>
                <Button color='orange' floated="right">Manage Blog</Button>
            </Segment>

        </Segment.Group>
    )
}

export default BlogDetailedHeader;
    