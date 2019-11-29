import { toastr } from "react-redux-toastr";
import { SubmissionError } from 'redux-form';

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

