import React, { useMemo } from 'react';
import { useFirebase, useFirestoreConnect } from 'react-redux-firebase';

const UserDetailedPage = ({match: {params}}) => {
    const firebase = useFirebase();
    const isCurrentUser = firebase.auth().currentUser.uid === params.id;

    console.log(isCurrentUser);  

    const getUserProfile= useMemo(() => ({
       collection: 'users',
       doc: params.id,
       storeAs: 'userProfile'
    }), [params.id]);

    console.log(getUserProfile);

useFirestoreConnect(getUserProfile); //get datas from here

return (
    <div></div>
);
};
export default UserDetailedPage;  
