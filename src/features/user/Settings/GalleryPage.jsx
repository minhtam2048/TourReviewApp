import React, {useState, useEffect, useMemo, useCallback, Fragment} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Segment, Header, Divider, Grid, Button } from 'semantic-ui-react';
import {uploadProfileImage, deletePhoto, setMainPhoto} from '../UserActions';
import { useFirebase, useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { toastr } from 'react-redux-toastr';

import DropzoneInput from '../../../app/common/form/DropzoneInput';
import CropperInput from '../../../app/common/form/CropperInput';
import UserPhotos from './UserPhotos';

const GalleryPage = () => {
        
        const firebase = useFirebase();
        const firestore = useFirestore();
        const dispatch = useDispatch();
        
        const auth = useSelector(state => state.firebase.auth, []);

        console.log(auth);

        const userPhotosQuery = useMemo(() => ({
            collection: 'users',
            doc: auth.uid,
            subcollections: [{collection: 'photos'}],
            storeAs: 'photos'
        }), [auth.uid]);
        
        useFirestoreConnect(userPhotosQuery);
        
        //mapStateToProps
        const profile = useSelector(state => state.firebase.profile, []);
        const loading = useSelector(state => state.async.loading, []);
        const photos = useSelector(state => state.firestore.ordered.photos, []);
        

        //upload image from local device to web
        const [files, setFiles] = useState([]);
        const [image, setImage] = useState(null);
        const [cropResult, setCropResult] = useState('');

        useEffect(() => {
            return () => {
                files.forEach(file => URL.revokeObjectURL(file.preview));
                URL.revokeObjectURL(cropResult);
            };
        }, [files, cropResult]);
        
        const handleUploadImage = useCallback(
            async () => {
                try {
                    await dispatch(uploadProfileImage({firebase, firestore}, image));
                    handleCancelCrop();
                    toastr.success('Success', 'image has been uploaded');
                } catch (error) {
                    console.log(error);
                    toastr.error('Error', 'something has happened');
                }
            }, [dispatch, firebase, firestore, image]
        );

        const handleDeletePhoto = useCallback(
            async (photo) => {
                try {
                    await dispatch(deletePhoto({firebase, firestore}, photo));
                    toastr.success('Success', 'the photo has been deleted');
                } catch (error) {
                    console.log(error);
                    toastr.error('Error', error.message);
                }
            }, [dispatch, firebase, firestore]
        )

        const handleSetMainPhoto = useCallback(
            async (photo) => {
                try {
                    await dispatch(setMainPhoto({firebase, firestore}, photo));
                    toastr.success('Success', 'The main photo has been changed');
                } catch (error) {
                    console.log(error);
                    toastr.error('Error', error.message);
                } 
            }, [dispatch, firebase, firestore]
        )

        const handleCancelCrop = () => {
            setFiles([]);
            setImage(null);
            setCropResult('');
        };

        return (
            <Segment>
                <Header dividing size='large' content='Your Photos' />
                <Grid>
                    <Grid.Row />

                    <Grid.Column width={4}>
                        <Header color='teal' sub content='Step 1 - Add Photo'/>
                        <DropzoneInput setFiles={setFiles} />
                    </Grid.Column>

                    <Grid.Column width={1} />

                    <Grid.Column width={4}>
                        <Header sub color='teal' content='Step 2 - Resize image' />
                        {files.length > 0 && (
                        <CropperInput imagePreview={files[0].preview} setImage={setImage}  setCropResult={setCropResult} />)}
                    </Grid.Column>
                    <Grid.Column width={1} />

                    <Grid.Column width={4}>
                        <Header sub color='teal' content='Step 3 - Preview and Upload' />
                        {files.length > 0 && (
                            <Fragment>
                                <div className='img-preview' 
                                style={{minWidth: '200px', minHeight: '200px'}} />
                                <Button.Group>
                                    <Button loading={loading} onClick={handleUploadImage} style={{width: '100px'}} positive icon='check' />
                                    <Button disabled={loading} onClick={handleCancelCrop} style={{width: '100px'}} icon='close'/>
                                </Button.Group>
                            </Fragment>
                        )}
                    </Grid.Column>
                </Grid>

                <Divider/>
                <UserPhotos photos={photos} profile={profile} deletePhoto={handleDeletePhoto} loading={loading} setMainPhoto={handleSetMainPhoto} />
            </Segment>
        );
};

export default GalleryPage;