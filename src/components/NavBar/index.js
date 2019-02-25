import React, { Component } from "react";
import './navbar.css';
import Banner from "../../assets/car-collection.jpg";

class NavBar extends Component {


    render() {

        return (
            <div>

                <nav className="navbar">

                    <h1 className="navbar-brand">Automobile Data Search</h1>
                    <div className="banner" />
                    <div className="navbar-content">

                        <ul className="navbar-items">
                            <li className="nav-item">
                                <a className="nav-link" href="/search">Search by Make</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/search">Search by Model</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/search">Search by Year</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/search">Search by Country of Origin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/search">Full Database</a>
                            </li>






                        </ul>

                    </div>

                </nav>

            </div>

        );
    }
}

export default NavBar;