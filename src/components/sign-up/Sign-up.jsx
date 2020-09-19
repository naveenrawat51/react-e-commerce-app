import React, { Component } from "react";
import FormInput from "../form-input/Form-input";
import CustomButton from "../custom-button/Custom-button";
import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils.js";
import "./Sign-up.scss";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  submitHandler = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("unable to sign up ", error.message);
    }
  };

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.submitHandler}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.changeHandler}
            label="Name"
            required
          ></FormInput>

          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.changeHandler}
            label="Email"
            required
          ></FormInput>

          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.changeHandler}
            label="Password"
            required
          ></FormInput>

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.changeHandler}
            label="Confirm Password"
            required
          ></FormInput>

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
