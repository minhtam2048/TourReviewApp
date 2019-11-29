import React, { useCallback } from 'react';
import { Segment, Header, Form, Divider, Button } from 'semantic-ui-react';
import {Field, reduxForm } from 'redux-form';

import { useFirebase } from 'react-redux-firebase';
import {useDispatch} from 'react-redux';
import { updateProfile } from '../UserActions';
import { addYears } from 'date-fns';

import TextInput from '../../../app/common/form/TextInput';
import DateInput from '../../../app/common/form/DateInput';
import PlaceInput from '../../../app/common/form/PlaceInput';
import RadioInput from '../../../app/common/form/RadioInput';

const BasicPage = ({pristine, submitting, handleSubmit}) => {
    const dispatch = useDispatch();
    const firebase = useFirebase();
    
    const handleUpdateProfile = useCallback(
        (user) => {
            return dispatch(updateProfile({firebase}, user))
        }, [firebase, dispatch]
    )
    
        return (
            <Segment>
                <Header dividing size='large' content='My Info' />
                <Form onSubmit={handleSubmit(handleUpdateProfile)}>
                    <Field width={8} name='displayName' 
                           type='text' component={TextInput} 
                           placeholder='Nickname' />
                    <Form.Group inline>
                        <label>Gender: </label>
                        <Field name='gender' type='radio' value='male' label='male' component={RadioInput} />
                        <Field name='gender' type='radio' value='female' label='female' component={RadioInput} />
                    </Form.Group>

                    <Field width={8} name='dateOfBirth' 
                           type='text' component={DateInput} 
                           placeholder='Date of birth'
                           dateFormat='dd LLL yyyy'
                           showYearDropdown={true}
                           showMonthDropdown={true}
                           dropdownMode='select'
                           maxDate={addYears(new Date(), -18)} />

                    <Field witdh={8} name='city' 
                           options={{type: ['(cities)']}} label='Female' 
                           placeholder='City' component={PlaceInput}/>
                    <Divider/>
                    <Button disabled={pristine || submitting} size='large' positive content='Update Profile' />
                </Form>
            </Segment>
        );
    
}

export default reduxForm({form: 'userProfile', enableReinitialize: true, destroyOnUnmount: false})(BasicPage);