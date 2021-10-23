import './works.scss';
import workData from './workData';
import { useState } from 'react';

export default function Works() {
    const[currentSlider,setCurrentSlider] = useState(0)

    const handleClick = (direction) =>{
        direction === "left"? setCurrentSlider(currentSlider >0 ? currentSlider-1 :workData.length-1) :
        setCurrentSlider(currentSlider < workData.length -1 ? currentSlider+1 :0)

    }
    
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlider * 100}vw)`}}>
                {
                    workData.map((data)=>{
                        return (
                            <div className="container" key={workData.id}>
                    <div className="items">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={data.img}  />
                                </div>
                                <h2>{data.title}</h2>
                                <p>{data.desc} </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={data.img} alt="" />
                             
                        </div>
                    </div>
                </div>

                        )
                    })
                }
                
            </div>
           <img src="/assets/arrow.png" alt="" className="arrow left" onClick={()=>{
               handleClick("left")
           }}/>
           <img src="/assets/arrow.png" alt="" className="arrow right" onClick={()=>{
               handleClick()
           }}/>
        </div>
    )
}
