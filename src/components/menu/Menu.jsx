import React from 'react';
import './menu.scss';

export default function Menu({menu,setMenu}) {
    return (
        <div className={"menu " +(menu && "active")}>
            <ul>
                <li>
                    <a href="#intro">Home</a>
                </li>
                
                <li>
                    <a href="#portfolio">Postfolio</a>
                </li>
                
                <li>
                    <a href="#works">Works</a>
                </li>
                
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
