import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FormTitle from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textLink';

class SignupForm extends Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className='sign-up-form'>
                <FormTitle className='sign-up-form__title' text='New User' />
                <Field
                    className='sign-up-form__fullname'
                    placeholder='Enter Your Full Name'
                    name='fullname'
                    title="Full Name"
                    type='text' 
                    component={FormInput}
                    />
                    
                <Field
                    className='sign-up-form__unit'
                    placeholder='Enter Unit #'
                    name='unit'
                    title="Unit #"
                    type='text' 
                    component={FormInput}
                    />
                <Field
                    className='sign-up-form__email'
                    placeholder='Enter Email'
                    name='email'
                    title="Email"
                    type='email' 
                    component={FormInput}
                    />
                <Field
                    className='sign-up-form__password'
                    placeholder='Enter Password'
                    name='password'
                    title="Password"
                    type='password' 
                    component={FormInput}
                    />
                <Field
                    className='sign-up-form__create-account'
                    name='createaccount'
                    title="Create Account"
                    type='submit' 
                    component={FormButton}
                    />

                <div className='sign-up-form__text-links'>
                    <TextLink to='/forgot' text='Forgot Password' />
                    <TextLink to='/signup' text='Not a member? Register here' />
                </div>
            </form>
        )
    }
}

SignupForm = reduxForm({
    form: 'signup'
})(SignupForm);

export default SignupForm;