import React, {useCallback} from 'react';
import {Form, Segment, Button, Label, Divider} from 'semantic-ui-react';
import { Field, reduxForm} from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import { useDispatch } from 'react-redux';
import { registerUser} from '../authActions';
import { isRequired, combineValidators } from 'revalidate';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useFirebase, useFirestore } from 'react-redux-firebase';



const validate = combineValidators({
    displayName: isRequired('displayName'),
    email: isRequired('email'),
    password: isRequired('password')
})

const RegisterForm = ({handleSubmit, error, invalid, submitting}) => {
    const dispatch = useDispatch();
    const firebase = useFirebase();
    const firestore = useFirestore();

    const handleRegister = useCallback(
        (user) => {
            dispatch(registerUser({firebase, firestore}, user))
        }, [dispatch, firebase, firestore]
    );

    return (
        <div>
            <Form size="large" autoComplete="new-password" onSubmit={handleSubmit(handleRegister)}>
                <Segment>
                    <Field name="displayName" type="text" component={TextInput} placeholder="Known As" autoComplete="new-password" />
                    <Field name="email" type="text" component={TextInput} placeholder="Email" autoComplete="new-password" />
                    <Field name="password" type="password" component={TextInput} placeholder="Password" autoComplete="new-password" />
                    {error && <Label basic color='red'>{error}</Label>}
                    <Button disabled={invalid || submitting} fluid size="large" color="teal">
                        Register
                    </Button>
                    <Divider>
                        Or
                    </Divider>
                    <SocialLogin />
                </Segment>
            </Form>
        </div>
    )
};

export default reduxForm({form: 'registerForm',validate})(RegisterForm);
