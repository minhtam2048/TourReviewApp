import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import BlogList from '../BlogList/BlogList';
import BlogForm from '../BlogForm/BlogForm';
import { cuid } from 'cuid';

const blogsFromDashBoard = [
    {
        id: '1',
        title: 'Trip to Genza - Tokyo',
        date: '2019-06-22',
        description: 'Lorem ipsum dolor sit amet, sapien elit. Quis vel duis hendrerit voluptate magna at, vivamus augue fusce dictumst nulla labore pharetra, vestibulum nam enim ipsum dolor integer dignissim, mi integer. Id dui sodales. Tincidunt neque orci nulla gravida risus donec, montes orci viverra nascetur in lorem vel.',
        city: 'Tokyo',
        address: 'Lorem ipsum dolor sit amet',
        postedBy: 'Tachibana',
        postPhotoURL: 'https://randomuser.me/api/portraits/women/22.jpg',
        commentors: [
            {
                id: 'a',
                name: 'Lynch',
                photoURL: 'https://randomuser.me/api/portraits/men/75.jpg',
                content: 'Thank you'
            },
            {
                id: 'b',
                name: 'Obama',
                photoURL: 'https://randomuser.me/api/portraits/women/18.jpg',
                content: 'Must visit this place!'
            },
            {
                id: 'c',
                name: 'Noma',
                photoURl: 'https://randomuser.me/api/protraits/women/37.jpg',
                content: 'wow, so beautiful!!'
            }

        ]
    },
    {
        id: '2',
        title: 'Shinee Turkey',
        date: '2019-06-22',
        description: 'Lorem ipsum dolor sit amet, sapien elit. Quis vel duis hendrerit voluptate magna at, vivamus augue fusce dictumst nulla labore pharetra, vestibulum nam enim ipsum dolor integer dignissim, mi integer. Id dui sodales. Tincidunt neque orci nulla gravida risus donec, montes orci viverra nascetur in lorem vel.',
        city: 'Tokyo',
        address: 'Lorem ipsum dolor sit amet',
        postedBy: 'Aoi',
        postPhotoURL: 'https://randomuser.me/api/portraits/women/40.jpg',
        commentors: [
            {
                id: 'a',
                name: 'Lynch',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
                content: 'Thank you'
            },
            {
                id: 'b',
                name: 'Obama',
                photoURL: 'https://randomuser.me/api/portraits/women/18.jpg',
                content: 'Must visit this place!'
            },
            {
                id: 'c',
                name: 'Noma',
                photoURl: 'https://randomuser.me/api/portraits/women/37.jpg',
                content: 'wow, so beautiful!!'
            }

        ]
    },
    {
        id: '3',
        title: 'Food in Vietname is so delicous and cheap !',
        date: '2019-06-22',
        description: 'Lorem ipsum dolor sit amet, sapien elit. Quis vel duis hendrerit voluptate magna at, vivamus augue fusce dictumst nulla labore pharetra, vestibulum nam enim ipsum dolor integer dignissim, mi integer. Id dui sodales. Tincidunt neque orci nulla gravida risus donec, montes orci viverra nascetur in lorem vel.',
        city: 'Tokyo',
        address: 'Lorem ipsum dolor sit amet',
        postedBy: 'Robin',
        postPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        commentors: [
            {
                id: 'a',
                name: 'Lynch',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
                content: 'Thanks for sharing'
            },
            {
                id: 'b',
                name: 'Obama',
                photoURL: 'https://randomuser.me/api/portraits/women/18.jpg',
                content: 'Must visit this place!'
            },
            {
                id: 'c',
                name: 'Noma',
                photoURl: 'https://randomuser.me/api/portraits/women/37.jpg',
                content: 'yummy~~'
            }
        ]
    }
]

class BlogDashboard extends Component {
    state = {
        blogs: blogsFromDashBoard,
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
        this.setState(({blogs}) => ({
            blogs: [...blogs, newBlog]
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
        this.setState(({blogs}) => ({
            blogs: blogs.map(blog => {
                if(blog.id === updateBlog.id) {
                    return {...updateBlog}
                } else {
                    return blog;
                }
            }),
            isOpen: false,
            selectedBlog: null
        }));
    }

    handleDeleteBlog = (id) => {
        this.setState(({blogs}) => ({
            blogs: blogs.filter(b => b.id !== id)
        }))
    }


    render() {
        const { blogs, isOpen, selectedBlog } = this.state;
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

export default BlogDashboard;