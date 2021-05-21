import React, { PureComponent } from "react"
import { $CombinedState } from "redux";
import Axios from "axios";

class LoginForm extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            userNameValidationMessage: "Invalid username",
            showUserNameError: false,
            password: "",
            passwordValidationMessage: "Invalid password",
            showPasswordError: false,
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }

    onBlueTest = (e) => {
        console.log('hello', e)
    }
    onChangeHandler = (field) => (event) => {
        console.log("On change handler",field,  event.target.value)
        this.setState({
            [field]: event.target.value
        })
        // Todo: update State

    }
    validateFields = (field) => (event) => {
        const { userName, password } = this.state
        if (field === "userName") {
            // Mandatory validation
            if(userName === "") {
                this.setState({
                    showUserNameError: true
                })
            } else {
                this.setState({
                    showUserNameError: false
                })
            }
        }
        if (field === "password") {
            // Mandatory validation
            if(password.length < 8) {
                this.setState({
                    showPasswordError: true
                })
            } else {
                this.setState({
                    showPasswordError: false
                })
            }
        }
    }
    clickHandler = () => {

        // Todo: Add button Submit and show items
        // Button click handler here
    }

    render = () => {
        // Todo: Get values from state
        const { userName, password, userNameValidationMessage, passwordValidationMessage, showUserNameError, showPasswordError } = this.state
        return (
            <div style={{ backgroundColor: "pink", width: "1000px", height: "300px", alignSelf: "center" }}>
                <h1 style={{ textAlign: "center"}}>Login</h1>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "20px", maxWidth: "600px", margin: "auto" }}>
                    <input style={{ margin: "10px 5px"}} type="text" onBlur={this.validateFields("userName")} onChange={this.onChangeHandler("userName")} placeholder="User name" value={userName} />
                    {
                        showUserNameError && <span style={{ color: "red"}}>{userNameValidationMessage}</span>
                    }
                    <input style={{ margin: "10px 5px"}} type="password" onBlur={this.validateFields("password")} onChange={this.onChangeHandler("password")} placeholder="Password" value={password} />
                    {
                        showPasswordError && <span style={{ color: "red"}}>{passwordValidationMessage}</span>
                    }
                    <button style={{ margin: "10px 5px"}} onClick={this.clickHandler}>Sign-in</button>
                </div>
            </div>
        )
    };
}

export default LoginForm


// Text/Passowrd  -- onChange -> (value)Component_State

// Submit -- click -> component_state (username, password) -> ajax

// Component, Pure component, function

// Container: Pure component, Component
// View: Function, Pure component
