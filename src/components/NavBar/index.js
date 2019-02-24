import React, { Component } from "react";
import './navbar.css';
import Banner from "../../assets/car-collection.jpg";

class NavBar extends Component {


    render() {

        return (
            <div>

                <nav className="navbar">

                    <p className="navbar-brand">Auto Data Search</p>
                    <div className="banner" />
                    <div className="navbar-content">

                        <ul className="navbar-items">
                            <li className="nav-item">
                                <a className="nav-link" href="/search">Auto Search</a>
                            </li>






                        </ul>

                    </div>

                </nav>

            </div>

        );
    }
}

export default NavBar;