import React from 'react'
import './navbar.scss';

export default function Navbar({menu,setMenu}) {
    return (
       <div className="nav-bar">
            <ul>
                <li >
                    <a href="#intro">Home</a>
                </li>
                
                 <li >
                    <a href="#portfolio">Postfolio</a>
                </li>
                 <li >
                    <a href="#works">Works</a>
                </li>
                
                 <li >
                    <a href="#testimonials">Testimonials</a>
                </li>
                
                  <li >
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
