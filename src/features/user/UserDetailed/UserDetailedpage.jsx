import React, { useMemo, useEffect, useState, useCallback } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useFirebase, useFirestoreConnect } from 'react-redux-firebase';
import {getUserBlogs} from '../UserActions';
import { Grid } from 'semantic-ui-react';
import  UserDetailedHeader  from './UserDetailedHeader';
import  UserDetailedDescription  from './UserDetailedDescription';
import  UserDetailedSidebar  from './UserDetailedSidebar';
import  UserDetailedPhotos  from './UserDetailedPhotos';
import UserDetailedBlogs from './UserDetailedBlogs';



const UserDetailedPage = ({match: {params}}) => {
    const dispatch = useDispatch();
    const firebase = useFirebase();
    const isCurrentUser = firebase.auth().currentUser.uid === params.id;
    
    console.log(isCurrentUser);

    const userProfileQuery = useMemo(() => ({
        collection: 'users',
        doc: params.id,
        storeAs: 'userProfile'
    }));
    
    console.log(userProfileQuery);

    // const userPhotosQuery = useMemo(() => ({
    //     collection: 'users',
    //     doc: params.id,
    //     subcollections: [{collection: 'photos'}],
    //     storeAs: 'photos'
    // }), [params.id]);
    
    // console.log(userPhotosQuery);

    useFirestoreConnect(userProfileQuery);
    // useFirestoreConnect(userPhotosQuery);

    const profile = useSelector(state => (state.firestore.ordered.userProfile && state.firestore.ordered.userProfile[0]) || {});
    const photos = useSelector(state => state.firestore.ordered.photos );
    const userBlogs = useSelector(state => state.user.blogs) || [];
    const loading = useSelector(state => state.async.loading);

    // useEffect(() => {
    //     dispatch(getUserBlogs(params.id));
    // }, [dispatch, params.id]);

    const handleChangeTab = async (e, data) => {
        dispatch(getUserBlogs(params.id, data.activeIndex));
    };

    return (
        // <Grid>
        //     <UserDetailedHeader profile={profile} />
        //     <UserDetailedDescription profile={profile} />
        //     <UserDetailedSidebar isCurrentUser={isCurrentUser} />
        //     { photos && photos.length > 0 && 
        //     <UserDetailedPhotos photos={photos} />}
        //     <UserDetailedBlogs changeTab={handleChangeTab} blogs={userBlogs} loading={loading} />
        // </Grid>
        <Grid></Grid>
        
    );
};

export default UserDetailedPage;