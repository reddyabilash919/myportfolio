import './intro.scss';
import { useEffect, useRef } from 'react';
import { init } from 'ityped';

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
      init(textRef.current, 
        { showCursor: true, 
          backDelay:1500,
          backspeed:60,
          strings: ['Web Developer' ] })
    },[]);

   
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/me-new.png" alt="profile-picture" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Abilash D J</h1>
                    <h3>Fullstack <span ref={textRef}> </span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down-arrow" />
                </a>
            </div>
           
        </div>
    )
}
