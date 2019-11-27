import React from 'react';
import { Grid } from 'semantic-ui-react';
import BlogDetailedHeader from './BlogDetailedHeader';
import BlogDetailedInfo from './BlogDetailedInfo';
import BlogDetailedChat from './BlogDetailedChat';
import BlogDetailedSidebar from './BlogDetailedSidebar';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    const blogId = ownProps.match.params.id;

    let blog = {};

   if ( state.firestore.ordered.blogs && state.firestore.ordered.blogs.length > 0 ) {
       blog = state.firestore.ordered.blogs.filter(blog => blog.id === blogId)[0] || {};
   }

    return {
        blog
    }
}


const BlogDetailedPage = ({blog}) => {
    return (
        
        <Grid>
            <Grid.Column width={10}>
                <BlogDetailedHeader blog ={blog} />
                <BlogDetailedInfo blog={blog}/>
                <BlogDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <BlogDetailedSidebar likers={blog.likers} />
            </Grid.Column>
        </Grid>
    )
}

export default connect(mapStateToProps)(BlogDetailedPage);
