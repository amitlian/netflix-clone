import React from "react"
import "../HomescreenFolder/HomeScreen.css"
import Nav from "../NavBar/Nav"
import Banner from "../BannerFolder/Banner"

function HomeScreen(){
    return(
        <div className="homescreen">
            <Nav/>
            <Banner/>
            {/* Row */}
        </div>
    )
}

export default HomeScreen