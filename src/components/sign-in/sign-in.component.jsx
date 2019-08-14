import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export default class SignIn extends Component {
    state = {
        email: "",
        password: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            email: "",
            password: ""
        });
    };

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        id="email"
                        name="email"
                        label="email"
                        type="email"
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        id="password"
                        name="password"
                        label="password"
                        type="password"
                        value={this.state.password}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
                            {" "}
                            Sign in with Google{" "}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
