import './intro.scss';
import { useEffect } from 'react';

export default function Intro() {

   
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/me.png" alt="profile-picture" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Abilash D J</h1>
                    <h3>Fullstack <span>Web Developer </span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down-arrow" />
                </a>
            </div>
           
        </div>
    )
}
