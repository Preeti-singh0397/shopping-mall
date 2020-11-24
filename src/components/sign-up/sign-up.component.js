import React, { Component } from 'react'
import "./sign-up.style.scss"
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";



class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confiormPassword: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confiormPassword } = this.state;
        if (password !== confiormPassword) {
            alert("Password Don't Match");
            return
        }

        try {

            const { user } = auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName })
            this.setState({ displayName: "", email: "", password: "", confiormPassword: "" })


        } catch (error) {

        }

    }


    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I don't have a account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        lable="displayName"
                        required
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name="email"
                        type="email"
                        lable="Email"
                        required
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name="password"
                        type="password"
                        lable="Password"
                        required
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name="confiormPassword"
                        type="password"
                        lable="Confirm Password"
                        required
                        value={this.state.confiormPassword}
                        handleChange={this.handleChange}
                    />

                    <CustomButton type="submit">Sign Up</CustomButton>


                </form>

            </div>
        )
    }
}

export default SignUp;