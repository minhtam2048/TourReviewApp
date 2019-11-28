import React, {useCallback} from 'react';
import { Form, Segment, Button, Label, Divider} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput  from '../../../app/common/form/TextInput';
import {login, socialLogin } from '../authActions';
// import {connect} from 'react-redux';
// import {isRequired, combineValidators} from 'revalidate';
import SocialLogin from '../SocialLogin/SocialLogin';
import {useDispatch} from 'react-redux';
import { useFirebase, useFirestore } from 'react-redux-firebase';

// const mapDispatchToProps = {
//     login,
//     socialLogin
// }

// const validate = combineValidators({
//     displayName: isRequired('displayName'),
//     email: isRequired('email'),
//     password: isRequired('password')
// })

const LoginForm = ({handleSubmit, error, invalid, submitting}) => {
    const dispatch = useDispatch();
    const firebase = useFirebase();
    const firestore = useFirestore();
    
    const handleLogin = useCallback(
        (user) => {
            return dispatch(login({firebase, firestore}, user))
        },
        [firebase, firestore, dispatch]
    );

    const handleSocialLogin = useCallback(
        (provider) => {
            return dispatch(socialLogin({firebase, firestore}, provider))
        },
        [firebase, firestore, dispatch]
    )

    return (
        <Form size='large' onSubmit={handleSubmit(handleLogin)} autoComplete='new-password'>
            <Segment>
                <Field name="email" component={TextInput} type="text" 
                       placeholder="Email Address" autoComplete="new-password" />
                <Field name="password" component={TextInput} type="password" 
                       placeholder="password" autoComplete="new-password" />
                { error && <Label basic color="red">{error}</Label>}       
                <Button disabled={ invalid || submitting } fluid size="large" color="teal">
                    Login
                </Button>
                <Divider horizontal>
                    Or login with another method
                </Divider>
                <SocialLogin socialLogin={handleSocialLogin} />
            </Segment>
        </Form>
    )
};

export default reduxForm({form: 'loginForm'})(LoginForm);
