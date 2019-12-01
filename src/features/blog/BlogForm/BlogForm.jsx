/*global google */
import React, { useEffect, useState } from 'react';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import {createBlog, updateBlog} from '../blogActions';
import {reduxForm, Field, initialize} from 'redux-form';
import {composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate';
import {useDispatch, useSelector} from 'react-redux';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';
import PlaceInput from '../../../app/common/form/PlaceInput';
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import { useFirebase, useFirestore, useFirestoreConnect } from 'react-redux-firebase';




const validate = combineValidators({
    title: isRequired({message: 'The blog title is required'}),
    category: isRequired({message: 'The category is required'}),
    description: composeValidators(
        isRequired({message: 'Please enter the description'}),
        hasLengthGreaterThan(4)({message: 'Description need to be atleast 5 characters'})
    )(),
    city: isRequired('city'),
    address: isRequired('address'),
    date: isRequired('date')
})

const category = [
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'travel', text: 'Travel', value: 'travel'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'lowCostTrip', text: 'Low Cost Trip', value: 'lowCostTrip'},
    {key: 'famousPlace', text: 'Famous Place', value: 'famousPlace'},
];



const BlogForm = ({change, history, match: {params}, invalid, submitting, pristine, handleSubmit}) => {
    const dispatch = useDispatch();
    const firebase = useFirebase();
    const firestore = useFirestore();
    const [cityLatLng, setCityLatLng] = useState({});
    const [addressLatLng, setAddressLatLng] = useState({});
    
    useFirestoreConnect(`blogs/${params.id}`);
    
    const blog = useSelector(state => (state.firestore.ordered.blogs && state.firestore.ordered.blogs.filter(e => e.id === params.id)[0]) || {});

    useEffect(() => {
        if (Object.keys(blog).length > 0) {
            dispatch(initialize('blogForm', blog));
        }
    }, [dispatch, blog]);


    const handleCitySelect = (selectedCity) => {
        geocodeByAddress(selectedCity)
        .then(results => getLatLng(results[0]))
        .then(latlng => {
            setCityLatLng(latlng);
        })
        .then(() => {
            change('city', selectedCity)
        })
    }

    const handleAddressSelect = (selectedAddress) => {
        geocodeByAddress(selectedAddress)
        .then(results => getLatLng(results[0]))
        .then(latlng => {
            setAddressLatLng(latlng);
        })
        .then(() => {
            change('address', selectedAddress)
        })
    }

    const handleFormSubmit = async values => {
        values.addressLatLng = addressLatLng;
        if(blog.id) {
            dispatch(updateBlog({firestore}, values));
            history.push(`/blogs/${blog.id}`);
        } else {
            let createdBlog = await dispatch(createBlog({firebase, firestore}, values));
            history.push(`/blogs/${createdBlog.id}`)
        }
    };

    return (
        <Grid>
            <Grid.Column width={10}>
                <Segment>
                    <Header sub color='teal' content='Blog Details'/>
                    <Form onSubmit={handleSubmit(handleFormSubmit)} autoComplete='off'>
                        <Field name="title" component={TextInput} placeholder="Blog title" />
                        
                        <Field name="category" component={SelectInput} options={category} placeholder="Blog category" />
                        
                        <Field name="description" component={TextArea} placeholder="What is this post about?" />
                        
                        <Header sub color='teal' content='Location Details' />

                            <Field name="city" component={PlaceInput}
                            options={{types: ['(cities)']}}
                            onSelect={handleCitySelect}
                            placeholder="Where you traveled to ?" />

                            <Field name="address" component={PlaceInput} 
                            options={{
                                location: new google.maps.LatLng(cityLatLng),
                                radius: 1000,
                                types: ['establishment']
                            }}
                            onSelect={handleAddressSelect}
                            placeholder="The more explicit information" />

                            <Field name="date" type="text" component={DateInput} 
                            dateFormat='yyyy/LL/dd HH:mm' 
                            timeFormat='HH:mm'
                            showTimeSelect 
                            placeholder="When did you go?" />


                        <Button disabled={invalid || submitting || pristine} positive type="submit">Submit</Button>
                        <Button onClick={history.goBack} type='button'>Cancel</Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
        
    );
    
};

export default reduxForm({form: 'blogForm', validate})(BlogForm);
