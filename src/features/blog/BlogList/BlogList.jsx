import React, { Component, Fragment } from 'react'
import BlogListItem from './BlogListItem'

class BlogList extends Component {
    render() {
        const {blogs, deleteBlog } = this.props;
        return (
            <Fragment>
                {blogs.map(blog => (
                    <BlogListItem 
                        key={blog.id} 
                        blog={blog} 
                        deleteBlog={deleteBlog} />
                ))}
            </Fragment>
        )
    }
}

export default BlogList