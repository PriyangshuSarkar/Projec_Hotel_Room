import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import './Signup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


export default function Signup() {
    return (
        <div>
            <div><Navbar /></div>
            <div className="form"><Form /></div>
        </div>
    );
}
