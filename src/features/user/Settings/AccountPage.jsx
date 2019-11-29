import React, { useCallback } from 'react';
import { Segment, Header, Form, Divider, Label, Button, Icon } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import { combineValidators, matchesField, isRequired, composeValidators } from 'revalidate';
import { useFirebase } from 'react-redux-firebase';
import {useDispatch, useSelector} from 'react-redux';
import { updatePassword} from '../../auth/authActions';
import { Link } from 'react-router-dom';

const validate = combineValidators({
    newPassword1: isRequired({message: 'Please enter a password'}),
    newPassword2: composeValidators(
        isRequired({message: 'Please confirm you new password'}),
        matchesField('newPassword1')({message: 'Passwords do not match'})
    )()
})

const AccountPage = ({ error, invalid, submitting, handleSubmit  }) => {
    const dispatch = useDispatch();
    const firebase = useFirebase();
    const providerId = useSelector(state => state.firebase.auth.providerData[0].providerId);
    const handlePasswordChange = useCallback(
        (creds) => dispatch(updatePassword({firebase}, creds))
        , [firebase, dispatch]
    )

  return (
    <Segment>
        <Header dividing size="large" content="Account" />
        {providerId && providerId === 'password' &&
        <div>
            <Header color="teal" sub content="Change password" />
            <p>update your account settings</p>
            <Form onSubmit={handleSubmit(handlePasswordChange)}>
            <Field
                width={8}
                name="newPassword1"
                type="password"
                pointing="left"
                inline={true}
                component={TextInput}
                basic={true}
                placeholder="New Password"
            />
            <Field
                width={8}
                name="newPassword2"
                type="password"
                inline={true}
                basic={true}
                pointing="left"
                component={TextInput}
                placeholder="Confirm Password"
            />
            {error && (<Label basic color="red">{error}</Label>)}
            <Divider />
            <Button disabled={invalid || submitting} size="large" positive content="Update Password" />
            </Form>
        </div>}

       
        {providerId && providerId === 'facebook.com' &&
        <div>
            <Header color="teal" sub content="Facebook Account" />
            <p>Please visit Facebook to update your account settings</p>
            <Button type="button" color="facebook" as={Link} to="facebook.com">
            <Icon name="facebook"  />
            Go to Facebook
            </Button>
        </div>}

        {providerId && providerId ==='google.com' &&
        <div>
            <Header color="teal" sub content="Google Account" />
            <p>Please visit Google to update your account settings</p>
            <Button type="button" color="google plus">
            <Icon name="google plus" />
            Go to Google
            </Button>
        </div>}
    </Segment>
  );
};

export default reduxForm({ form: 'account', validate })(AccountPage);