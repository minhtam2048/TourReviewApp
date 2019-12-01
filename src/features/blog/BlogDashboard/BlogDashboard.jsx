import React, { Component, useState, useEffect } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import BlogList from '../BlogList/BlogList';
import {useDispatch, useSelector} from 'react-redux';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import BlogActivity from '../BlogActivity/BlogActivity';
import { useFirestore } from 'react-redux-firebase';
import { objectToArray } from '../../../app/common/util/helpers';
import {getPagedBlogs} from '../blogActions';


const BlogDashboard = () => {
    const dispatch = useDispatch();
    const firestore = useFirestore();
    const [loadingInitial, setLoadingInitial] = useState(true);

    const blogs = useSelector(state => objectToArray(state.firestore.data.blogs) || []);
    const moreBlogs = useSelector(state => state.blogs.moreBlogs);
    const loading = useSelector(state => state.async.loading);
    
    useEffect(() => {

        const getBlogs = async () => {
            await dispatch(getPagedBlogs({firestore}));
        };

        if(getBlogs.length === 0) {
            getBlogs().then(() => {
                setLoadingInitial(false);
            })
        } else {
            setLoadingInitial(false);
        }
    }, [dispatch, firestore, blogs]);

    const handleGetNextBlogs = async () => {
        await dispatch(getPagedBlogs({firestore}));
    };

    if(loadingInitial) return <LoadingComponent />;
    return (
        <Grid>
            <Grid.Column width={10}>
                <BlogList 
                    blogs={blogs} loading={loading} moreBlogs ={moreBlogs} getNextBlogs={handleGetNextBlogs}
                    deleteBlog={this.handleDeleteBlog} />
            </Grid.Column>
            <Grid.Column width={6}>
                <BlogActivity />
            </Grid.Column>
            <Grid.Column width={10}>
                <Loader active={loading} />
            </Grid.Column>
        </Grid>
    ); 
};

export default BlogDashboard;