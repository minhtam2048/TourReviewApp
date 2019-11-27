import React, { Fragment } from 'react';
import { Segment, Item, Label, List, Image } from 'semantic-ui-react';
import { relative } from 'path'
import { objectToArray } from '../../../app/common/util/helpers';

const BlogDetailedSidebar = ({likers}) => {
    const isHost = false;

    return (
        <Fragment>
            <Segment textAlign='center' style={{border: 'none'}} 
            attached='top' secondary inverted color='teal' >
                {likers && likers.length} {likers && likers.length === 1 ? 'Person': 'People'} liked this post
            </Segment>
            
            <Segment attached>
                <List relaxed divided>
                    {likers && objectToArray(likers).map(liker =>(
                        <Item key={liker.id} style={{position: relative}}>
                            {isHost &&
                            <Label style={{position: 'absolute'}} color='orange' ribbon='right'>
                                Posted By
                            </Label>}
                            <Image circular size="tiny"  src={liker.photoURL} alt=''/>
                            <Item.Content verticalAlign="middle" >
                                <Item.Header as="h3" >{liker.name}</Item.Header>
                            </Item.Content> 
                        </Item>
                    ))}
                    
                </List>
            </Segment>
        </Fragment>
    )
}

export default BlogDetailedSidebar;
