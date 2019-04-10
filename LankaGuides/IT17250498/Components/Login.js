import React from "react"
import ReactDom from "react-dom"

class Login extends React.Component{

    constructor(){
        super()
        this.state = {
            isLoggedin: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState=> {
            return {
                isLoggedin: !prevState.isLoggedin
            }
        })
    }

    render(){

        let buttonText = this.state.isLoggedin ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedin ? "You may logout before closing the browser" : "You have to login in"

            return (
            <div>
                <button onClick={this.handleClick}> {buttonText}</button>
                <h3>{displayText}</h3>
            </div>
        )
    }
}

export default Login