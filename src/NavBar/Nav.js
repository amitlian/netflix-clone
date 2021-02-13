import React, { useEffect, useState } from "react"
import "../NavBar/Nav.css"

function Nav() {
    const [show,handleshow] = useState(false)

    const transitionalNav = ()=>{
        if(window.scrollY>100){
            handleshow(true)
        }else{
            handleshow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionalNav)
        return()=> window.removeEventListener("scroll",transitionalNav)
    }, [])
    return(
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_content">
                <img className="nav_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
                <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
            </div>

        </div>
    )

}

export default Nav
