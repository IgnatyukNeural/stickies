import React from 'react';
import './Landing.css';

import { Link } from 'react-router-dom'; 


function Landing() {
    return(
        <div>
            <div className="landing-background">
                <p className="landing-background__p">Make your business well-organised</p>
                <Link to="/editor" className="landing-background__btn">Free start</Link> 
            </div>
            <div className="purpose">
                <p>
                    Have you ever realised that it's kind of hard to keep all things in mind, especially when it comes to keeping in mind some really compilcated details? <br/>
                    With our stickies you'll no longer forget what you wanted to do the other day <br/>
                    
                    As well as you'll be able to split your tasks in different categories
                </p>
            </div>
            <div className="showoff">

            </div>
            <div className="footer">
                <ul className="footer_links">
                    <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                    <a href="https://github.com/IgnatyukNeural"><i className="fab fa-github"></i></a>
                    <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                    <a href="/">Stickies&copy; </a>
                </ul>
            </div>
        </div>
    )
}

export default Landing;