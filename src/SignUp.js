import React, { Component } from 'react';
import './Login.css'
import 'bootstrap';
import { NavLink } from 'react-router-dom';
function SignUp() {
    return (
        <div className="Container">
            <div className="signup-bg" style={{ backgroundImage: `url(https://nifa.aero/wp-content/uploads/sign-up-here.png)` }}/>
            <form className="signUp-form">
                <label for="nothing" class="lbl">Sign Up</label>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" placeholder="Enter your name..." id="name" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" placeholder="Enter your email..." id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="mobile" class="form-label">Mobile</label>
                    <input type="tel" pattern="[0-9]{10}" placeholder="Enter your mobile number" class="form-control" id="mobile" required/>
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" placeholder="Enter your address" id="address" required />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" placeholder="Enter your password" id="password" required />
                </div>
                <div class="mb-3">
                    <label for="confirmPass" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" placeholder="Enter your password again" id="confirmPass" required/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="termsCond"/>
                    <label class="form-check-label" for="termsCond">I agree to the Terms & Conditions</label>
                </div>
                <button type="submit" style={{fontSize:`12px`}} class="btn btn-primary btn">Submit</button><br/>
                <NavLink to='/login'>Already have an account?</NavLink>
            </form>
        </div>
    );
}
export default SignUp;