import React from 'react';
import { Grid } from 'semantic-ui-react';
import BlogDetailedHeader from './BlogDetailedHeader';
import BlogDetailedInfo from './BlogDetailedInfo';
import BlogDetailedChat from './BlogDetailedChat';
import BlogDetailedSidebar from './BlogDetailedSidebar';
import {useSelector} from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { objectToArray } from '../../../app/common/util/helpers';
import LoadingComponent from '../../../app/layout/LoadingComponent';


// const mapStateToProps = (state, ownProps) => {
//     const blogId = ownProps.match.params.id;

//     let blog = {};

//    if ( state.firestore.ordered.blogs && state.firestore.ordered.blogs.length > 0 ) {
//        blog = state.firestore.ordered.blogs.filter(blog => blog.id === blogId)[0] || {};
//    }

//     return {
//         blog
//     }
// }



const BlogDetailedPage = ({match: {params}}) => {
    useFirestoreConnect(`blogs/${params.id}`);

    const blog = useSelector(state => (state.firestore.ordered.blogs && 
                            state.firestore.ordered.blogs.filter(e => e.id === params.id)[0]) || {}, []);
    
    const auth = useSelector(state => state.firebase.auth, []);
    
    const likers = blog && blog.likers && objectToArray(blog.likers).sort((a, b) => {
        return a.joinDate.toDate() - b.joinDate.toDate();
    });
    const isPoster = blog && blog.posterUid === auth.uid;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    const loadingBlog = useSelector(state => state.firestore.status.requesting[`blogs/${params.id}`], []);
    
    if(loadingBlog) return <LoadingComponent />

    return (
        
        <Grid>
            <Grid.Column width={10}>
                <BlogDetailedHeader blog ={blog} isPoster={isPoster} authenticated={authenticated}/>
                <BlogDetailedInfo blog={blog}/>
                {authenticated &&
                 <BlogDetailedChat blogId={blog.id} /> }
            </Grid.Column>
            <Grid.Column width={6}>
                <BlogDetailedSidebar likers={likers} />
            </Grid.Column>
        </Grid>
    )
}

export default BlogDetailedPage;
