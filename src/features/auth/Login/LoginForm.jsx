import React from 'react';
import { Form, Segment, Button, Label, Divider} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput  from '../../../app/common/form/TextInput';
import {login, socialLogin } from '../authActions';
import {connect} from 'react-redux';
import {isRequired, combineValidators} from 'revalidate';
import SocialLogin from '../SocialLogin/SocialLogin';

const mapDispatchToProps = {
    login,
    socialLogin
}

const validate = combineValidators({
    displayName: isRequired('displayName'),
    email: isRequired('email'),
    password: isRequired('password')
})

const LoginForm = ({login, handleSubmit, error, invalid, submitting, socialLogin}) => {
    return (
        <Form size='large' onSubmit={handleSubmit(login)}>
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
                <SocialLogin socialLogin={socialLogin} />
            </Segment>
        </Form>
    )
};



export default connect(null, mapDispatchToProps)(reduxForm({form: 'loginForm', validate})(LoginForm));
