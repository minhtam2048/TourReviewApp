import React from 'react';
import {Form, Segment, Button, Label} from 'semantic-ui-react';
import { Field, reduxForm} from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import { connect } from 'react-redux';
import { registerUser} from '../authActions';

const mapDispatchToProps = {
    registerUser
}

const RegisterForm = ({handleSubmit, registerUser, error}) => {
    return (
        <div>
            <Form size="large" autoComplete="new-password" onSubmit={handleSubmit(registerUser)}>
                <Segment>
                    <Field name="displayName" type="text" component={TextInput} placeholder="Known As" autoComplete="new-password" />
                    <Field name="email" type="text" component={TextInput} placeholder="Email" autoComplete="new-password" />
                    <Field name="password" type="password" component={TextInput} placeholder="Password" autoComplete="new-password" />
                    <Label>{error}</Label>
                    <Button fluid size="large" color="teal">
                        Register
                    </Button>
                </Segment>
            </Form>
        </div>
    )
};

export default connect(null, mapDispatchToProps)(reduxForm({form: 'registerForm'})(RegisterForm));
