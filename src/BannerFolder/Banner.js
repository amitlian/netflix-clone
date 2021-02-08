import React from "react"
import "../BannerFolder/Banner.css"

function Banner() {
    function truncate(string,n) {
        return string?.length >n? string.substr(0,n-1) + '....': string;

        
    }
    return(
        <header className="banner" style={{
            backgroundImage: `url("https://xeraone.com/wp-content/uploads/Daredevil-Banner-1024x474.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
        }}>
            <div className="banner_content">
                <h1 className="banner_title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                <h1 className="banner_discription">{truncate('Marvels Daredevil, or simply Daredevil, is an American television series created by Drew Goddard for the streaming service Netflix, based on the Marvel Comics character of the same name. It is set in the Marvel Cinematic Universe (MCU), sharing continuity with the films of the franchise, and is the first in a series of shows that lead to The Defenders crossover miniseries. The series is produced by Marvel Television in association with ABC Studios, with DeKnight Productions for the first season and Goddard Textiles for the first and second seasons. Steven S. DeKnight served as showrunner on the first season, with Doug Petrie and Marco Ramirez taking over for the second season, and Erik Oleson joining the series as its showrunner for its third season; Goddard served as a consultant for the series.',150)}</h1>
                </div>
            </div>

            <div className="banner--fadeBottom"/>
        </header>
    )
    
}

export default Banner