import React, { Component } from 'react';
import FormInput from '../form-input/Form-input';
import CustomButton from '../custom-button/Custom-button';

import './Sign-in.scss';

class SignIn extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    submitHanddle = event => {
        event.preventDefault();
        this.setState({ email: '', password: ''});
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

            <form>
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

                <CustomButton type="submit">
                    Submit
                </CustomButton>
            </form>
        </div>
    );
    }
}

export default SignIn;