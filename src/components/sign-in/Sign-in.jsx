import React, { Component } from 'react';
import FormInput from '../form-input/Form-input';
import CustomButton from '../custom-button/Custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

import './Sign-in.scss';

class SignIn extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    submitHandler = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.log('unable to login ', error.message);
        }
    };

    changeHandler = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    };


    render() {
    return (
        <div className="sign-in">
            <h2>
            I already have an account
            </h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.submitHandler}>
                <FormInput
                type="email"
                name="email"
                value={this.state.email}
                handleChange={this.changeHandler}
                label="email"
                required/>
                <FormInput
                type="password"
                name="password"
                label="password"
                value={this.state.password}
                handleChange={this.changeHandler}
                required/>
                <div className="buttons">
                <CustomButton type="submit">
                    Submit
                </CustomButton>
                <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                    Sign In with Google
                </CustomButton>
                </div>
            </form>
        </div>
    );
    }
}

export default SignIn;