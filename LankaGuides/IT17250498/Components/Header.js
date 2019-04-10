import React from "react"

class Header extends React.Component {
    render() {
        return (
            <div>
                <header id="header">
                    <img src="#source" id="#id" />
                    <h3>Lanka Guides</h3>
                </header>

                <div id="navbar">
                    <ul>
                        <li><a href="Home"></a>Home</li>
                        <li><a href="Tourist"></a>Tourists</li>
                        <li><a href="Tour Guide"></a>Tour Guides</li>
                        <li><a href="Contact Us"></a>Contact Us</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header