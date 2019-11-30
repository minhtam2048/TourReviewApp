import { toastr } from "react-redux-toastr";
import { SubmissionError } from 'redux-form';
import cuid from 'cuid';
import {asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';
import firebase from '../../app/config/firebase';
import {GET_USER_BLOGS} from './UserConstants';

export const updateProfile = ({firebase}, user) => {
    return async (dispatch) => {
        const {isLoaded, isEmpty, ...updatedUser} = user;
        try {
            await firebase.updateProfile(updatedUser);
            dispatch(() => toastr.success('Success', 'Your profile has been updated'));
        } catch (error) {
            console.log(error);
            throw new SubmissionError({
                _error: error.message
            });
        }; 
    };
}


export const uploadProfileImage = ({firebase, firestore}, file) => 
    async (dispatch) => {
        const imageName = cuid();
        const user = firebase.auth().currentUser;
        const path = `${user.uid}/user_images`;
        const options = { name: imageName };

        try {

            dispatch(asyncActionStart());

            let uploadedFile = await firebase.uploadFile(path, file, null, options );
    
            let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
    
            let userDocument = await firestore.get(`users/${user.uid}`);
            
            if(!userDocument.data().photoURL) {
                await firebase.updateProfile({
                    photoURL: downloadURL
                });
                await user.updateProfile({
                    photoURL: downloadURL
                });
            }
    
            await firestore.add({
                collection: 'users',
                doc: user.uid,
                subcollections: [{collection: 'photos'}]
            }, {
                name: imageName,
                url: downloadURL
            });

            dispatch(asyncActionFinish());
        } catch (error) {
            console.log(error)
            dispatch(asyncActionError());
        }
    };

export const deletePhoto = ({firebase, firestore}, photo) =>
    async (dispatch) => {
        const user = firebase.auth().currentUser;

        try {
            await firebase.deleteFile(`${user.uid}/user_images/${photo.name}`);
            await firestore.delete({
                collection: 'users',
                doc: user.uid,
                subcollections: [{collection: 'photos', doc: photo.id}]

            })
        } catch (error) {
            console.log(error);
            dispatch(asyncActionError());
        }
    }

export const setMainPhoto = ({firebase, firestore}, photo) =>
    async (dispatch) => {
        const user = firebase.auth().currentUser;
        const today = new Date();

        let userDocRef = firestore.collection('users').doc(user.uid);
        let blogLikerRef = firestore.collection('blog_liker');

        try {
            dispatch(asyncActionStart());
            let batch = firestore.batch();

            batch.update(userDocRef, {
                photoURL: photo.url
            });

            let blogQuery = await blogLikerRef.where('userUid', '==', user.uid).where('blogDate', '<=', today);

            let blogQuerySnap = await blogQuery.get();
            console.log(blogQuerySnap);

            for(let i=0; i<blogQuerySnap.docs.length; i++) {
                let blogDocRef = await firestore.collection('blogs').doc(blogQuerySnap.docs[i].data().blogId);
                let blog = await blogDocRef.get();
                if (blog.data().hostUid === user.uid) {
                    batch.update(blogDocRef, {
                        postPhotoURL: photo.url,
                        [`likers.${user.uid}.photoURL`]: photo.url
                    });
                } else {
                    batch.update(blogDocRef, {
                        [`blogs.${user.uid}.photoURL`]: photo.url
                    });
                }
            }
            console.log(batch);
            await batch.commit();
            dispatch(asyncActionFinish());

        } catch(error) {
            console.log(error);
            dispatch(asyncActionError());
            // throw new Error('Problem setting main photo');
        }
    }

    export const getUserBlogs = (userUid, activeTab) => async (
        dispatch,
        getState
    ) => {
        dispatch(asyncActionStart());
        const firestore = firebase.firestore();
        const today = new Date(Date.now());
        let blogsRef = firestore.collection('blog_liker');
        let query;
        switch (activeTab) {
            case 1: // past events
                query = blogsRef
                    .where('userUid', '==', userUid)
                    .where('blogDate', '<=', today)
                    .orderBy('blogDate', 'desc');
                break;
            case 2: // hosted events
                query = blogsRef
                    .where('userUid', '==', userUid)
                    .where('poster', '==', true)
                    .orderBy('blogDate', 'desc');
                break;
            default:
                query = blogsRef
                    .where('userUid', '==', userUid)
                    .orderBy('blogDate', 'desc');
                break;
        }
    
        try {
            let querySnap = await query.get();
            let blogs = [];
    
            for (let i = 0; i < querySnap.docs.length; i++) {
                let evt = await firestore
                    .collection('blogs')
                    .doc(querySnap.docs[i].data().blogId)
                    .get();
                blogs.push({ ...evt.data(), id: evt.id });
            }
    
            dispatch({ type: GET_USER_BLOGS, payload: { blogs } });
    
            dispatch(asyncActionFinish());
        } catch (error) {
            console.log(error);
            dispatch(asyncActionError());
        }
    };