import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import BlogList from '../BlogList/BlogList';
import {connect} from 'react-redux';
import {createBlog, updateBlog, deleteBlog} from "../blogActions";


const mapStateToProps = (state) => ({
    blogs: state.blogs
})

const mapDispatchToProps = {
    createBlog,
    updateBlog,
    deleteBlog
}

class BlogDashboard extends Component {
   

    handleCreateBlog = (newBlog) => {
        newBlog.id = '123456';
        newBlog.postPhotoURL = '/assets/user.png';
        this.props.createBlog(newBlog);
       
    };
    
    handleUpdateBlog = (updateBlog) => {
        this.props.updateBlog(updateBlog);
    }

    handleDeleteBlog = (id) => {
        this.props.deleteBlog(id);
    }


    render() {
        
        const {blogs} = this.props;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <BlogList 
                        blogs={blogs} 
                        deleteBlog={this.handleDeleteBlog} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <h2>Activity Feed</h2>
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogDashboard);