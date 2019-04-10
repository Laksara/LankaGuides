import React from "react"
import Login from "./Login"
import SignIn from "./SignIn"

class Main extends React.Component {
    render() {
        return (
            <div>

                <div id="leftsidebar">
                    <ul>
                        <li><a href="Home"></a>Home</li>
                        <li><a href="Tourist"></a>Tourists</li>
                        <li><a href="Tour Guide"></a>Tour Guides</li>
                        <li><a href="Contact Us"></a>Contact Us</li>
                    </ul>
                </div>
                <main class="maincontent">
                    <form>
                        <label>
                            Name:
                                <input type="text" name="name" />
                                <br />
                                <br />
                                <br />
                            PassWord:
                                <input type="text" name="nic" />
                                <br />
                                <br />
                                <br />
                        </label>
                    </form>

                    <Login />

                    <SignIn />
                </main>
            </div>
        )
    }
}

export default Main