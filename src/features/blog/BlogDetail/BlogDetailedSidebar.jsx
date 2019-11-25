import React, { Fragment } from 'react';
import { Segment, Item, Label, List, Image } from 'semantic-ui-react';
import { relative } from 'path'

const BlogDetailedSidebar = ({commentors}) => {
    const isHost = false;

    return (
        <Fragment>
            <Segment textAlign='center' style={{border: 'none'}} 
            attached='top' secondary inverted color='teal' >
                {commentors && commentors.length} {commentors && commentors.length === 1 ? 'Person': 'People'} liked this post
            </Segment>
            
            <Segment attached>
                <List relaxed divided>
                    {commentors && commentors.map((commentor) =>(
                        <Item key={commentor.id} style={{position: relative}}>
                            {isHost &&
                            <Label style={{position: 'absolute'}} color='orange' ribbon='right'>
                                Posted By
                            </Label>}
                            <Image circular size="tiny"  src={commentor.photoURL} alt=''/>
                            <Item.Content verticalAlign="middle" >
                                <Item.Header as="h3" >{commentor.name}</Item.Header>
                            </Item.Content> 
                        </Item>
                    ))}
                    
                </List>
            </Segment>
        </Fragment>
    )
}

export default BlogDetailedSidebar;
