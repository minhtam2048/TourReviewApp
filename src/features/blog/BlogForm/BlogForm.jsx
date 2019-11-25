import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {createBlog, updateBlog} from '../blogActions';
import cuid from 'cuid';

const mapStateToProps = (state, ownProps) => {
    const blogId = ownProps.match.params.id;

    let blog = {
        title: '',
        date: '',
        city: '',
        address: '',
        description: '',
        postedBy: ''
    }

    if (blogId && state.blogs.length > 0) {
        blog = state.blogs.filter(blog => blog.id === blogId)[0];
    }

    return {
        blog
    }
}

const mapDispatchToProps = {
    createBlog,
    updateBlog
};

class BlogForm extends Component {

    state = {...this.props.blog};

    componentDidMount() {
        if (this.props.selectedBlog !== null) {
            this.setState({
                ...this.props.selectedBlog
            });
        };
    }

    handleFormSubmit = evt => {
        evt.preventDefault();
        if (this.state.id) {
            this.props.updateBlog(this.state);
            this.props.history.push(`/blogs/${this.state.id}`)
        } else {
            const newBlog = {
                ...this.state,
                id: cuid(),
                postPhotoURL: '/assets/user.png'
            }
            this.props.createBlog(newBlog);
            this.props.history.push(`/blogs`);
        }
    }

    
    handleInputChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        });
    };

    render() {
        const { title, date, city, address, postedBy, description } = this.state;
        return (
            <Segment>
                <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
                    <Form.Field>
                        <label> Post Title</label>
                        <input
                        name='title'
                        onChange={this.handleInputChange} 
                        value={title} 
                        placeholder="Post Title" />
                    </Form.Field>
                    <Form.Field>
                        <label> Trip Date</label>
                        <input
                         name='date'
                         onChange={this.handleInputChange} 
                         value={date}  
                        type="date" placeholder="Trip Date" />
                    </Form.Field>
                    <Form.Field>
                        <label> Description </label>
                        <input
                         name='description'
                         onChange={this.handleInputChange} 
                         value={description}
                         type='text'  
                        placeholder="The description" />
                    </Form.Field>
                    <Form.Field>
                        <label> City </label>
                        <input
                         name='city'
                         onChange={this.handleInputChange} 
                         value={city}  
                        placeholder="The place you took on vacation" />
                    </Form.Field>
                    <Form.Field>
                        <label> Address </label>
                        <input
                         name='address'
                         onChange={this.handleInputChange} 
                         value={address}  
                        placeholder="The address" />
                    </Form.Field>
                    
                    <Form.Field>
                        <label> Posted By</label>
                        <input
                         name='postedBy'
                         onChange={this.handleInputChange} 
                         value={postedBy}  
                        placeholder="the one who create this post" />
                    </Form.Field>
                    <Button positive type="submit">Submit</Button>
                    <Button onClick={this.props.history.goBack} type="button">Cancel</Button>
                </Form>
            </Segment>
        );
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm);
