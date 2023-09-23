import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.svg"

export default function Navbar() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <img src={Logo} alt="Logo" width="45" class="d-inline-block align-text-Center" />
                            GCETTB Accommodations
                    </Link>
                </div>
            </nav>
        </div>
    )
}