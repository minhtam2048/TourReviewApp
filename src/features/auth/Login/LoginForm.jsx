import React from 'react';
import { Form, Segment, Button} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput  from '../../../app/common/form/TextInput';

const LoginForm = () => {
    return (
        <Form error size='large'>
            <Segment>
                <Field name="email" component={TextInput} type="text" placeholder="Email Address" autoComplete="new-password" />
                <Field name="password" component={TextInput} type="password" placeholder="password" autoComplete="new-password" />
                <Button fluid size="large" color="teal">
                    Login
                </Button>
            </Segment>
        </Form>
    )
};
export default reduxForm({form: 'loginForm'})(LoginForm);
