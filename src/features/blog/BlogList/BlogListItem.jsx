import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import BlogListCommentor from './BlogListCommentor';
import {Link} from'react-router-dom';

class BlogListItem extends Component {
    render() {
        const {blog, selectBlog, deleteBlog } = this.props;
        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={blog.postPhotoURL}/>
                            <Item.Content>
                                <Item.Header>{blog.title}</Item.Header>
                                <Item.Description>
                                    Posted By {blog.postedBy}
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                
                <Segment clearing>
                    <span>{blog.description}</span>
                </Segment>
                <Segment>
                    <span>
                        <Icon name="clock" /> {blog.date} |
                        <Icon name="marker"/> {blog.address}
                        <Button onClick={() => deleteBlog(blog.id)} 
                        as='a' color='red' floated='right' content='Delete'/>
                        <Button as={Link} to={`/blogs/${blog.id}`}
                         color='teal' floated='right' content='View'/>
                        
                    </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        {blog.commentors && blog.commentors.map(commentor => (
                            <BlogListCommentor key={commentor.id} commentor={commentor} />
                        ))}
                    </List>
                </Segment>
               
            </Segment.Group>
        )
    }
}

export default BlogListItem