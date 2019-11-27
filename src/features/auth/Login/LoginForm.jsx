import React from 'react';
import { Form, Segment, Button} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput  from '../../../app/common/form/TextInput';
import {login} from '../authActions';
import {connect} from 'react-redux'

const mapDispatchToProps = {
    login
}

const LoginForm = ({login, handleSubmit}) => {
    return (
        <Form error size='large' onSubmit={handleSubmit(login)}>
            <Segment>
                <Field name="email" component={TextInput} type="text" 
                       placeholder="Email Address" autoComplete="new-password" />
                <Field name="password" component={TextInput} type="password" 
                       placeholder="password" autoComplete="new-password" />
                <Button fluid size="large" color="teal">
                    Login
                </Button>
            </Segment>
        </Form>
    )
};



export default connect(null, mapDispatchToProps)(reduxForm({form: 'loginForm'})(LoginForm));
