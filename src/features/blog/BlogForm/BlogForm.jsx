import React, { Component } from 'react';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {createBlog, updateBlog} from '../blogActions';
import {reduxForm, Field} from 'redux-form';
import {composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate';
import cuid from 'cuid';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';

const mapStateToProps = (state, ownProps) => {
    const blogId = ownProps.match.params.id;

   let blog= {};

    if (blogId && state.blogs.length > 0) {
        blog = state.blogs.filter(blog => blog.id === blogId)[0];
    }

    return {
        initialValues: blog
    }
}

const mapDispatchToProps = {
    createBlog,
    updateBlog
};

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
    {key: 'foods', text: 'Foods', value: 'foods'},
    {key: 'travel', text: 'Travel', value: 'travel'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'lowCostTrip', text: 'Low Cost Trip', value: 'lowCostTrip'},
    {key: 'famousPlace', text: 'Famous Place', value: 'famousPlace'},
]

class BlogForm extends Component {

    onFormSubmit = values => {
        console.log(values);
        // evt.preventDefault();
        if (this.props.initialValues.id) {
            this.props.updateBlog(values);
            this.props.history.push(`/blogs/${this.props.initialValues.id}`)
        } else {
            const newBlog = {
                ...values,
                id: cuid(),
                postPhotoURL: '/assets/user.png',
                postedBy:'Bob'
            }
            this.props.createBlog(newBlog);
            this.props.history.push(`/blogs/${newBlog.id}`);
        }
    }

   

    render() {
        const { history, initialValues, invalid, submitting, pristine } = this.props;

        return (
            <Grid>
                <Grid.Column width={10}>
                <Segment>
                    <Header sub color='teal' content='Blog Details'/>
                    <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)} autoComplete='off'>
                        <Field name="title" component={TextInput} placeholder="Blog title" />
                        <Field name="category" component={SelectInput} options={category} placeholder="Blog category" />
                        <Field name="description" component={TextArea} placeholder="What is this post about?" />
                        
                        <Header sub color='teal' content='Location Details' />
                            <Field name="city" component={TextInput} rows={4} placeholder="Where you traveled to ?" />
                            <Field name="address" component={TextInput} placeholder="The more explicit information" />
                            <Field name="date" component={DateInput} dateFormat='dd LLL yyyy h:mm a' showTimeSelect timeFormat='HH:mm' placeholder="When did you go?" />
                        <Button disabled={invalid || submitting || pristine} positive type="submit">Submit</Button>
                        <Button onClick={
                            initialValues.id ? () => history.push(`/blogs/${initialValues.id}`) 
                                             : () => history.push(`blogs`)} 
                                             type="button">Cancel</Button>
                    </Form>
            </Segment>
                </Grid.Column>
            </Grid>
            
        );
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'blogForm', validate})(BlogForm));
