import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Form.css';

export default function Form() {
    return (
        <div className="centered-container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Sign up</h5>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName1" className="form-label">Name</label>
                            <input type="Name" className="form-control" id="exampleInputName1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPhoneNo1" className="form-label">Phone No. (What's App)</label>
                            <input type="phone" className="form-control" id="exampleInputPhoneNo.1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
