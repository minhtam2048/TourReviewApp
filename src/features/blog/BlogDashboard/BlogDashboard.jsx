import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import BlogList from '../BlogList/BlogList';
import BlogForm from '../BlogForm/BlogForm';
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
    state = {
        isOpen: false,
        selectedEvent: null
    };



    // handleIsOpenToggle = () => {
    //     this.setState(({isOpen}) => ({
    //         isOpen: !isOpen,
    //     }))
    // }

    handleCreateFormOpen = () => {
        this.setState({
            isOpen: true,
            selectedEvent: null
        })
    }

    handleFormCancel = () => {
        this.setState({
            isOpen: false
        });
    };

    handleCreateBlog = (newBlog) => {
        newBlog.id = 'asdasdas';
        newBlog.postPhotoURL = '/assets/user.png';
        this.props.createBlog(newBlog);
        this.setState(({blogs}) => ({
            isOpen: false
        }));
    };
    
    handleSelectBlog = (blog) => {
        console.log(blog);
        this.setState({
            selectedBlog: blog,
            isOpen: true
        });
    };

    handleUpdateBlog = (updateBlog) => {
        this.props.updateBlog(updateBlog);
        this.setState(({blogs}) => ({
            isOpen: false,
            selectedBlog: null,
        }));
    }

    handleDeleteBlog = (id) => {
        this.props.deleteBlog(id);
    }


    render() {
        const { isOpen, selectedBlog } = this.state;
        const {blogs} = this.props;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <BlogList 
                        blogs={blogs} 
                        selectBlog={this.handleSelectBlog} 
                        deleteBlog={this.handleDeleteBlog} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button 
                        onClick={this.handleCreateFormOpen} 
                        positive content='Create Post' />
                    {isOpen && (
                        <BlogForm 
                            key={selectedBlog ? selectedBlog.id : 0}
                            updateBlog = {this.handleUpdateBlog}
                            selectedBlog={selectedBlog}
                            createBlog={this.handleCreateBlog} 
                            cancelFormOpen={this.handleFormCancel} />)}
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogDashboard);