import React from "react"
import ReactDom from "react-dom"

class SignIn extends React.Component{

    render(){

        return (
            <div>
                <form>
                    <label>
                        <br />
                        <br />
                        <br />
                        <h3>Sign In</h3>
                        <br />
                        <br />
                        <br />
                        Name:
                        <input type="text" name="name" />
                        <br />
                        <br />
                        NIC:
                        <input type="text" name="nic" />
                        <br />
                        <br />
                        Address:
                        <input type="text" name="addres" />
                        <br />
                        <br />
                        BirthDate:
                        <input type="text" name="bd" />
                        <br />
                        <br />
                    </label>
                    <div>
                        <button> Sign IN</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn