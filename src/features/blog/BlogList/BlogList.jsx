import React, { Fragment } from 'react'
import BlogListItem from './BlogListItem'
import InfiniteScroll from 'react-infinite-scroller';

const BlogList = ({blogs, moreBlogs, getNextBlogs, loading}) => 
    <Fragment>
        {blogs && blogs.length !== 0 && 
            <InfiniteScroll pageStart={0} loadMore={getNextBlogs} hasMore={!loading && moreBlogs} initialLoad={false}>
                {blogs && blogs.map(blog => (
                    <BlogListItem key={blog.id} blog={blog} />
                ))}
            </InfiniteScroll>
        }
    </Fragment>

export default BlogList;