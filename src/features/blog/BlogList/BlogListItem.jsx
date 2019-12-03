import React from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import BlogListLiker from './BlogListLiker';
import {Link} from'react-router-dom';
import { format } from 'date-fns';
import { objectToArray } from '../../../app/common/util/helpers';

const BlogListItem = ({blog}) => 
    <Segment.Group>
        <Segment>
            <Item.Group>
                <Item>
                    <Item.Image size="tiny" circular src={blog.postPhotoURL}/>
                    <Item.Content>
                        <Item.Header as={Link} to={`blogs/${blog.id}`}>{blog.title}</Item.Header>
                        <Item.Description>
                            Posted By <Link to={`/profile/${blog.posterUid}`}>{blog.postedBy}</Link>
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
                <Icon name="clock" />
                {format( blog.date && blog.date.toDate(), 'EEEE do LLLL')}
                |
                <Icon name = 'marker' />{blog.address}
                <Button 
                as='a' color='red' floated='right' content='Delete'/>
                <Button as={Link} to={`/blogs/${blog.id}`}
                color='teal' floated='right' content='View'/>
            </span>                        
        </Segment>
        <Segment secondary>
            <List horizontal>
                {blog.likers && 
                objectToArray(blog.likers).map(liker => (
                    <BlogListLiker key={liker.id} liker={liker} />
                ))}
            </List>
        </Segment>
    </Segment.Group>
 

export default BlogListItem;