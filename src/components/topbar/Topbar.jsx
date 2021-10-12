import './topbar.scss'
import {Person,Mail} from "@material-ui/icons"
import Navbar from '../NavigationBar/Navbar'

export default function Topbar({menu,setMenu}) {
    return (
        <div className={"topbar "+ (menu && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Abilash</a>
                    <div className="itemContainer">
                    <Person className="icon"/>
                    <span>0451958727</span>
                    </div>
                    <div className="itemContainer">
                    <Mail className="icon"/>
                    <span>reddyabilash919@gmail.com</span>
                    </div>
                </div>
                <div className="middle-section">
                    <Navbar />
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>{
                        setMenu(!menu)
                    }}>
                       <span className="line1"></span>
                       <span className="line2"></span>
                       <span className="line3"></span>

                    </div>
                   
                </div>
            </div>
            
        </div>
    )
}
