import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import BlogList from '../BlogList/BlogList';
import {connect} from 'react-redux';
import {createBlog, updateBlog, deleteBlog} from "../blogActions";
import LoadingComponent from '../../../app/layout/LoadingComponent';
import BlogActivity from '../BlogActivity/BlogActivity';
import { firestoreConnect } from 'react-redux-firebase';

const mapStateToProps = (state) => ({
    blogs: state.firestore.ordered.blogs,
    loading: state.async.loading
})

const mapDispatchToProps = {
    createBlog,
    updateBlog,
    deleteBlog
}

class BlogDashboard extends Component {

    handleDeleteBlog = (id) => {
        this.props.deleteBlog(id);
    }


    render() {  
        const {blogs, loading} = this.props;
        if(loading) return <LoadingComponent />
        return (
            <Grid>
                <Grid.Column width={10}>
                    <BlogList 
                        blogs={blogs} 
                        deleteBlog={this.handleDeleteBlog} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <BlogActivity />
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(firestoreConnect([{ collection: 'blogs' }])(BlogDashboard));