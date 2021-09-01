import React, { Component} from 'react';
import {NavLink} from 'react-router-dom'
import './Login.css'
import 'bootstrap';
function Login(){
    return(
        <div className="Container" style={{ backgroundImage:`url('./images.png')`}}>
            <form className="login-form">
            <label for="nothing" class="lbl">Login</label>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter your email..." aria-describedby="emailHelp" required />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" placeholder="Enter Password" id="exampleInputPassword1" required/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                </div>
                <button type="submit" style={{fontSize:`12px`}} class="btn btn-primary btn">Submit</button><br/>
                <NavLink to='/signUp'>Don't have an account?</NavLink>
            </form>
        </div>
    );
}
export default Login;