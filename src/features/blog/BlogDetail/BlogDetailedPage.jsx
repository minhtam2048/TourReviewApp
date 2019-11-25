import React from 'react';
import { Grid } from 'semantic-ui-react';
import BlogDetailedHeader from './BlogDetailedHeader';
import BlogDetailedInfo from './BlogDetailedInfo';
import BlogDetailedChat from './BlogDetailedChat';
import BlogDetailedSidebar from './BlogDetailedSidebar';

const blog = {
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
}

const BlogDetailedPage = () => {
    return (
        
        <Grid>
            <Grid.Column width={10}>
                <BlogDetailedHeader blog ={blog} />
                <BlogDetailedInfo blog={blog}/>
                <BlogDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <BlogDetailedSidebar commentors={blog.commentors} />
            </Grid.Column>
        </Grid>
    )
}

export default BlogDetailedPage;
