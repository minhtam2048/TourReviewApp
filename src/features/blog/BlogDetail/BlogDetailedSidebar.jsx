import React, { Fragment } from 'react';
import { Segment, Item, Label, List, Image } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

const BlogDetailedSidebar = ({likers}) => {

    return (
        <Fragment>
            <Segment textAlign='center' style={{border: 'none'}} 
            attached='top' secondary inverted color='teal' >
                {likers && likers.length}{' '} {likers && likers.length === 1 ? 'Person': 'People'} liked this post
            </Segment>
            
            <Segment attached>
                <List relaxed divided>
                    
                    {likers && likers.map(liker =>(
                        <Item key={liker.id} style={{position: 'relative'}}>
                            {liker.poster && (
                            <Label style={{position: 'absolute'}} color='orange' ribbon='right'>
                                Poster
                            </Label>)}
                            <Image circular size="tiny"  src={liker.photoURL} alt=''/>
                            <Item.Content verticalAlign="middle" >
                                <Item.Header as={Link} to={`/profile/${liker.id}`} >{liker.displayName}</Item.Header>
                            </Item.Content> 
                        </Item>
                    ))}
                </List>
            </Segment>
        </Fragment>
    );
};

export default BlogDetailedSidebar;
