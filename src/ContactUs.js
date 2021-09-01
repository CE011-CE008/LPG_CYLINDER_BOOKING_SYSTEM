import React, { Component} from 'react';
import './ContactUs.css'
import 'bootstrap';
function ContactUs(){
    return (
        <div className="container">
            <form className="contact-form">
            <label for="nothing" class="contact-lbl">Contact Us</label>
                <div class="mb-3">
                    <label for="name" class="form-label">Email</label>
                    <input type="email" class="form-control" style={{fontSize:`15px`}} placeholder="Your email..." id="emailAddr"/>
                </div>
                <div class="mb-3">
                    <label for="comment" class="form-label">Comment</label>
                   <textarea class="form-control" style={{border:`1px solid black`, fontSize:`15px`,backgroundColor:`rgb(146, 197, 223)`,minHeight:`100px`}} id="comment" placeholder="Write something..."></textarea>
                </div>
                <button type="submit" style={{fontSize:`12px`}} class="btn btn-primary contact-btn">Submit</button>
            </form>
        </div>
    );
}

export default ContactUs;