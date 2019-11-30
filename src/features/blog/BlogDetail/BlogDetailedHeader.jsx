import React from 'react'
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { useFirebase, useFirestore } from 'react-redux-firebase';
import {useDispatch, useSelector} from 'react-redux';
import {openModal} from '../../modals/modalActions';

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

const BlogDetailedHeader = ({blog, authenticated}) => {
    const firestore = useFirestore();
    const firebase = useFirebase();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.async.loading, []);
    
    return (    
        <Segment.Group>
            <Segment basic attached="top" style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/HoiAn2.jpeg`} fluid style={blogImageStyle} />
                <Segment basic style={blogImageTextStyle}>
                    <Item.Group>
                       <Item>
                           <Item.Content>
                                <Header side="huge" content={blog.title} style={{color: 'white'}} />
                                <p>{format(blog.date && blog.date.toDate(), 'EEEE do LLLL')}</p>
                                <p>Posted By<strong><Link to={`/profile/${blog.posterUid}`}>{blog.postedBy}</Link></strong></p>
                           </Item.Content>
                       </Item>
                    </Item.Group>
                </Segment>
            </Segment>

            <Segment attached="bottom">
                <Button>Cancel</Button>
                <Button color='teal' >Like</Button>
                <Button as={Link} to={`/manage/${blog.id}`} color='orange' floated="right">Manage Blog</Button>
            </Segment>

        </Segment.Group>
    )
}

export default BlogDetailedHeader;
    