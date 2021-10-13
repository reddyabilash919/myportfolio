import React from 'react';
import './navbar.scss';
import {useState} from 'react';

export default function Navbar() {
    const [navHome,setNavHome] = useState('active');
    const [navPortfolio,setNavPortfolio] = useState('');
    const [navWorks,setNavWorks] = useState('');
    const [navTestiomonials,setNavTestiomonials] = useState('');
    const [navContact,setNavContact] = useState('');
    

    return (
       <div className="nav-bar">
            <ul>
                <li >
                    <a href="#intro" className={navHome} onClick={()=>{
                        setNavHome("active");
                        setNavPortfolio('');
                        setNavWorks('');
                        setNavTestiomonials('');
                        setNavContact('');
                    }}>Home</a>
                </li>
                
                 <li >
                    <a href="#portfolio" className={navPortfolio}  onClick={()=>{
                        setNavHome('');
                        setNavPortfolio('active');
                        setNavWorks('');
                        setNavTestiomonials('');
                        setNavContact('');
                    }}>Postfolio</a>
                </li>
                 <li >
                    <a href="#works" className={navWorks}  onClick={()=>{
                        setNavHome("");
                        setNavPortfolio('');
                        setNavWorks('active');
                        setNavTestiomonials('');
                        setNavContact('');
                    }}>Works</a>
                </li>
                
                 <li >
                    <a href="#testimonials" className={navTestiomonials}  onClick={()=>{
                        setNavHome("");
                        setNavPortfolio('');
                        setNavWorks('');
                        setNavTestiomonials('active');
                        setNavContact('');
                    }}>Testimonials</a>
                </li>
                
                  <li >
                    <a href="#contact" className={navContact}  onClick={()=>{
                        setNavHome("");
                        setNavPortfolio('');
                        setNavWorks('');
                        setNavTestiomonials('');
                        setNavContact('active');
                    }}>Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
