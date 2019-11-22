import React, { Component, Fragment } from 'react'
import BlogListItem from './BlogListItem'

class BlogList extends Component {
    render() {
        const {blogs, selectBlog, deleteBlog } = this.props;
        return (
            <Fragment>
                {blogs.map(blog => (
                    <BlogListItem 
                        key={blog.id} 
                        blog={blog} 
                        selectBlog={selectBlog} 
                        deleteBlog={deleteBlog} />
                ))}
            </Fragment>
        )
    }
}

export default BlogList