import React from 'react';
import './menu.scss';

export default function Menu({menu,setMenu}) {
    return (
        <div className={"menu " +(menu && "active")}>
            <ul>
                <li onClick={()=>{setMenu(!menu)}}>
                    <a href="#intro">Home</a>
                </li>
                
                 <li onClick={()=>{setMenu(!menu)}}>
                    <a href="#portfolio">Postfolio</a>
                </li>
                 <li onClick={()=>{setMenu(!menu)}}>
                    <a href="#works">Works</a>
                </li>
                
                 <li onClick={()=>{setMenu(!menu)}}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                
                  <li onClick={()=>{setMenu(!menu)}}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
