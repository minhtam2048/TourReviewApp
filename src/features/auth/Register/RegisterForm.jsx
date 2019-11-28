import React from 'react';
import {Form, Segment, Button, Label} from 'semantic-ui-react';
import { Field, reduxForm} from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import { connect } from 'react-redux';
import { registerUser} from '../authActions';
import { isRequired, combineValidators } from 'revalidate';
const mapDispatchToProps = {
    registerUser
}

const validate = combineValidators({
    displayName: isRequired('displayName'),
    email: isRequired('email'),
    password: isRequired('password')
})

const RegisterForm = ({handleSubmit, registerUser, error, invalid, submitting}) => {
    return (
        <div>
            <Form size="large" autoComplete="new-password" onSubmit={handleSubmit(registerUser)}>
                <Segment>
                    <Field name="displayName" type="text" component={TextInput} placeholder="Known As" autoComplete="new-password" />
                    <Field name="email" type="text" component={TextInput} placeholder="Email" autoComplete="new-password" />
                    <Field name="password" type="password" component={TextInput} placeholder="Password" autoComplete="new-password" />
                    {error && <Label basic color='red'>{error}</Label>}
                    <Button disabled={invalid || submitting} fluid size="large" color="teal">
                        Register
                    </Button>
                </Segment>
            </Form>
        </div>
    )
};

export default connect(null, mapDispatchToProps)(reduxForm({form: 'registerForm',validate})(RegisterForm));
