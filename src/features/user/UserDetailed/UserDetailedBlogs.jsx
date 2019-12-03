import React from 'react';
import { Grid, Segment, Header, Tab, Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const panes = [
    {menuItem: 'All Blogs', panse: {key: 'allBlogs'}},
    {menuItem: 'Posted', panse: {key: 'posted'}}
];


const UserDetailedBlogs = ({changeTab, blogs, loading}) => {
    return (
        <Grid.Column width={12}>
        <Segment attached loading={loading}>
            <Header icon="calendar" content="Blogs" />
            <Tab onTabChange={(e, data) => changeTab(e, data)} panes={panes} menu={{secondary: true, pointing: true}}/>
        <br/>

            <Card.Group itemsPerRow={5}>
                {blogs &&
                blogs.map(blog => (
                    <Card as={Link} to={`/blogs/${blog.id}`} key={blog.id}>
                        <Image src={`/assets/categoryImages/${blog.category}.jpg`} />
                        <Card.Content>
                            <Card.Header textAlign='center'>{blog.title}</Card.Header>
                            <Card.Meta textAlign='center'>
                                <div>{format(blog.date && blog.date.toDate(), 'dd LLL yyyy')}</div>
                                <div>{format(blog.date && blog.date.toDate(), 'h:mm a')}</div>
                            </Card.Meta>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
            </Segment>
        </Grid.Column>
    )
}
export default UserDetailedBlogs;